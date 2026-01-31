import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import dbConnect from "@/lib/db";
import Invoice, { IInvoice } from "@/models/Invoice";
import { DashboardHeader } from "@/components/DashboardHeader";
import { InvoicePreview } from "@/components/InvoicePreview";
import { InvoiceDownloadButton } from "@/components/InvoiceDownloadButton";

async function getInvoice(id: string): Promise<IInvoice | null> {
  try {
    await dbConnect();
    const invoice = await Invoice.findById(id).lean();
    if (!invoice) {
      return null;
    }
    return JSON.parse(JSON.stringify(invoice));
  } catch (error) {
    console.error("Error fetching invoice:", error);
    return null;
  }
}

interface InvoiceDetailPageProps {
  params: {
    id: string;
  };
}

export default async function InvoiceDetailPage({
  params,
}: InvoiceDetailPageProps) {
  const { id } = params;
  const invoice = await getInvoice(id);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Invoices
          </Link>
          <InvoiceDownloadButton invoiceNumber={invoice.invoiceNumber} />
        </div>

        {/* Invoice Preview */}
        <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <InvoicePreview invoice={invoice} />
        </div>
      </main>
    </div>
  );
}
