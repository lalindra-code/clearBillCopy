import Link from "next/link";
import { Leaf, Facebook, Instagram, MessageCircle } from "lucide-react";

const productLinks = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create Invoice" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-400" role="contentinfo">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="EcoBill home"
            >
              <div className="w-8 h-8 bg-[#22C278] rounded-[10px] flex items-center justify-center">
                <Leaf className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Eco<span className="text-[#22C278]">Bill</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Professional invoices in seconds. Built for Sri Lanka&apos;s
              smallest businesses. Every invoice saves a tree.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://facebook.com/ecobill.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C278] flex items-center justify-center transition-colors duration-200"
                aria-label="EcoBill on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ecobill.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C278] flex items-center justify-center transition-colors duration-200"
                aria-label="EcoBill on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C278] flex items-center justify-center transition-colors duration-200"
                aria-label="EcoBill on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Product Links ── */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-3" role="list">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#22C278] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal Links ── */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#22C278] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">
              Get in Touch
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="mailto:hello@ecobill.lk"
                  className="text-sm text-gray-500 hover:text-[#22C278] transition-colors duration-200"
                >
                  hello@ecobill.lk
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-[#22C278] transition-colors duration-200 flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#22C278]" />
                  WhatsApp Support
                </a>
              </li>
              <li className="text-xs text-gray-600 pt-1">
                We respond within 24 hours
              </li>
            </ul>

            {/* Trial CTA */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/8">
              <p className="text-xs text-gray-400 mb-3">
                Try EcoBill free for 7 days
              </p>
              <Link
                href="/create"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22C278] hover:underline"
              >
                Start creating invoices →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-12 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 order-2 sm:order-1">
            © 2026 EcoBill. All rights reserved.
          </p>

          <p className="text-xs text-gray-600 order-1 sm:order-2 flex items-center gap-1">
            Made with{" "}
            <span className="text-rose-400" aria-hidden>
              ♥
            </span>{" "}
            in Sri Lanka{" "}
            <span role="img" aria-label="Sri Lanka flag">
              🇱🇰
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
