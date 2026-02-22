import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Clock, Leaf, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us — EcoBill",
  description:
    "Get in touch with the EcoBill team. We respond within 24 hours via email or WhatsApp.",
  openGraph: {
    title: "Contact EcoBill",
    description: "Reach us via email or WhatsApp. We respond within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-white pt-32 pb-16 text-center"
        aria-labelledby="contact-hero"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-4 block">
              We&apos;re here to help
            </span>
            <h1
              id="contact-hero"
              className="text-5xl font-black text-gray-900 mb-4 tracking-tight"
            >
              Get in Touch
            </h1>
            <p className="text-xl text-gray-500">
              Questions, feedback, or just want to say hello? We respond within
              24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact Options + Form ────────────────────────────────────────── */}
      <section className="bg-[#F0FDF4] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr,1.4fr] gap-10">
            {/* Left: Contact options */}
            <div className="space-y-5">
              <ScrollReveal>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Ways to reach us
                </h2>
              </ScrollReveal>

              {[
                {
                  icon: <MessageCircle className="w-6 h-6 text-[#22C278]" />,
                  title: "WhatsApp Chat",
                  desc: "Fastest way to reach us. Chat with the team directly.",
                  link: "https://wa.me/94771234567",
                  linkLabel: "Chat on WhatsApp",
                  bg: "bg-green-50 border-green-100",
                },
                {
                  icon: <Mail className="w-6 h-6 text-[#22C278]" />,
                  title: "Email",
                  desc: "hello@ecobill.lk — we respond within 24 hours.",
                  link: "mailto:hello@ecobill.lk",
                  linkLabel: "Send an email",
                  bg: "bg-white border-gray-100",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#22C278]" />,
                  title: "Support Hours",
                  desc: "Monday to Saturday, 9am – 6pm Sri Lanka time (SLST).",
                  link: null,
                  linkLabel: null,
                  bg: "bg-white border-gray-100",
                },
              ].map((option, i) => (
                <ScrollReveal key={option.title} delay={i * 100}>
                  <div
                    className={`rounded-2xl border ${option.bg} p-6 flex items-start gap-4`}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{option.desc}</p>
                      {option.link && (
                        <a
                          href={option.link}
                          target={option.link.startsWith("http") ? "_blank" : undefined}
                          rel={
                            option.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22C278] hover:underline"
                        >
                          {option.linkLabel}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Eco note */}
              <ScrollReveal delay={300}>
                <div className="rounded-2xl bg-[#065F46] p-5 flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[#22C278] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-green-100 leading-relaxed">
                      We&apos;re a small team building something we genuinely
                      believe in. Your feedback shapes EcoBill.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact form */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ link ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Looking for quick answers?
            </h2>
            <p className="text-gray-500 mb-6">
              Check our FAQ — most common questions are answered there.
            </p>
            <Link
              href="/#faq-heading"
              className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#22C278] text-gray-700 hover:text-[#22C278] font-semibold px-6 py-3 rounded-xl transition-all"
            >
              View FAQ
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

// ── Contact Form (client component) ──────────────────────────────────────────
// Using a simple form that submits to a mailto or API
// For now, renders as a styled form — can be wired to any backend

function ContactForm() {
  return (
    <form
      action="mailto:hello@ecobill.lk"
      method="get"
      encType="text/plain"
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
        >
          Your Name <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="e.g. Sumalee Perera"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#22C278] focus:ring-2 focus:ring-[#22C278]/10 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#22C278] focus:ring-2 focus:ring-[#22C278]/10 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#22C278] focus:ring-2 focus:ring-[#22C278]/10 transition-all text-gray-700 bg-white"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Billing Question">Billing Question</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="body"
          required
          rows={5}
          placeholder="Tell us how we can help…"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#22C278] focus:ring-2 focus:ring-[#22C278]/10 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-shine w-full flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold py-4 rounded-xl transition-all text-sm"
      >
        <Mail className="w-4 h-4" aria-hidden="true" />
        Send Message
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respond within 24 hours on business days.
      </p>
    </form>
  );
}
