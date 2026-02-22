import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Eye,
  Download,
  Zap,
  MessageCircle,
  Globe,
  UserX,
  Smartphone,
  Leaf,
  Check,
  ArrowRight,
  ChevronRight,
  Scissors,
  BookOpen,
  Sparkles,
  ShoppingBag,
  Coffee,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "EcoBill — Create Professional Invoices Free | Sri Lanka",
  description:
    "Create professional invoices in seconds. No signup needed. Go paperless — every invoice saves a tree. Built for Sri Lanka's smallest businesses.",
  openGraph: {
    title: "EcoBill — Create Professional Invoices Free | Sri Lanka",
    description:
      "Create professional invoices in seconds. No signup needed. Free to start.",
  },
};

const faqItems = [
  {
    question: "Is EcoBill really free to try?",
    answer:
      "Yes! You can create and download invoices completely free — no credit card, no account required. Simply visit the Create Invoice page and start right away. Our paid Pro plan (LKR 4,990/month) unlocks unlimited invoices, WhatsApp sending, and more.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can create and download a professional PDF invoice instantly without any registration. An account is only needed if you want Pro features like WhatsApp invoice sending, invoice history, and custom branding.",
  },
  {
    question: "Can I send invoices in Sinhala or Tamil?",
    answer:
      "Yes! EcoBill supports trilingual invoices in English, Sinhala (සිංහල), and Tamil (தமிழ்). You can toggle the language when creating your invoice. This is especially useful for local customers who prefer their mother tongue.",
  },
  {
    question: "How does WhatsApp invoice sending work?",
    answer:
      "With EcoBill Pro, you can send a professional PDF invoice directly to your customer's WhatsApp number. Your customer receives the invoice as a file attachment — no email needed. It's perfect for Sri Lankan businesses where WhatsApp is the primary communication tool.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. EcoBill generates your invoice entirely in your browser (client-side). We do not store or transmit your invoice data or customer information to our servers. The PDF is created on your device and stays with you.",
  },
  {
    question: "Can I use EcoBill on my phone?",
    answer:
      "Yes! EcoBill is fully responsive and designed mobile-first. You can create, preview, and download professional invoices right from your smartphone — no app download needed.",
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant PDF Download",
    desc: "Professional invoices generated in seconds. Download ready-to-send PDFs instantly.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp Sending",
    desc: "Send invoices directly to your customers' WhatsApp. No email required.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Trilingual Support",
    desc: "Create invoices in English, Sinhala, or Tamil — serve every customer.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <UserX className="w-5 h-5" />,
    title: "No Account Needed",
    desc: "Zero signup, zero login. Start creating invoices in under 30 seconds.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Friendly",
    desc: "Works beautifully on any phone. Your office is in your pocket.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Eco-Friendly",
    desc: "Every digital invoice saves paper. Join Sri Lanka's paperless movement.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const businesses = [
  { icon: <Scissors className="w-6 h-6" />, name: "Tailors & Dressmakers" },
  { icon: <BookOpen className="w-6 h-6" />, name: "Tuition Teachers" },
  { icon: <Sparkles className="w-6 h-6" />, name: "Home Salons & Spas" },
  { icon: <ShoppingBag className="w-6 h-6" />, name: "Small Shops" },
  { icon: <Coffee className="w-6 h-6" />, name: "Food Vendors" },
  { icon: <Star className="w-6 h-6" />, name: "Freelancers" },
];

const planFeatures = [
  "Unlimited PDF invoices",
  "No EcoBill branding",
  "WhatsApp sending",
  "Sinhala & Tamil support",
  "All invoice templates",
  "Invoice history (coming soon)",
  "Priority WhatsApp support",
  "Custom business logo",
];

export default function HomePage() {
  return (
    <>
      {/* ================================================================
          JSON-LD Structured Data
          ================================================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://ecobill.lk/#org",
                name: "EcoBill",
                url: "https://ecobill.lk",
                logo: "https://ecobill.lk/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  availableLanguage: ["English", "Sinhala", "Tamil"],
                },
                sameAs: [
                  "https://facebook.com/ecobill.lk",
                  "https://instagram.com/ecobill.lk",
                ],
              },
              {
                "@type": "SoftwareApplication",
                name: "EcoBill",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "LKR",
                  description: "Free invoice creation — no account needed",
                },
                description:
                  "Professional invoice generator for Sri Lankan small businesses.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section
        className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-16"
        aria-label="EcoBill hero"
      >
        {/* Decorative blobs */}
        <div
          className="blob absolute -top-20 -left-20 w-96 h-96 bg-[#22C278]"
          aria-hidden="true"
        />
        <div
          className="blob blob-2 absolute top-40 right-10 w-64 h-64 bg-[#065F46]"
          aria-hidden="true"
        />
        <div
          className="blob blob-3 absolute bottom-10 left-1/3 w-80 h-48 bg-[#22C278]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              {/* Eco badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-[#065F46] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 animate-[fade-up_0.5s_ease_both]">
                <Leaf className="w-3.5 h-3.5 text-[#22C278]" />
                <span>Go Paperless. Save Trees. &nbsp;🌱</span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-6 text-balance animate-[fade-up_0.6s_0.08s_ease_both]">
                Create Professional{" "}
                <span className="gradient-text">Invoices</span>
                {" "}in Seconds
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg animate-[fade-up_0.6s_0.18s_ease_both]">
                Go paperless. Every invoice you send digitally saves paper.
                Built for Sri Lanka&apos;s smallest businesses — tailors,
                teachers, salon owners, and shop keepers.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10 animate-[fade-up_0.6s_0.28s_ease_both]">
                <Link
                  href="/create"
                  className="btn-shine inline-flex items-center gap-2.5 bg-[#22C278] hover:bg-[#1db86d] active:scale-95 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-green-100 transition-all duration-200 text-base"
                >
                  <FileText className="w-5 h-5" aria-hidden="true" />
                  Create Free Invoice
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#22C278] text-gray-700 hover:text-[#22C278] font-semibold px-7 py-4 rounded-xl transition-all duration-200 text-base"
                >
                  See How It Works
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Tree Counter */}
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 animate-[fade-up_0.6s_0.38s_ease_both]">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#22C278]" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 leading-none mb-1">
                    Invoices created &amp; trees saved
                  </p>
                  <p className="text-xl font-black text-gray-900 leading-none">
                    <CountUp to={4293} /> invoices · <CountUp to={4293} /> 🌳
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Floating Invoice Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="animate-float">
                <InvoiceMockup />
              </div>

              {/* Floating badge 1 */}
              <div
                className="absolute -bottom-4 left-4 lg:-left-8 bg-white rounded-2xl border border-gray-100 shadow-lg px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: "1.2s" }}
                aria-hidden="true"
              >
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                  <UserX className="w-4 h-4 text-[#22C278]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">
                    No signup needed
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Just create &amp; download
                  </p>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div
                className="absolute top-6 -right-2 lg:-right-6 bg-[#22C278] text-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 animate-float-slow"
                aria-hidden="true"
              >
                <Download className="w-4 h-4" />
                <div>
                  <p className="text-xs font-bold">PDF Ready</p>
                  <p className="text-[10px] text-green-100">in 30 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="section-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 40 1080 38C1200 36 1320 26 1380 21L1440 16V60H0Z"
              fill="#F0FDF4"
            />
          </svg>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
          ================================================================ */}
      <section
        id="how-it-works"
        className="bg-[#F0FDF4] py-24"
        aria-labelledby="how-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              Simple as 1-2-3
            </span>
            <h2
              id="how-heading"
              className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              How It Works
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              From idea to invoice in under 2 minutes. No learning curve.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-[#22C278]/25 to-transparent"
              aria-hidden="true"
            />

            {[
              {
                step: "01",
                icon: <FileText className="w-7 h-7 text-[#22C278]" />,
                title: "Fill in your details",
                desc: "Enter your business name, customer info, and add invoice line items. Takes less than a minute.",
              },
              {
                step: "02",
                icon: <Eye className="w-7 h-7 text-[#22C278]" />,
                title: "Preview your invoice",
                desc: "See a real-time professional preview of your invoice as you type. What you see is what you get.",
              },
              {
                step: "03",
                icon: <Download className="w-7 h-7 text-[#22C278]" />,
                title: "Download or share",
                desc: "Download a crisp PDF instantly, or send directly via WhatsApp to your customer. Done.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 130} direction="up">
                <div className="relative bg-white rounded-3xl p-8 border border-green-100 shadow-sm text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-[#22C278] text-[#22C278] text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5 mt-3">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="text-center mt-14">
            <Link
              href="/create"
              className="btn-shine inline-flex items-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold px-8 py-4 rounded-xl shadow-md shadow-green-100 transition-all duration-200"
            >
              <FileText className="w-5 h-5" aria-hidden="true" />
              Create My First Invoice — Free
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FEATURES GRID
          ================================================================ */}
      <section className="bg-white py-24" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              Everything you need
            </span>
            <h2
              id="features-heading"
              className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Built for Real Business
            </h2>
            <p className="text-lg text-gray-500 max-w-lg mx-auto">
              Every feature designed for how Sri Lankan small businesses
              actually work.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80} direction="up">
                <div className="card-hover group bg-white border border-gray-100 rounded-3xl p-7 h-full shadow-sm">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[1.0625rem] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOR SRI LANKAN BUSINESSES (Dark Section)
          ================================================================ */}
      <section
        className="bg-[#0F172A] py-24 relative overflow-hidden"
        aria-labelledby="sri-lanka-heading"
      >
        <div
          className="blob absolute -top-20 right-0 w-96 h-96 bg-[#22C278] opacity-[0.08]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-4 block">
                Made for Sri Lanka 🇱🇰
              </span>
              <h2
                id="sri-lanka-heading"
                className="text-4xl font-extrabold text-white mb-6 leading-tight text-balance"
              >
                Built for the Tailor in Kandy.{" "}
                <span className="text-[#22C278]">
                  The Teacher in Colombo.
                </span>{" "}
                The Shop in Your Neighborhood.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Sri Lanka&apos;s smallest businesses run on trust and hard work.
                But chasing payments on scraps of paper? That&apos;s holding you
                back. EcoBill gives every small business owner the same
                professional edge as a big company — for free.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {businesses.map((biz, i) => (
              <ScrollReveal key={biz.name} delay={i * 80} direction="scale">
                <div className="bg-white/5 hover:bg-[#22C278]/10 border border-white/8 hover:border-[#22C278]/30 rounded-2xl p-5 text-center transition-all duration-300">
                  <div className="w-12 h-12 bg-[#22C278]/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-[#22C278]">
                    {biz.icon}
                  </div>
                  <p className="text-gray-300 text-xs font-medium leading-snug">
                    {biz.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500} className="mt-16 text-center">
            <blockquote className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 italic leading-relaxed mb-4">
                &ldquo;EcoBill turned my handwritten bills into professional
                invoices. My customers now pay faster because it looks
                serious.&rdquo;
              </p>
              <cite className="text-sm text-[#22C278] font-semibold not-italic">
                — Nalini S., Home Salon Owner, Matara
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          PRICING PREVIEW
          ================================================================ */}
      <section
        className="bg-[#F0FDF4] py-24"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              Simple pricing
            </span>
            <h2
              id="pricing-heading"
              className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Start Free. Grow with Pro.
            </h2>
            <p className="text-lg text-gray-500 max-w-lg mx-auto">
              No hidden fees. No confusing tiers. One plan that unlocks
              everything.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl border border-gray-200 p-8 h-full shadow-sm">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Free Forever
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-gray-900">
                    LKR 0
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "3 invoices per month",
                    "PDF download",
                    "EcoBill branding on invoice",
                    "Basic invoice template",
                    "No account needed",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-[#22C278] flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/create"
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#22C278] text-gray-700 hover:text-[#22C278] font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
                >
                  Start for Free
                </Link>
              </div>
            </ScrollReveal>

            {/* Pro Tier */}
            <ScrollReveal direction="right">
              <div className="relative bg-[#065F46] rounded-3xl p-8 h-full overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 bg-[#22C278] opacity-20 rounded-full blur-3xl"
                  aria-hidden="true"
                />
                <div className="absolute top-6 right-6 bg-[#22C278] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>

                <div className="relative z-10">
                  <p className="text-sm font-semibold text-green-300 uppercase tracking-wider mb-3">
                    EcoBill Pro
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-white">
                      LKR 4,990
                    </span>
                    <span className="text-green-300 text-sm">/month</span>
                  </div>
                  <p className="text-green-400 text-sm mb-6">
                    Or LKR 42,900/year — save LKR 16,980
                  </p>

                  <ul className="space-y-3 mb-8">
                    {planFeatures.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm text-green-100"
                      >
                        <div className="w-5 h-5 bg-[#22C278] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className="btn-shine w-full flex items-center justify-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
                  >
                    Start 7-Day Free Trial
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <p className="text-center text-green-400 text-xs mt-3">
                    No credit card required
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="text-center mt-8">
            <Link
              href="/pricing"
              className="text-sm text-[#22C278] font-semibold hover:underline inline-flex items-center gap-1"
            >
              See full pricing details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          ECO IMPACT SECTION
          ================================================================ */}
      <section
        className="relative bg-[#065F46] py-24 overflow-hidden"
        aria-labelledby="eco-heading"
      >
        <div
          className="blob absolute -top-10 left-10 w-64 h-64 bg-[#22C278]"
          aria-hidden="true"
        />
        <div
          className="blob blob-2 absolute bottom-10 right-10 w-80 h-80 bg-[#22C278]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Leaf
              className="w-12 h-12 text-[#22C278] mx-auto mb-6 animate-leaf-sway"
              aria-hidden="true"
            />
            <h2
              id="eco-heading"
              className="text-4xl font-extrabold text-white mb-4 tracking-tight"
            >
              Together, We&apos;re Building a{" "}
              <span className="text-[#22C278]">Paperless Sri Lanka</span>
            </h2>
            <p className="text-lg text-green-200 max-w-2xl mx-auto mb-16">
              Every invoice you send digitally saves paper. Join thousands of
              Sri Lankan businesses making their mark on this earth — not on it.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                value: 4293,
                suffix: "",
                label: "Invoices created",
                sub: "and growing every day",
              },
              {
                value: 85860,
                suffix: " g",
                label: "Paper saved",
                sub: "approx. 20g per invoice",
              },
              {
                value: 4293,
                suffix: " 🌳",
                label: "Trees saved",
                sub: "symbolically, one per invoice",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 150} direction="scale">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8">
                  <p className="text-4xl font-black text-white mb-2">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-green-200 font-semibold text-base mb-1">
                    {stat.label}
                  </p>
                  <p className="text-green-400 text-xs">{stat.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ SECTION
          ================================================================ */}
      <section
        className="bg-white py-24"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              Got questions?
            </span>
            <h2
              id="faq-heading"
              className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500">
              Everything you need to know about EcoBill.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>

          <ScrollReveal delay={300} className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-[#22C278] font-semibold hover:underline"
              >
                Chat with us on WhatsApp →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA SECTION
          ================================================================ */}
      <section
        className="relative bg-[#0F172A] py-24 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#22C278]/12 via-transparent to-[#065F46]/18"
          aria-hidden="true"
        />
        <div
          className="blob absolute top-0 left-1/4 w-96 h-64 bg-[#22C278] opacity-[0.08]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 bg-[#22C278]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#22C278]/20">
              <Leaf className="w-8 h-8 text-[#22C278]" />
            </div>
            <h2
              id="cta-heading"
              className="text-5xl font-black text-white mb-4 tracking-tight"
            >
              Ready to Go{" "}
              <span className="text-[#22C278]">Paperless?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
              Join thousands of Sri Lankan businesses creating professional
              invoices the eco-friendly way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create"
                className="btn-shine inline-flex items-center justify-center gap-2.5 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-lg shadow-green-900/20 transition-all duration-200"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                Create Your First Invoice — Free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/12 hover:border-[#22C278] text-white hover:text-[#22C278] font-semibold px-8 py-5 rounded-2xl text-base transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-6">
              No account needed · No credit card · Download in 30 seconds
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   INVOICE MOCKUP COMPONENT
   ========================================================= */
function InvoiceMockup() {
  return (
    <div className="relative w-full max-w-[360px]">
      {/* Shadow card behind */}
      <div
        className="absolute inset-0 bg-[#22C278]/10 rounded-3xl rotate-3 scale-[0.96]"
        aria-hidden="true"
      />

      {/* Main invoice card */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#065F46] px-6 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Leaf className="w-4 h-4 text-[#22C278]" />
              <span className="text-white text-sm font-bold">EcoBill</span>
            </div>
            <p className="text-green-300 text-xs">Professional Invoice</p>
          </div>
          <div className="text-right">
            <p className="text-white text-lg font-black">#INV-001</p>
            <span className="bg-[#22C278] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              PAID
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {/* From/To */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold mb-1">
                From
              </p>
              <p className="text-gray-800 font-bold">Nalini&apos;s Salon</p>
              <p className="text-gray-400">Matara, Sri Lanka</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold mb-1">
                To
              </p>
              <p className="text-gray-800 font-bold">Sumalee Perera</p>
              <p className="text-gray-400">Colombo 07</p>
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Items */}
          <div className="space-y-2.5 text-xs">
            {[
              { item: "Hair Treatment & Styling", price: "LKR 3,500" },
              { item: "Manicure & Pedicure", price: "LKR 2,000" },
              { item: "Eyebrow Threading", price: "LKR 500" },
            ].map((row) => (
              <div key={row.item} className="flex justify-between items-center">
                <span className="text-gray-500">{row.item}</span>
                <span className="text-gray-800 font-semibold">{row.price}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-100" />

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-700">Total</span>
            <span className="text-xl font-black text-[#22C278]">LKR 6,000</span>
          </div>

          {/* Eco footer */}
          <div className="bg-green-50 rounded-xl p-3 flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5 text-[#22C278] flex-shrink-0" />
            <span className="text-[11px] text-[#065F46] font-medium">
              Go paperless with EcoBill 🌱
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
