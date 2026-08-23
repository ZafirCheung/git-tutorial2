import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | PROMAI",
  description: "When a PROMAI payment may be refunded and how refund requests are handled.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="BILLING"
      title="Refund policy"
      updated="23 August 2026"
      summary="This policy explains the refund rules that will apply if PROMAI introduces paid searches, reports or subscriptions. The current prototype does not accept payment."
    >
      <section>
        <h2>1. No payments in the current demo</h2>
        <p>
          PROMAI&apos;s current public prototype has no checkout and cannot charge a card.
          No purchase, subscription or refund can presently be created through this site.
          The rules below must be active before paid access is enabled.
        </p>
      </section>

      <section>
        <h2>2. What checkout must show</h2>
        <p>Before a user pays, checkout will clearly display:</p>
        <ul>
          <li>the product or plan being purchased and what it includes;</li>
          <li>the total price, billing currency and applicable taxes;</li>
          <li>whether the charge is one-time or automatically recurring;</li>
          <li>when the paid feature or report becomes available; and</li>
          <li>any plan-specific refund, trial or promotional condition.</li>
        </ul>
        <p>
          A plan-specific term shown and accepted at checkout forms part of this policy.
          It cannot remove a consumer right that applicable law makes mandatory.
        </p>
      </section>

      <section>
        <h2>3. When a refund may be approved</h2>
        <p>PROMAI will review a refund request where:</p>
        <ul>
          <li>the same purchase was charged more than once;</li>
          <li>the amount charged differs from the amount accepted at checkout;</li>
          <li>a paid feature was not delivered and PROMAI cannot restore it within a reasonable time;</li>
          <li>a confirmed technical failure prevented use of the purchased access; or</li>
          <li>applicable consumer law requires a refund, cancellation right or other remedy.</li>
        </ul>
      </section>

      <section>
        <h2>4. Digital results and non-refundable situations</h2>
        <p>
          A completed search or an opened source report is a digital service that may be
          delivered immediately. Subject to mandatory law, it is normally not refundable
          merely because the search returns few or no matches, a source has disappeared,
          a similarity score is lower than expected, or the user later decides the lead is
          not useful. PROMAI does not guarantee web coverage, a match or an identity result.
        </p>
        <p>
          Charges are also normally non-refundable when access is suspended or terminated
          for stalking, harassment, doxxing, automation, database building, an unlawful
          search or another material violation of the <a href="/legal/terms">Terms of use</a>.
          This does not limit rights that cannot lawfully be excluded.
        </p>
      </section>

      <section>
        <h2>5. Subscription cancellations</h2>
        <p>
          Cancelling a subscription stops future renewal charges but does not automatically
          refund the current billing period. Access ordinarily continues until the paid
          period ends. See the <a href="/legal/subscriptions">Subscription policy</a> for
          renewal, cancellation and plan-change rules.
        </p>
      </section>

      <section id="request">
        <h2>6. How to request a refund</h2>
        <p>
          When payments launch, PROMAI will provide a functioning billing-support email or
          form on this page, in the purchase receipt and at checkout. A request should be
          made within 14 days after the charge, unless a longer period is required by law,
          and should include the receipt or transaction reference, purchase date and a
          short explanation. Never send a full card number or security code.
        </p>
        <p>
          PROMAI will acknowledge the request and normally decide it within five business
          days. An approved refund will be returned to the original payment method. The
          payment provider or bank may then need additional time to post the funds.
        </p>
      </section>

      <section>
        <h2>7. Disputes and unauthorised charges</h2>
        <p>
          Report an unrecognised charge promptly through the support channel shown on the
          receipt. PROMAI will investigate duplicate, incorrect and suspected unauthorised
          transactions. Users retain the right to contact their card issuer, but contacting
          PROMAI first may allow a billing error to be corrected more quickly.
        </p>
      </section>
    </LegalPage>
  );
}
