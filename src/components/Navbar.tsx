"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Leaf } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create Invoice" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled || isMobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="EcoBill home"
          >
            <div className="w-8 h-8 bg-[#22C278] rounded-[10px] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
              <Leaf className="w-[18px] h-[18px] text-white" />
            </div>
            <span className="text-[1.25rem] font-bold tracking-tight text-gray-900">
              Eco<span className="text-[#22C278]">Bill</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[0.875rem] font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#22C278] bg-green-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/create"
              className="btn-shine flex items-center gap-2 bg-[#22C278] hover:bg-[#1db86d] active:bg-[#1aad68] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200"
            >
              <FileText className="w-4 h-4" aria-hidden />
              Create Invoice
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 -mr-1 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-green-50 text-[#22C278]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/create"
              className="mt-2 flex items-center justify-center gap-2 bg-[#22C278] text-white text-sm font-semibold px-5 py-3 rounded-xl"
            >
              <FileText className="w-4 h-4" aria-hidden />
              Create Invoice — Free
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
