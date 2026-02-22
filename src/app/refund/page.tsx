import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy — EcoBill",
  description:
    "EcoBill's refund policy. Learn about our 7-day trial, monthly and annual refund terms.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="space-y-3 text-gray-600 leading-relaxed text-[0.9375rem]">
        {children}
      </div>
    </section>
  );
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-[#F0FDF4] border-b border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-3">
            <RefreshCw className="w-6 h-6 text-[#22C278]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Refund Policy
          </h1>
          <p className="text-gray-500">
            Last updated: February 2026 &nbsp;·&nbsp; Effective: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10 text-sm text-[#065F46]">
          <strong>Our commitment:</strong> We want you to love EcoBill. If
          you&apos;re not satisfied, we&apos;ll do our best to make it right.
          Our refund policy is simple and fair.
        </div>

        <Section title="1. Free Trial">
          <p>
            EcoBill Pro includes a <strong>7-day free trial</strong>. During
            the trial period:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No payment is charged</li>
            <li>You have full access to all Pro features</li>
            <li>
              You can cancel at any time before the trial ends at no cost
            </li>
            <li>
              If you do not cancel before the trial ends, your subscription
              automatically begins and your payment method will be charged
            </li>
          </ul>
        </Section>

        <Section title="2. Monthly Subscriptions">
          <p>
            For monthly subscriptions (LKR 4,990/month):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Refund window:</strong> You may request a full refund
              within <strong>7 days</strong> of any monthly charge, provided
              you have not used the Pro features during that billing period
              (i.e., you have not sent any invoices via WhatsApp or used
              Pro-only templates)
            </li>
            <li>
              After 7 days, the charge is non-refundable but you retain access
              until the end of the billing period
            </li>
            <li>Cancellation stops future billing — no further charges</li>
          </ul>
        </Section>

        <Section title="3. Annual Subscriptions">
          <p>For annual subscriptions (LKR 42,900/year):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>30-day refund window:</strong> You may request a
              pro-rated refund within <strong>30 days</strong> of the annual
              charge
            </li>
            <li>
              The pro-rated refund is calculated as: (remaining full months /
              12) × LKR 42,900
            </li>
            <li>
              After 30 days, annual subscriptions are non-refundable but you
              retain access until the end of the annual period
            </li>
          </ul>
        </Section>

        <Section title="4. Non-Refundable Situations">
          <p>Refunds will not be issued in the following situations:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              After the 7-day refund window (monthly) or 30-day window (annual)
            </li>
            <li>
              For accounts suspended or terminated due to violation of our{" "}
              <a href="/terms" className="text-[#22C278] hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              For partially used billing periods where Pro features have been
              actively used
            </li>
            <li>
              Refunds will not be issued for the free tier (LKR 0), as it is
              not a charged service
            </li>
          </ul>
        </Section>

        <Section title="5. How to Request a Refund">
          <p>To request a refund:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Contact us via email at{" "}
              <a href="mailto:hello@ecobill.lk" className="text-[#22C278] hover:underline">
                hello@ecobill.lk
              </a>{" "}
              or via{" "}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22C278] hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              Include your account email address and reason for the refund
              request
            </li>
            <li>
              We will review your request and respond within 2 business days
            </li>
          </ol>
          <p>
            If approved, refunds are processed within{" "}
            <strong>5–10 business days</strong> back to your original payment
            method via PayHere. Processing times may vary depending on your
            bank.
          </p>
        </Section>

        <Section title="6. Technical Issues">
          <p>
            If you experience a technical issue that prevents you from using
            EcoBill Pro features, contact us immediately. We will either resolve
            the issue or issue a refund or credit at our discretion, regardless
            of the refund window.
          </p>
        </Section>

        <Section title="7. Contact Us">
          <p>
            For refund requests or questions about this policy, reach us at:
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm mt-2 space-y-2">
            <p>
              📧{" "}
              <a href="mailto:hello@ecobill.lk" className="text-[#22C278] hover:underline">
                hello@ecobill.lk
              </a>
            </p>
            <p>
              💬{" "}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22C278] hover:underline"
              >
                WhatsApp: +94 77 123 4567
              </a>
            </p>
            <p className="text-gray-400 text-xs">
              We respond within 24 hours on business days.
            </p>
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-12 bg-[#F0FDF4] border border-green-100 rounded-2xl p-6 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about your subscription?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#22C278] text-white font-bold px-6 py-3 rounded-xl text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Support
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl text-sm hover:border-[#22C278] hover:text-[#22C278] transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
