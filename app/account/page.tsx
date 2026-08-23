import type { Metadata } from "next";
import Link from "next/link";
import AccountActions from "./AccountActions";

export const metadata: Metadata = {
  title: "Account | PROMAI",
  description: "Access PROMAI searches, reports and billing from your account.",
};

export default function AccountPage() {
  return (
    <div className="account-site-shell">
      <header className="site-header account-header">
        <Link className="brand" href="/" aria-label="PROMAI home">
          <span className="brand-face" aria-hidden="true">⌖</span>
          <span>PRO</span><strong>MAI</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#platforms">Platforms</Link>
          <Link href="/#method">How it works</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#pricing">Price</Link>
          <Link href="/legal/removal#request">Remove me</Link>
          <Link className="account-nav-current" href="/account" aria-current="page">Account</Link>
        </nav>
        <Link className="header-cta" href="/#search">Search a face</Link>
      </header>

      <main className="account-main">
        <section className="account-panel" aria-labelledby="account-title">
          <span className="section-tag red-tag">ACCOUNT</span>
          <h1 id="account-title">You&apos;re not signed in.</h1>
          <p>
            If you have paid before, sign in and your searches and reports will be here.
            An account is also created for you with your first payment, so there is
            nothing you need to do first.
          </p>
          <AccountActions />
          <div className="account-notes">
            <article><strong>Searches</strong><span>Review paid searches and available one-time credits.</span></article>
            <article><strong>Billing</strong><span>Manage subscriptions, invoices and cancellation.</span></article>
            <article><strong>Privacy</strong><span>Request deletion or remove eligible photos from the index.</span></article>
          </div>
        </section>
      </main>

      <footer className="account-footer">
        <span>© 2026 PROMAI · A face is a clue, never a verdict.</span>
        <div><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><a href="mailto:support@promai.app">Support</a></div>
      </footer>
    </div>
  );
}
