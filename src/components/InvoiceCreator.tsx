"use client";

import { useState, useRef, useCallback, ChangeEvent } from "react";
import {
  Plus,
  Trash2,
  Download,
  Eye,
  EyeOff,
  MessageCircle,
  Leaf,
  Upload,
  X,
  FileText,
  Lock,
} from "lucide-react";
import { exportInvoicePDF } from "@/utils/exportPDF";

// ── Types ────────────────────────────────────────────────────────────────────

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface InvoiceFormData {
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  businessLogo: string | null;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  customerEmail: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  items: LineItem[];
  taxRate: number;
  discount: number;
  notes: string;
  language: "en" | "si" | "ta";
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function generateInvoiceNumber() {
  const year = new Date().getFullYear();
  const rand = Math.floor(Math.random() * 900) + 100;
  return `INV-${year}-${rand}`;
}

function today() {
  return new Date().toISOString().split("T")[0];
}

function in30Days() {
  return new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0];
}

function formatLKR(amount: number) {
  return `LKR ${amount.toLocaleString("en-LK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const initialData: InvoiceFormData = {
  businessName: "",
  businessAddress: "",
  businessPhone: "",
  businessEmail: "",
  businessLogo: null,
  customerName: "",
  customerAddress: "",
  customerPhone: "",
  customerEmail: "",
  invoiceNumber: generateInvoiceNumber(),
  invoiceDate: today(),
  dueDate: in30Days(),
  items: [{ id: "1", description: "", quantity: 1, unitPrice: 0 }],
  taxRate: 0,
  discount: 0,
  notes: "",
  language: "en",
};

// ── Main Component ────────────────────────────────────────────────────────────

export function InvoiceCreator() {
  const [data, setData] = useState<InvoiceFormData>(initialData);
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // ── Computed values ────────────────────────────────────────────────────────

  const subtotal = data.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
  const taxAmount = subtotal * (data.taxRate / 100);
  const total = subtotal + taxAmount - data.discount;

  // ── Field updaters ─────────────────────────────────────────────────────────

  const updateField = useCallback(
    <K extends keyof InvoiceFormData>(key: K, value: InvoiceFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const updateItem = useCallback(
    (id: string, key: keyof LineItem, value: string | number) => {
      setData((prev) => ({
        ...prev,
        items: prev.items.map((item) =>
          item.id === id ? { ...item, [key]: value } : item
        ),
      }));
    },
    []
  );

  const addItem = useCallback(() => {
    setData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: Date.now().toString(),
          description: "",
          quantity: 1,
          unitPrice: 0,
        },
      ],
    }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  }, []);

  // ── Logo upload ────────────────────────────────────────────────────────────

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Logo must be under 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => updateField("businessLogo", reader.result as string);
    reader.readAsDataURL(file);
  };

  // ── PDF generation ─────────────────────────────────────────────────────────

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    setIsGenerating(true);
    setShowPreview(true);
    // Small delay to ensure preview renders
    await new Promise((r) => setTimeout(r, 300));
    try {
      await exportInvoicePDF(data.invoiceNumber, previewRef.current);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#22C278]" />
              Create Invoice
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Fill in your details, preview in real time, download as PDF.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Language toggle */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1 text-xs font-semibold">
              {(["en", "si", "ta"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => updateField("language", lang)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    data.language === lang
                      ? "bg-white text-[#22C278] shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  title={
                    lang === "en"
                      ? "English"
                      : lang === "si"
                      ? "Sinhala"
                      : "Tamil"
                  }
                >
                  {lang === "en" ? "EN" : lang === "si" ? "සිං" : "த"}
                </button>
              ))}
            </div>

            {/* Mobile preview toggle */}
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="lg:hidden flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-xl"
            >
              {showPreview ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>

            {/* WhatsApp send (Pro) */}
            <button
              onClick={() => setShowWhatsAppModal(true)}
              className="flex items-center gap-1.5 text-sm font-semibold bg-green-50 text-[#22C278] border border-green-200 px-4 py-2 rounded-xl hover:bg-green-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Send via WhatsApp</span>
              <Lock className="w-3 h-3 text-gray-400 ml-1" />
            </button>

            {/* Download PDF */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="btn-shine flex items-center gap-1.5 text-sm font-bold bg-[#22C278] hover:bg-[#1db86d] text-white px-5 py-2 rounded-xl transition-all disabled:opacity-60"
            >
              <Download className="w-4 h-4" aria-hidden />
              {isGenerating ? "Generating…" : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[1fr,420px] gap-8 items-start">
          {/* ────────────────── FORM PANEL ────────────────── */}
          <div className="space-y-6">
            {/* Business Details */}
            <FormSection title="Your Business Details" icon="🏢">
              {/* Logo upload */}
              <div className="col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Business Logo (optional)
                </label>
                <div className="flex items-start gap-4">
                  {data.businessLogo ? (
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={data.businessLogo}
                        alt="Business logo"
                        className="w-20 h-20 object-contain rounded-xl border border-gray-200 bg-gray-50 p-2"
                      />
                      <button
                        onClick={() => updateField("businessLogo", null)}
                        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                        aria-label="Remove logo"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <label className="w-20 h-20 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[#22C278] hover:bg-green-50 transition-all">
                      <Upload className="w-5 h-5 text-gray-300" />
                      <span className="text-[10px] text-gray-400 text-center leading-tight">
                        Upload logo
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    PNG, JPG up to 5MB. <br />
                    Appears at the top of your invoice.
                  </p>
                </div>
              </div>

              <FormField
                label="Business Name"
                value={data.businessName}
                placeholder="e.g. Nalini's Salon"
                onChange={(v) => updateField("businessName", v)}
                required
              />
              <FormField
                label="Business Email"
                value={data.businessEmail}
                placeholder="hello@yourbusiness.lk"
                type="email"
                onChange={(v) => updateField("businessEmail", v)}
              />
              <FormField
                label="Phone Number"
                value={data.businessPhone}
                placeholder="+94 77 123 4567"
                type="tel"
                onChange={(v) => updateField("businessPhone", v)}
              />
              <div className="col-span-2">
                <FormField
                  label="Business Address"
                  value={data.businessAddress}
                  placeholder="123, Main Street, Colombo 03, Sri Lanka"
                  onChange={(v) => updateField("businessAddress", v)}
                  multiline
                />
              </div>
            </FormSection>

            {/* Customer Details */}
            <FormSection title="Customer Details" icon="👤">
              <FormField
                label="Customer Name"
                value={data.customerName}
                placeholder="e.g. Sumalee Perera"
                onChange={(v) => updateField("customerName", v)}
                required
              />
              <FormField
                label="Customer Email"
                value={data.customerEmail}
                placeholder="customer@email.com"
                type="email"
                onChange={(v) => updateField("customerEmail", v)}
              />
              <FormField
                label="Phone Number"
                value={data.customerPhone}
                placeholder="+94 77 987 6543"
                type="tel"
                onChange={(v) => updateField("customerPhone", v)}
              />
              <div className="col-span-2">
                <FormField
                  label="Customer Address"
                  value={data.customerAddress}
                  placeholder="456, Park Road, Kandy, Sri Lanka"
                  onChange={(v) => updateField("customerAddress", v)}
                  multiline
                />
              </div>
            </FormSection>

            {/* Invoice Details */}
            <FormSection title="Invoice Details" icon="📄">
              <FormField
                label="Invoice Number"
                value={data.invoiceNumber}
                placeholder="INV-2026-001"
                onChange={(v) => updateField("invoiceNumber", v)}
              />
              <FormField
                label="Invoice Date"
                value={data.invoiceDate}
                type="date"
                onChange={(v) => updateField("invoiceDate", v)}
              />
              <FormField
                label="Due Date"
                value={data.dueDate}
                type="date"
                onChange={(v) => updateField("dueDate", v)}
              />
            </FormSection>

            {/* Line Items */}
            <FormSection title="Invoice Items" icon="📦">
              <div className="col-span-2 space-y-3">
                {/* Header */}
                <div className="hidden sm:grid grid-cols-[1fr,80px,110px,36px] gap-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-1">
                  <span>Description</span>
                  <span className="text-center">Qty</span>
                  <span className="text-right">Unit Price</span>
                  <span />
                </div>

                {/* Items */}
                {data.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-[1fr,80px,110px,36px] gap-2 items-center"
                  >
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(item.id, "description", e.target.value)
                      }
                      placeholder="Service or product description"
                      className="formInput"
                      aria-label="Item description"
                    />
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", Number(e.target.value))
                      }
                      className="formInput text-center"
                      aria-label="Quantity"
                    />
                    <input
                      type="number"
                      value={item.unitPrice}
                      min={0}
                      step={0.01}
                      onChange={(e) =>
                        updateItem(item.id, "unitPrice", Number(e.target.value))
                      }
                      className="formInput text-right"
                      aria-label="Unit price"
                      placeholder="0.00"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      disabled={data.items.length === 1}
                      className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-30"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Row totals preview */}
                {data.items.some((i) => i.unitPrice > 0) && (
                  <div className="space-y-1 pl-1 pt-1">
                    {data.items
                      .filter((i) => i.unitPrice > 0 || i.description)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-xs text-gray-400"
                        >
                          <span className="truncate max-w-[60%]">
                            {item.description || "—"}
                          </span>
                          <span>
                            {formatLKR(item.quantity * item.unitPrice)}
                          </span>
                        </div>
                      ))}
                  </div>
                )}

                <button
                  onClick={addItem}
                  className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-200 hover:border-[#22C278] text-gray-400 hover:text-[#22C278] py-3 rounded-xl text-sm font-semibold transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Item
                </button>
              </div>
            </FormSection>

            {/* Summary / Totals */}
            <FormSection title="Summary" icon="💰">
              <div className="col-span-2 space-y-4">
                {/* Tax */}
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Tax Rate (%)
                    </label>
                    <input
                      type="number"
                      value={data.taxRate}
                      min={0}
                      max={100}
                      step={0.5}
                      onChange={(e) =>
                        updateField("taxRate", Number(e.target.value))
                      }
                      className="formInput"
                      placeholder="0"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Discount (LKR)
                    </label>
                    <input
                      type="number"
                      value={data.discount}
                      min={0}
                      step={1}
                      onChange={(e) =>
                        updateField("discount", Number(e.target.value))
                      }
                      className="formInput"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Totals summary */}
                <div className="bg-gray-50 rounded-2xl p-4 space-y-2 border border-gray-100">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatLKR(subtotal)}</span>
                  </div>
                  {data.taxRate > 0 && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tax ({data.taxRate}%)</span>
                      <span>{formatLKR(taxAmount)}</span>
                    </div>
                  )}
                  {data.discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>− {formatLKR(data.discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-black text-lg text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-[#22C278]">{formatLKR(total)}</span>
                  </div>
                </div>
              </div>
            </FormSection>

            {/* Notes */}
            <FormSection title="Notes & Terms" icon="📝">
              <div className="col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                  Notes (optional)
                </label>
                <textarea
                  value={data.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="e.g. Payment due within 30 days. Bank transfer: BOC 1234567890. Thank you for your business!"
                  rows={4}
                  className="formInput resize-none"
                />
              </div>
            </FormSection>

            {/* Download CTA */}
            <div className="flex gap-3 pb-8">
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className="btn-shine flex-1 flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold py-4 rounded-2xl text-base shadow-lg shadow-green-100 transition-all disabled:opacity-60"
              >
                <Download className="w-5 h-5" aria-hidden />
                {isGenerating ? "Generating PDF…" : "Download Invoice PDF"}
              </button>
            </div>
          </div>

          {/* ────────────────── PREVIEW PANEL ────────────────── */}
          <div className="lg:sticky lg:top-24">
            {/* Desktop: always show; Mobile: toggled */}
            <div className={`${showPreview ? "block" : "hidden lg:block"}`}>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      Live Preview
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    Real-time
                  </span>
                </div>

                {/* Scaled preview */}
                <div className="overflow-auto max-h-[700px] p-4 bg-gray-50">
                  <div
                    style={{ transform: "scale(0.72)", transformOrigin: "top left", width: "138.9%" }}
                  >
                    <InvoicePreview
                      data={data}
                      subtotal={subtotal}
                      taxAmount={taxAmount}
                      total={total}
                      ref={previewRef}
                    />
                  </div>
                </div>
              </div>

              {/* Eco note */}
              <div className="mt-4 flex items-center gap-2 text-xs text-[#065F46] bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <Leaf className="w-4 h-4 text-[#22C278] flex-shrink-0" />
                <span>
                  This invoice is generated client-side. Your data never leaves
                  your device.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WhatsApp Pro Modal ────────────────────────────────────────────── */}
      {showWhatsAppModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowWhatsAppModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-7 h-7 text-[#22C278]" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 text-center mb-2">
              WhatsApp Sending
            </h3>
            <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
              Send invoices directly to your customer&apos;s WhatsApp — this is
              a <span className="font-bold text-[#22C278]">Pro feature</span>.
              Upgrade to EcoBill Pro for LKR 4,990/month.
            </p>
            <div className="space-y-3">
              <a
                href="/pricing"
                className="btn-shine w-full flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold py-3.5 rounded-xl transition-all"
              >
                Start 7-Day Free Trial
              </a>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full text-gray-500 hover:text-gray-700 font-semibold py-2 text-sm"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .formInput {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          color: #111827;
          background: white;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
        .formInput:focus {
          border-color: #22c278;
          box-shadow: 0 0 0 3px rgba(34, 194, 120, 0.1);
        }
        .formInput::placeholder {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}

// ── Form Section wrapper ──────────────────────────────────────────────────────

function FormSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
        <h2 className="font-bold text-gray-800 text-sm flex items-center gap-2">
          <span aria-hidden>{icon}</span>
          {title}
        </h2>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

// ── Form Field ────────────────────────────────────────────────────────────────

function FormField({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  required,
  multiline,
}: {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (v: string) => void;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="formInput resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="formInput"
          required={required}
        />
      )}
    </div>
  );
}

// ── Invoice Preview (the printable invoice) ───────────────────────────────────

import { forwardRef } from "react";

interface PreviewProps {
  data: InvoiceFormData;
  subtotal: number;
  taxAmount: number;
  total: number;
}

const InvoicePreview = forwardRef<HTMLDivElement, PreviewProps>(
  ({ data, subtotal, taxAmount, total }, ref) => {
    return (
      <div
        id="invoice-preview"
        ref={ref}
        className="bg-white"
        style={{
          width: "794px",
          minHeight: "1123px",
          fontFamily: "var(--font-jakarta), system-ui, sans-serif",
          fontSize: "14px",
          color: "#111827",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#065F46",
            padding: "40px 48px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Business info */}
          <div>
            {data.businessLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.businessLogo}
                alt="Business logo"
                style={{
                  maxHeight: "60px",
                  maxWidth: "160px",
                  objectFit: "contain",
                  marginBottom: "12px",
                  background: "white",
                  borderRadius: "8px",
                  padding: "6px",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#22C278",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "18px" }}>🌿</span>
                </div>
                <span
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: "20px",
                  }}
                >
                  EcoBill
                </span>
              </div>
            )}
            <p
              style={{ color: "white", fontWeight: "700", fontSize: "18px", margin: 0 }}
            >
              {data.businessName || "Your Business Name"}
            </p>
            {data.businessAddress && (
              <p style={{ color: "#86efac", fontSize: "12px", marginTop: "4px", whiteSpace: "pre-line" }}>
                {data.businessAddress}
              </p>
            )}
            {data.businessPhone && (
              <p style={{ color: "#86efac", fontSize: "12px" }}>
                {data.businessPhone}
              </p>
            )}
            {data.businessEmail && (
              <p style={{ color: "#86efac", fontSize: "12px" }}>
                {data.businessEmail}
              </p>
            )}
          </div>

          {/* Invoice info */}
          <div style={{ textAlign: "right" }}>
            <p
              style={{ color: "#86efac", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}
            >
              Invoice
            </p>
            <p
              style={{ color: "white", fontWeight: "800", fontSize: "28px", margin: "4px 0" }}
            >
              {data.invoiceNumber}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
                <span style={{ color: "#86efac", fontSize: "11px" }}>Date:</span>
                <span style={{ color: "white", fontSize: "12px" }}>
                  {data.invoiceDate}
                </span>
              </div>
              <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end" }}>
                <span style={{ color: "#86efac", fontSize: "11px" }}>Due:</span>
                <span style={{ color: "#4ade80", fontSize: "12px", fontWeight: "600" }}>
                  {data.dueDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 48px" }}>
          {/* Billed To */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "40px",
              gap: "32px",
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ color: "#9ca3af", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                Billed To
              </p>
              <p style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>
                {data.customerName || "Customer Name"}
              </p>
              {data.customerAddress && (
                <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "4px", whiteSpace: "pre-line" }}>
                  {data.customerAddress}
                </p>
              )}
              {data.customerPhone && (
                <p style={{ color: "#6b7280", fontSize: "13px" }}>
                  {data.customerPhone}
                </p>
              )}
              {data.customerEmail && (
                <p style={{ color: "#6b7280", fontSize: "13px" }}>
                  {data.customerEmail}
                </p>
              )}
            </div>
          </div>

          {/* Items Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "32px" }}>
            <thead>
              <tr style={{ background: "#F0FDF4" }}>
                {["Description", "Qty", "Unit Price", "Amount"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: h === "Description" ? "left" : "right",
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#065F46",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderBottom: "2px solid #dcfce7",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => (
                <tr
                  key={item.id}
                  style={{ background: i % 2 === 0 ? "white" : "#fafafa" }}
                >
                  <td
                    style={{
                      padding: "14px 16px",
                      color: "#374151",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {item.description || "—"}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      textAlign: "right",
                      color: "#374151",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      textAlign: "right",
                      color: "#374151",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {formatLKR(item.unitPrice)}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      textAlign: "right",
                      fontWeight: "600",
                      color: "#111827",
                      borderBottom: "1px solid #f3f4f6",
                    }}
                  >
                    {formatLKR(item.quantity * item.unitPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
            <div style={{ minWidth: "280px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", color: "#6b7280", fontSize: "14px" }}>
                <span>Subtotal</span>
                <span>{formatLKR(subtotal)}</span>
              </div>
              {data.taxRate > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", color: "#6b7280", fontSize: "14px" }}>
                  <span>Tax ({data.taxRate}%)</span>
                  <span>{formatLKR(taxAmount)}</span>
                </div>
              )}
              {data.discount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", color: "#16a34a", fontSize: "14px" }}>
                  <span>Discount</span>
                  <span>− {formatLKR(data.discount)}</span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "16px",
                  marginTop: "8px",
                  background: "#065F46",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                <span>Total</span>
                <span style={{ color: "#4ade80" }}>{formatLKR(total)}</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {data.notes && (
            <div
              style={{
                background: "#F0FDF4",
                border: "1px solid #dcfce7",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "32px",
              }}
            >
              <p style={{ color: "#065F46", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                Notes & Terms
              </p>
              <p style={{ color: "#374151", fontSize: "13px", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
                {data.notes}
              </p>
            </div>
          )}

          {/* Eco footer */}
          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              paddingTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>🌿</span>
              <span style={{ color: "#9ca3af", fontSize: "11px" }}>
                Generated with EcoBill — helping Sri Lanka go paperless
              </span>
            </div>
            <span style={{ color: "#d1fae5", fontSize: "11px" }}>
              ecobill.lk
            </span>
          </div>
        </div>
      </div>
    );
  }
);

InvoicePreview.displayName = "InvoicePreview";
