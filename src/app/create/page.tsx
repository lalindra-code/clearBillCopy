import type { Metadata } from "next";
import { InvoiceCreator } from "@/components/InvoiceCreator";

export const metadata: Metadata = {
  title: "Create Invoice — EcoBill",
  description:
    "Create a professional PDF invoice in seconds. No signup needed. Fill in your details, preview in real time, and download instantly.",
  openGraph: {
    title: "Create Invoice — EcoBill",
    description: "Create a professional invoice in seconds. Free, no account needed.",
  },
};

export default function CreateInvoicePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <InvoiceCreator />
    </div>
  );
}
