/* eslint-disable @next/next/no-html-link-for-pages */
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  summary: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  summary,
  children,
}: LegalPageProps) {
  return (
    <div className="legal-site-shell">
      <header className="legal-header">
        <a className="brand" href="/" aria-label="PROMAI home">
          <span className="brand-face" aria-hidden="true">⌖</span>
          <span>PRO</span><strong>MAI</strong>
        </a>
        <nav aria-label="Legal navigation">
          <a href="/#pricing">Price</a>
          <a href="/about">About</a>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/removal#request">Remove me</a>
          <a href="/account">Account</a>
        </nav>
        <a className="legal-home-link" href="/">Back to search →</a>
      </header>

      <main className="legal-main">
        <div className="legal-paper">
          <div className="legal-title-block">
            <span className="section-tag red-tag">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="legal-updated">Last updated {updated}</p>
            <p className="legal-summary">{summary}</p>
          </div>

          <article className="legal-article">{children}</article>
        </div>
      </main>

      <footer className="site-footer legal-footer">
        <div className="content-width footer-grid">
          <div>
            <a className="brand footer-brand" href="/">
              <span className="brand-face" aria-hidden="true">⌖</span>
              <span>PRO</span><strong>MAI</strong>
            </a>
            <p>A face is a clue. Never a verdict.</p>
          </div>
          <div>
            <h3>PRODUCT</h3>
            <a href="/#search">Search a face</a>
            <a href="/#method">How it works</a>
            <a href="/#scores">How scores work</a>
            <a href="/#pricing">Price</a>
            <a href="/account">Account</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div>
            <h3>POLICIES</h3>
            <a href="/about">About PROMAI</a>
            <a href="/legal/terms">Terms of use</a>
            <a href="/legal/privacy">Privacy</a>
            <a href="/legal/refunds">Refund policy</a>
            <a href="/legal/subscriptions">Subscription policy</a>
            <a href="/legal/removal#request">Remove my photos</a>
          </div>
        </div>
        <div className="content-width legal-copy">
          <p>
            PROMAI is not a consumer reporting agency and does not provide consumer
            reports. Do not use the service for employment, housing, credit, insurance,
            benefits or other eligibility decisions. A visual-similarity result does not
            establish anyone&apos;s identity or create a right to contact, follow or monitor them.
          </p>
          <span>
            © 2026 PROMAI · Operated by Ice Bear Media Inc ·{" "}
            <a href="mailto:support@promai.app">support@promai.app</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
