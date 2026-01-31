import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportInvoicePDF(
  invoiceNumber: string,
  element: HTMLElement
): Promise<void> {
  try {
    // Create canvas from the invoice element
    const canvas = await html2canvas(element, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: "#ffffff",
      scale: 2,
    });

    // Get canvas dimensions
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? "portrait" : "portrait",
      unit: "mm",
      format: "a4",
    });

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Download the PDF
    pdf.save(`INV-${invoiceNumber}.pdf`);
  } catch (error) {
    console.error("Error exporting PDF:", error);
    throw new Error("Failed to export invoice as PDF");
  }
}
