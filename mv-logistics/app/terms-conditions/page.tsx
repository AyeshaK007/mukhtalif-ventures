import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mukhtalif Ventures',
};

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-ink-heading md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-ink-light">Last updated: July 2026</p>
        <div className="prose-sm mt-10 space-y-6 text-sm leading-relaxed text-ink-secondary">
          <h2 className="font-display text-lg font-bold text-ink-heading">Acceptance of Terms</h2>
          <p>By using this website or engaging Mukhtalif Ventures for logistics services, you agree to these terms and conditions.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Services</h2>
          <p>Service quotes provided through this site are estimates and subject to confirmation based on shipment details, capacity, and applicable regulations.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Liability</h2>
          <p>Mukhtalif Ventures handles all shipments in accordance with our operating procedures and applicable regulatory standards. Liability for loss or damage is governed by the service agreement signed with each client.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Website Use</h2>
          <p>Content on this website is provided for informational purposes and may be updated without notice.</p>
          <h2 className="font-display text-lg font-bold text-ink-heading">Governing Law</h2>
          <p>These terms are governed by the laws of Pakistan.</p>
        </div>
      </div>
    </section>
  );
}
