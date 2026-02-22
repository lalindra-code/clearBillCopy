import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Leaf,
  MessageCircle,
  FileText,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing — EcoBill",
  description:
    "Simple, transparent pricing for EcoBill. Start free, upgrade to Pro for LKR 4,990/month. 7-day free trial, no credit card required.",
  openGraph: {
    title: "Pricing — EcoBill",
    description:
      "Free forever plan or EcoBill Pro for LKR 4,990/month. 7-day free trial.",
  },
};

const pricingFaqs = [
  {
    question: "What happens after my 7-day trial?",
    answer:
      "After your 7-day free trial, you'll be charged LKR 4,990 for the first month. You can cancel anytime before the trial ends — no charge. We'll send you a reminder 2 days before the trial ends.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel your subscription at any time from your account settings. Your Pro features will remain active until the end of the billing period.",
  },
  {
    question: "How does the yearly plan work?",
    answer:
      "The yearly plan is billed at LKR 42,900 once per year — saving you LKR 16,980 compared to monthly billing. That's over 3 months free!",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, and local Sri Lankan payment methods via PayHere — including sampath Vishwa, FriMi, DFCC PayPlus, and more.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. Monthly subscribers can request a refund within 7 days of their charge if they haven't used the service. Annual subscribers can get a pro-rated refund within the first 30 days. See our Refund Policy for details.",
  },
];

const comparisonFeatures = [
  { feature: "PDF Invoice Download", free: true, pro: true },
  { feature: "Invoice Preview", free: true, pro: true },
  { feature: "Invoices per month", free: "3", pro: "Unlimited" },
  { feature: "EcoBill branding on invoice", free: true, pro: false },
  { feature: "Custom business logo", free: false, pro: true },
  { feature: "WhatsApp invoice sending", free: false, pro: true },
  { feature: "Sinhala & Tamil invoices", free: false, pro: true },
  { feature: "Multiple invoice templates", free: false, pro: true },
  { feature: "Invoice history & management", free: false, pro: "Coming soon" },
  { feature: "Priority support", free: false, pro: true },
];

const proHighlights = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Unlimited Invoices",
    desc: "Create as many as you need — no caps, no surprises.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp Sending",
    desc: "Send PDFs directly to any WhatsApp number in one click.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Trilingual Invoices",
    desc: "English, Sinhala, Tamil. Serve every customer in their language.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Optimized",
    desc: "Full Pro experience on any smartphone, anywhere.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-16" aria-labelledby="pricing-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-4 block">
              Simple pricing
            </span>
            <h1
              id="pricing-hero"
              className="text-5xl font-black text-gray-900 mb-4 tracking-tight"
            >
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-500 max-w-xl mx-auto">
              Start free with no limits on time. Upgrade to Pro when you&apos;re
              ready to grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <section className="bg-[#F0FDF4] py-16" aria-label="Pricing plans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing toggle note */}
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white border border-green-200 rounded-2xl px-6 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Monthly</span>
              </div>
              <div className="w-px h-5 bg-gray-200" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Yearly</span>
                <span className="bg-[#22C278] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                  Save 28%
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl border border-gray-200 p-10 h-full shadow-sm">
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Free Forever
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black text-gray-900">
                      LKR 0
                    </span>
                    <span className="text-gray-400 text-base">/month</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    No credit card. No time limit.
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "3 invoices per month",
                    "PDF download",
                    "Real-time preview",
                    "Basic invoice template",
                    "No account required",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-[#22C278] flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                    EcoBill branding on invoice
                  </li>
                </ul>

                <Link
                  href="/create"
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#22C278] text-gray-700 hover:text-[#22C278] font-bold py-4 rounded-2xl transition-all duration-200"
                >
                  Start Creating — Free
                </Link>
              </div>
            </ScrollReveal>

            {/* Pro Plan */}
            <ScrollReveal direction="right">
              <div className="relative bg-[#065F46] rounded-3xl p-10 h-full overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-64 h-64 bg-[#22C278] opacity-15 rounded-full blur-3xl"
                  aria-hidden="true"
                />
                <div className="absolute top-8 right-8 bg-[#22C278] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Most Popular
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-bold text-green-300 uppercase tracking-widest mb-3">
                    EcoBill Pro
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black text-white">
                      LKR 4,990
                    </span>
                    <span className="text-green-300 text-base">/month</span>
                  </div>
                  <p className="text-green-400 text-sm mb-8">
                    Or{" "}
                    <span className="font-bold text-green-200">
                      LKR 42,900/year
                    </span>{" "}
                    — save LKR 16,980
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      "Unlimited PDF invoices",
                      "No EcoBill branding",
                      "WhatsApp invoice sending",
                      "Sinhala & Tamil support",
                      "All invoice templates",
                      "Custom business logo",
                      "Invoice history (coming soon)",
                      "Priority WhatsApp support",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-green-100"
                      >
                        <div className="w-5 h-5 bg-[#22C278] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/create"
                    className="btn-shine w-full flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold py-4 rounded-2xl transition-all duration-200"
                  >
                    Start 7-Day Free Trial
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <p className="text-center text-green-400 text-xs mt-3">
                    No credit card required during trial
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Pro Highlights ───────────────────────────────────────────────── */}
      <section className="bg-white py-20" aria-label="Pro features">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Why upgrade to Pro?
            </h2>
            <p className="text-gray-500 text-lg">
              The tools serious Sri Lankan businesses need.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {proHighlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 80}>
                <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-green-50 text-[#22C278] rounded-xl flex items-center justify-center flex-shrink-0">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{h.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ──────────────────────────────────────── */}
      <section className="bg-[#F0FDF4] py-20" aria-label="Feature comparison">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Compare plans
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-gray-100">
                <div className="p-5 col-span-1" />
                <div className="p-5 text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Free
                  </p>
                  <p className="text-xl font-black text-gray-900 mt-1">
                    LKR 0
                  </p>
                </div>
                <div className="p-5 text-center bg-green-50">
                  <p className="text-xs font-bold text-[#22C278] uppercase tracking-wider">
                    Pro
                  </p>
                  <p className="text-xl font-black text-gray-900 mt-1">
                    LKR 4,990
                  </p>
                </div>
              </div>

              {/* Rows */}
              {comparisonFeatures.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 border-b border-gray-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                  }`}
                >
                  <div className="p-4 pl-5 text-sm text-gray-700 font-medium flex items-center">
                    {row.feature}
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <Check className="w-5 h-5 text-[#22C278]" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-sm font-semibold text-gray-700">
                        {row.free}
                      </span>
                    )}
                  </div>
                  <div className="p-4 bg-green-50/50 flex items-center justify-center">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check className="w-5 h-5 text-[#22C278]" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-sm font-semibold text-[#065F46]">
                        {row.pro}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Billing FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20" aria-labelledby="billing-faq">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2
              id="billing-faq"
              className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight"
            >
              Billing Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={pricingFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#065F46] py-20 relative overflow-hidden">
        <div
          className="blob absolute -top-20 right-10 w-64 h-64 bg-[#22C278]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Leaf
              className="w-12 h-12 text-[#22C278] mx-auto mb-6"
              aria-hidden="true"
            />
            <h2 className="text-4xl font-black text-white mb-4">
              Ready to start?
            </h2>
            <p className="text-green-200 text-lg mb-8 max-w-md mx-auto">
              7 days free. No credit card. Cancel anytime. Join Sri
              Lanka&apos;s paperless invoicing movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create"
                className="btn-shine inline-flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                Start 7-Day Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white text-white font-semibold px-8 py-4 rounded-2xl transition-all"
              >
                Talk to Us First
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
