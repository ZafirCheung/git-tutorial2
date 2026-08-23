import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | PROMAI",
  description: "PROMAI refund eligibility, exclusions, request process and processing times.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="BILLING"
      title="Refund policy"
      updated="23 August 2026"
      summary="This policy applies to PROMAI subscriptions, one-time credit packs and other digital purchases made directly through PROMAI."
    >
      <section>
        <h2>1. Scope and operator</h2>
        <p>
          PROMAI is operated by Ice Bear Media Inc (&quot;PROMAI&quot;, &quot;we&quot;,
          &quot;us&quot;). This policy forms part of the <a href="/legal/terms">Terms of
          use</a>. It does not apply to purchases made through a third-party app store,
          whose refund process controls that purchase.
        </p>
      </section>

      <section>
        <h2>2. Digital service and credit delivery</h2>
        <p>
          PROMAI sells access to digital face-similarity searches, reports and related
          features through recurring plans and one-time credit packs. The product, price,
          currency, tax, credit quantity, billing frequency and any promotion are displayed
          before payment and confirmed in the receipt.
        </p>
        <p>
          A search credit is consumed when a search request is accepted for processing.
          Search coverage, match count and similarity scores vary. PROMAI does not guarantee
          that a search will produce a match or identify a person.
        </p>
      </section>

      <section>
        <h2>3. Thirty-day unused-credit refund</h2>
        <p>
          A customer may request a refund within 30 days after the initial subscription
          purchase if no paid subscription credit has been used. Free or promotional
          credits used before the first paid credit do not by themselves disqualify the
          customer. Renewal periods and partially used credit packs are normally
          non-refundable, subject to mandatory law.
        </p>
      </section>

      <section>
        <h2>4. Billing errors and service failure</h2>
        <p>PROMAI will also review a full or partial refund where:</p>
        <ul>
          <li>the same purchase was charged more than once;</li>
          <li>the amount charged differs from the amount accepted at checkout;</li>
          <li>paid credits were not added to the customer&apos;s balance;</li>
          <li>a confirmed PROMAI failure prevented delivery and could not be corrected within a reasonable time; or</li>
          <li>applicable consumer law requires a refund or other remedy.</li>
        </ul>
      </section>

      <section>
        <h2>5. Non-refundable situations</h2>
        <p>
          Subject to mandatory law, consumed credits and completed searches are not
          refundable because a search returns few or no matches, a source is unavailable,
          a score is lower than expected or the customer decides that a result is not
          useful. Subscription cancellation stops future renewal but does not create a
          prorated refund for the current paid period.
        </p>
        <p>
          Credits or fees are not refunded when access is restricted or terminated for
          stalking, harassment, doxxing, automation, database building, an unlawful search,
          payment abuse or another material violation of the Terms of use.
        </p>
      </section>

      <section id="request">
        <h2>6. Requesting a refund</h2>
        <p>
          Email <a href="mailto:support@promai.app">support@promai.app</a> from the address
          associated with the purchase. Include the receipt or transaction reference,
          purchase date and a short explanation. Do not send a full card number or card
          security code.
        </p>
        <p>
          PROMAI normally acknowledges billing requests within 24 hours and decides them
          within five business days. Approved refunds are returned to the original payment
          method. The payment provider or bank may require an additional 5–10 business days
          to display the credit.
        </p>
      </section>

      <section>
        <h2>7. Mandatory rights</h2>
        <p>
          Nothing in this policy limits a statutory cooling-off period, remedy for
          non-conforming digital content or other consumer right that cannot legally be
          waived. Where immediate digital performance requires consent or acknowledgment,
          PROMAI obtains it at checkout.
        </p>
      </section>
    </LegalPage>
  );
}
