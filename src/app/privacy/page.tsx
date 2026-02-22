import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — EcoBill",
  description:
    "EcoBill's Privacy Policy. Learn how we collect, use, and protect your data.",
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Header */}
      <div className="bg-[#F0FDF4] border-b border-green-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[#22C278]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C278]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-500">
            Last updated: February 2026 &nbsp;·&nbsp; Effective: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-10 text-sm text-[#065F46]">
          <strong>Summary:</strong> EcoBill generates invoices client-side in
          your browser. We do not store your invoice data or customer
          information on our servers. We use Google Analytics for website
          analytics and Facebook Pixel for ad measurement. We use PayHere for
          payment processing and WhatsApp Business API for invoice sending (Pro
          plan only).
        </div>

        <Section title="1. Who We Are">
          <p>
            EcoBill (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is
            a digital invoicing tool operated by EcoBill (Pvt) Ltd, registered
            in Sri Lanka. Our website is{" "}
            <a href="https://ecobill.lk" className="text-[#22C278] hover:underline">
              ecobill.lk
            </a>
            . You can contact us at{" "}
            <a href="mailto:hello@ecobill.lk" className="text-[#22C278] hover:underline">
              hello@ecobill.lk
            </a>
            .
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>
            <strong className="text-gray-800">2.1 Invoice Data (Not Stored)</strong>
            <br />
            When you use the EcoBill invoice generator, all invoice data — your
            business name, address, customer details, and line items — is
            processed <strong>entirely in your browser</strong>. This data is
            never sent to or stored on our servers. The PDF is generated on
            your device.
          </p>
          <p>
            <strong className="text-gray-800">2.2 Account Information (Pro Plan)</strong>
            <br />
            If you sign up for EcoBill Pro, we collect: your name, email
            address, business name, phone number, and billing information
            (processed by PayHere, not stored by us).
          </p>
          <p>
            <strong className="text-gray-800">2.3 Analytics Data</strong>
            <br />
            We use <strong>Google Analytics</strong> to understand how visitors
            use our website. This includes page views, session duration, device
            type, and general geographic location. This data is anonymized and
            aggregated.
          </p>
          <p>
            <strong className="text-gray-800">2.4 Advertising Data</strong>
            <br />
            We use <strong>Facebook Pixel</strong> to measure the effectiveness
            of our Facebook and Instagram advertisements. The Pixel may collect
            information about your actions on our website to help us show
            relevant ads.
          </p>
          <p>
            <strong className="text-gray-800">2.5 Payment Data</strong>
            <br />
            Payments are processed by{" "}
            <strong>PayHere</strong> (payhere.lk), a PCI-DSS compliant payment
            gateway. We do not receive or store your card details. PayHere
            processes payment under their own privacy policy.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide and improve the EcoBill service</li>
            <li>To process payments and manage subscriptions</li>
            <li>
              To send transactional emails (receipt confirmations, trial
              expiration reminders)
            </li>
            <li>To send WhatsApp invoice deliveries (Pro plan, with your
              permission)</li>
            <li>To analyze website usage and improve user experience</li>
            <li>
              To measure and optimize our advertising campaigns (Facebook Pixel)
            </li>
            <li>To respond to support queries</li>
            <li>To comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="4. WhatsApp Invoice Sending (Pro Plan)">
          <p>
            EcoBill Pro uses the <strong>WhatsApp Business API</strong> to
            deliver invoices to your customers. When you use this feature:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Your customer&apos;s WhatsApp number is used only to send the
              invoice you request
            </li>
            <li>
              Numbers are not stored, added to any marketing list, or shared
              with third parties
            </li>
            <li>
              Customers who wish to opt out of receiving invoices via WhatsApp
              should contact you directly
            </li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function (session management, security)
            </li>
            <li>
              <strong>Analytics cookies:</strong> Google Analytics to understand
              traffic patterns
            </li>
            <li>
              <strong>Advertising cookies:</strong> Facebook Pixel for ad
              measurement
            </li>
          </ul>
          <p>
            You can disable non-essential cookies in your browser settings. Note
            that disabling analytics cookies will not affect the functionality
            of the invoice generator.
          </p>
        </Section>

        <Section title="6. Data Sharing">
          <p>We do not sell your personal data. We may share data with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>PayHere</strong> — for payment processing
            </li>
            <li>
              <strong>Google</strong> — for Analytics and advertising services
            </li>
            <li>
              <strong>Meta (Facebook)</strong> — for advertising measurement
              via Pixel
            </li>
            <li>
              <strong>WhatsApp Business API providers</strong> — for invoice
              delivery (Pro plan only)
            </li>
            <li>
              <strong>Legal authorities</strong> — when required by Sri Lankan
              law
            </li>
          </ul>
        </Section>

        <Section title="7. Data Retention">
          <p>
            Account data is retained while your account is active and for 30
            days after deletion. Analytics data is retained per Google
            Analytics defaults (26 months).
          </p>
          <p>
            Invoice content is never stored on our servers — it exists only in
            your browser session and in the PDF file you download.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Under applicable Sri Lankan data protection principles, you have the
            right to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and personal data</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>
            To exercise these rights, email us at{" "}
            <a href="mailto:hello@ecobill.lk" className="text-[#22C278] hover:underline">
              hello@ecobill.lk
            </a>
            .
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We implement industry-standard security measures including HTTPS
            encryption, secure hosting, and access controls. Since invoice data
            is not stored on our servers, there is no risk of invoice content
            being exposed in a data breach.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>
            EcoBill is not intended for users under 18 years old. We do not
            knowingly collect data from children.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this policy as our services evolve. We will notify
            you of material changes via email (if you have an account) or via a
            notice on our website. Continued use of EcoBill after changes
            constitutes acceptance.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            For privacy-related questions or requests, contact us at:
          </p>
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
