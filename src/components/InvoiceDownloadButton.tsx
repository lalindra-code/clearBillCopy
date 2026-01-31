"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader } from "lucide-react";
import { exportInvoicePDF } from "@/utils/exportPDF";

interface InvoiceDownloadButtonProps {
  invoiceNumber: string;
}

export function InvoiceDownloadButton({
  invoiceNumber,
}: InvoiceDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const element = document.getElementById("invoice-preview");
      if (!element) {
        throw new Error("Invoice preview not found");
      }

      await exportInvoicePDF(invoiceNumber, element);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to download PDF";
      setError(errorMessage);
      console.error("Download error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleDownload}
        disabled={isLoading}
        variant="default"
      >
        {isLoading ? (
          <>
            <Loader className="h-4 w-4 mr-2 animate-spin" />
            Generating PDF...
          </>
        ) : (
          <>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </>
        )}
      </Button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
