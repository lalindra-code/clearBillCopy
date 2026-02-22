import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Home, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | EcoBill",
  description: "This page got recycled! Head back home.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="blob absolute -top-20 -left-20 w-80 h-80 bg-[#22C278] opacity-[0.15]"
        aria-hidden="true"
      />
      <div
        className="blob blob-2 absolute bottom-10 right-10 w-64 h-64 bg-[#065F46] opacity-[0.10]"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Animated Leaf */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-3xl border border-green-100 shadow-xl flex items-center justify-center animate-float">
            <Leaf className="w-12 h-12 text-[#22C278]" />
          </div>
        </div>

        {/* 404 number */}
        <p className="text-[8rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#22C278] to-[#065F46] mb-0">
          404
        </p>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          This page got recycled! ♻️
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Looks like this page went paperless before you did.
          <br />
          Don&apos;t worry — our invoices are still very much alive.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-shine inline-flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold px-7 py-4 rounded-2xl shadow-lg transition-all"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/create"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#22C278] text-gray-700 hover:text-[#22C278] font-semibold px-7 py-4 rounded-2xl transition-all"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            Create an Invoice
          </Link>
        </div>

        {/* Back link */}
        <p className="mt-8 text-sm text-gray-400">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[#22C278] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Go back to EcoBill
          </Link>
        </p>
      </div>
    </div>
  );
}
