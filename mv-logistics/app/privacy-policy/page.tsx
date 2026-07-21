import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mukhtalif Ventures',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink-heading md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-light">Last updated: July 2026</p>
        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-ink-secondary">
          <p>
            Mukhtalif Ventures (&quot;we&quot;, &quot;us&quot;) collects information you provide directly,
            such as through our quote request, contact, and career application forms, to
            respond to your enquiries and provide our logistics services.
          </p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Information We Collect</h2>
          <p>Contact details, company information, and shipment details submitted through our forms, as well as standard technical data collected when you browse our site.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">How We Use Information</h2>
          <p>To respond to quote requests, provide customer support, process job applications, and improve our services.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Data Sharing</h2>
          <p>We do not sell personal information. Data may be shared with service providers strictly to fulfil the services requested.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting info@mukhtalifventures.com.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Contact</h2>
          <p>Questions about this policy can be sent to info@mukhtalifventures.com.</p>
        </div>
      </div>
    </section>
  );
}
