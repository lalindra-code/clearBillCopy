import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — EcoBill",
  description:
    "EcoBill's Terms of Service. Read our terms before using the platform.",
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-[#F0FDF4] border-b border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-6 h-6 text-[#22C278]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-500">
            Last updated: February 2026 &nbsp;·&nbsp; Effective: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 text-sm text-amber-800">
          Please read these Terms of Service carefully before using EcoBill.
          By using EcoBill, you agree to these terms. If you do not agree,
          please do not use the service.
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using EcoBill (&ldquo;the Service&rdquo;), you
            agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
            These Terms apply to all users of EcoBill, including free and paid
            users.
          </p>
          <p>
            EcoBill is operated by EcoBill (Pvt) Ltd, registered in Sri Lanka.
            These Terms are governed by the laws of Sri Lanka.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>EcoBill is a digital invoice generation tool that enables users to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Create professional invoices in their browser</li>
            <li>Download invoices as PDF files</li>
            <li>
              Send invoices via WhatsApp (EcoBill Pro plan only)
            </li>
          </ul>
          <p>
            The free tier allows up to 3 invoices per month. The EcoBill Pro
            plan provides unlimited invoices and additional features for LKR
            4,990 per month (or LKR 42,900 per year).
          </p>
        </Section>

        <Section title="3. Free Trial">
          <p>
            EcoBill Pro offers a <strong>7-day free trial</strong>. During the
            trial period:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No payment is required</li>
            <li>You have full access to all Pro features</li>
            <li>
              You may cancel before the trial ends without being charged
            </li>
            <li>
              After the trial, your subscription automatically converts to a
              paid monthly plan
            </li>
          </ul>
        </Section>

        <Section title="4. Payments and Billing">
          <p>
            <strong className="text-gray-800">4.1 Payment Processing</strong>
            <br />
            Payments are processed by PayHere (payhere.lk), a third-party
            payment gateway. By subscribing to EcoBill Pro, you authorize
            PayHere to charge your payment method on a recurring basis.
          </p>
          <p>
            <strong className="text-gray-800">4.2 Billing Cycles</strong>
            <br />
            Monthly subscriptions are billed on the same date each month.
            Annual subscriptions are billed once per year. Prices are in Sri
            Lankan Rupees (LKR) inclusive of applicable taxes.
          </p>
          <p>
            <strong className="text-gray-800">4.3 Price Changes</strong>
            <br />
            We reserve the right to change prices with 30 days&apos; notice.
            Existing subscribers will be notified via email before any price
            change takes effect.
          </p>
        </Section>

        <Section title="5. Acceptable Use">
          <p>
            You may use EcoBill only for lawful business invoicing purposes. You
            agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Use EcoBill to generate fraudulent, fake, or misleading invoices
            </li>
            <li>Impersonate another business or person</li>
            <li>
              Use EcoBill for any illegal activity under Sri Lankan law or
              international law
            </li>
            <li>Attempt to reverse-engineer, hack, or disrupt the service</li>
            <li>
              Send unsolicited commercial messages via the WhatsApp feature
            </li>
            <li>Share your Pro account credentials with unauthorized users</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            EcoBill and its original content, features, and functionality are
            owned by EcoBill (Pvt) Ltd and protected by intellectual property
            laws.
          </p>
          <p>
            Invoice content you create remains your intellectual property.
            EcoBill does not claim ownership over invoices you generate.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            EcoBill is provided &ldquo;as is&rdquo; without warranties of any
            kind. We do not guarantee that the service will be uninterrupted,
            error-free, or meet your specific requirements.
          </p>
          <p>
            Invoice generation is a technical tool. You are responsible for
            verifying the accuracy of all invoice content before sending to
            customers.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by Sri Lankan law, EcoBill (Pvt)
            Ltd shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the
            service, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Loss of revenue or profits</li>
            <li>Loss of data</li>
            <li>Business interruption</li>
            <li>Any errors in generated invoices</li>
          </ul>
          <p>
            Our total liability shall not exceed the amount you paid to EcoBill
            in the 3 months preceding the claim.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            <strong className="text-gray-800">By You:</strong> You may cancel
            your subscription at any time from your account settings. Your Pro
            access continues until the end of your current billing period.
          </p>
          <p>
            <strong className="text-gray-800">By Us:</strong> We reserve the
            right to suspend or terminate your account if you violate these
            Terms. In cases of suspected fraud or illegal use, we may terminate
            immediately without notice.
          </p>
        </Section>

        <Section title="10. Privacy">
          <p>
            Your use of EcoBill is also governed by our{" "}
            <a href="/privacy" className="text-[#22C278] hover:underline">
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the Democratic Socialist Republic of Sri Lanka. Any disputes
            shall be submitted to the exclusive jurisdiction of the courts of
            Sri Lanka.
          </p>
        </Section>

        <Section title="12. Changes to Terms">
          <p>
            We may modify these Terms at any time. Material changes will be
            communicated via email (if you have an account) or via notice on our
            website at least 14 days before they take effect. Continued use of
            EcoBill after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>For questions about these Terms, contact us at:</p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm mt-2">
            <p className="font-semibold text-gray-800">EcoBill</p>
            <p>
              Email:{" "}
              <a href="mailto:hello@ecobill.lk" className="text-[#22C278] hover:underline">
                hello@ecobill.lk
              </a>
            </p>
            <p>Website: ecobill.lk</p>
            <p>Country: Sri Lanka</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
