import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  Target,
  Heart,
  Zap,
  Globe,
  ArrowRight,
  Users,
  TreePine,
  Lightbulb,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About EcoBill — Our Story & Mission",
  description:
    "Learn how EcoBill was built to help Sri Lanka's smallest businesses go paperless. Our story, mission, and the team behind it.",
  openGraph: {
    title: "About EcoBill — Our Story & Mission",
    description:
      "Built to make Sri Lanka paperless — one invoice at a time.",
  },
};

const roadmap = [
  {
    status: "live",
    title: "Invoice Generator",
    desc: "Create and download professional PDF invoices. The foundation — and it's free.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    status: "soon",
    title: "WhatsApp Sending",
    desc: "Send invoices directly to customers' WhatsApp. No email, no friction.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    status: "planned",
    title: "Expense Tracker",
    desc: "Track business income and expenses. Know where your money goes.",
    icon: <Target className="w-5 h-5" />,
  },
  {
    status: "planned",
    title: "Receipt Scanner",
    desc: "Snap a photo of any receipt and have it logged automatically.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    status: "planned",
    title: "Full Business Suite",
    desc: "A complete business management platform for every Sri Lankan SME.",
    icon: <Users className="w-5 h-5" />,
  },
];

const statusColors = {
  live: "bg-[#22C278] text-white",
  soon: "bg-amber-100 text-amber-700",
  planned: "bg-gray-100 text-gray-500",
};

const statusLabels = {
  live: "Live Now",
  soon: "Coming Soon",
  planned: "Planned",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-[#065F46] pt-32 pb-24 relative overflow-hidden"
        aria-labelledby="about-hero"
      >
        <div
          className="blob absolute -top-20 right-10 w-96 h-96 bg-[#22C278]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Leaf
              className="w-12 h-12 text-[#22C278] mx-auto mb-6 animate-leaf-sway"
              aria-hidden="true"
            />
            <h1
              id="about-hero"
              className="text-5xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              We&apos;re on a Mission to Make{" "}
              <span className="text-[#22C278]">Sri Lanka Paperless</span>
            </h1>
            <p className="text-xl text-green-200 max-w-2xl mx-auto leading-relaxed">
              One invoice at a time. One small business at a time. One tree
              saved at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-label="Our story">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-4 block">
                Our story
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                We Saw Small Businesses Drowning in Paper
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  It started with a tailor in Kandy. She kept dozens of
                  handwritten bills in a shoebox under her sewing machine. When
                  a customer disputed a payment, she&apos;d spend an hour
                  searching through that box — losing time, losing money, and
                  losing confidence.
                </p>
                <p>
                  We saw the same story repeated across Sri Lanka. Tuition
                  teachers, salon owners, food vendors, small shop keepers — all
                  running real businesses on pieces of paper that could be lost,
                  damaged, or disputed.
                </p>
                <p>
                  EcoBill was built to solve this. Simple enough for anyone to
                  use. Professional enough to impress any customer. Free enough
                  for every business to start today.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-[#F0FDF4] rounded-3xl p-8 border border-green-100">
                <div className="space-y-6">
                  {[
                    {
                      icon: "🌿",
                      title: "The Eco Angle",
                      text: "Our co-founder works closely with Sri Lankan environmental NGOs. EcoBill isn't just a tool — it's a statement that business and sustainability can go hand in hand.",
                    },
                    {
                      icon: "🇱🇰",
                      title: "Built for Sri Lanka",
                      text: "LKR currency, Sinhala & Tamil support, WhatsApp-first distribution. We built for how Sri Lankan businesses actually work.",
                    },
                    {
                      icon: "💚",
                      title: "Purpose Over Profit",
                      text: "We believe free tools can create real change. The free tier isn't a teaser — it's a genuine gift to small business owners who need a leg up.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="text-2xl" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section
        className="bg-[#0F172A] py-24 relative overflow-hidden"
        aria-label="Our mission"
      >
        <div
          className="blob absolute top-0 left-1/4 w-80 h-80 bg-[#22C278] opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-4 block">
              Our mission
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
              &ldquo;Powered by Purpose, Not Just Profit.&rdquo;
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
              EcoBill exists to give every Sri Lankan micro-entrepreneur —
              regardless of their technical skill or financial resources — the
              tools to run a professional, paperless business.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: <Users className="w-6 h-6 text-[#22C278]" />,
                  stat: "1M+",
                  label: "SMEs in Sri Lanka",
                  sub: "that deserve better tools",
                },
                {
                  icon: <TreePine className="w-6 h-6 text-[#22C278]" />,
                  stat: "4,293",
                  label: "Trees saved",
                  sub: "one invoice at a time",
                },
                {
                  icon: <Heart className="w-6 h-6 text-[#22C278]" />,
                  stat: "100%",
                  label: "Sri Lankan-built",
                  sub: "made with pride, here",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6"
                >
                  <div className="mb-3">{s.icon}</div>
                  <p className="text-3xl font-black text-white mb-1">
                    {s.stat}
                  </p>
                  <p className="text-sm font-semibold text-green-200">
                    {s.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-label="Our team">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              The team
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Two Builders. One Mission.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                emoji: "👨‍💻",
                name: "Lalindra",
                role: "Founder & Builder",
                bio: "Full-stack developer who wanted to build something that matters. EcoBill is his way of using code to uplift Sri Lanka's smallest businesses.",
              },
              {
                emoji: "🌿",
                name: "Co-founder",
                role: "Brand & Partnerships",
                bio: "Works with environmental NGOs across Sri Lanka. Brought the eco angle, the brand soul, and the connections that make EcoBill more than just software.",
              },
            ].map((member) => (
              <ScrollReveal key={member.name}>
                <div className="bg-[#F0FDF4] rounded-3xl border border-green-100 p-8 text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl border border-green-100 flex items-center justify-center text-4xl mx-auto mb-5">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#22C278] mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F0FDF4] py-24" aria-label="Product roadmap">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278] mb-3 block">
              Where we&apos;re going
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Vision Roadmap
            </h2>
            <p className="text-gray-500 text-lg">
              From invoice generator to full business suite. Step by step.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-5 shadow-sm">
                  <div className="w-12 h-12 bg-green-50 text-[#22C278] rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          statusColors[item.status as keyof typeof statusColors]
                        }`}
                      >
                        {statusLabels[item.status as keyof typeof statusLabels]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#065F46] py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
              Join the Paperless Movement
            </h2>
            <p className="text-green-200 text-lg mb-8">
              Create your first invoice today — free, no account needed.
            </p>
            <Link
              href="/create"
              className="btn-shine inline-flex items-center gap-2 bg-[#22C278] hover:bg-[#1db86d] text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all"
            >
              Create Invoice — Free
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
