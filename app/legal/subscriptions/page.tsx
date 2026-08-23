import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Subscription Policy | PROMAI",
  description: "PROMAI subscription renewal, cancellation and billing rules.",
};

export default function SubscriptionPolicyPage() {
  return (
    <LegalPage
      eyebrow="BILLING"
      title="Subscription policy"
      updated="23 August 2026"
      summary="These rules will govern any recurring PROMAI plan. The current prototype does not sell a subscription or collect payment."
    >
      <section>
        <h2>1. No subscription in the current demo</h2>
        <p>
          The current PROMAI prototype does not create accounts, sell plans or start
          recurring billing. A subscription will not begin unless a user later selects a
          clearly described paid plan and expressly confirms its recurring price at checkout.
        </p>
      </section>

      <section>
        <h2>2. Plan information and consent</h2>
        <p>Before purchase, each recurring plan will state:</p>
        <ul>
          <li>the included searches, reports, limits or other paid features;</li>
          <li>the price, currency, tax treatment and billing interval;</li>
          <li>the first charge date and the date or frequency of later renewals;</li>
          <li>whether unused searches or allowances carry forward or expire; and</li>
          <li>how to cancel before the next renewal.</li>
        </ul>
        <p>
          PROMAI will not treat silence, an unchecked box or use of the free prototype as
          consent to recurring billing.
        </p>
      </section>

      <section>
        <h2>3. Automatic renewal</h2>
        <p>
          A paid subscription automatically renews for the billing interval accepted at
          checkout until it is cancelled. The payment method on file will be charged at
          the start of each renewal period. A receipt will identify PROMAI, the amount,
          currency, plan and renewal period.
        </p>
      </section>

      <section id="cancel">
        <h2>4. Cancelling</h2>
        <p>
          A subscriber may cancel at any time through the billing portal or the support
          channel identified in the receipt. Cancellation takes effect at the end of the
          current paid period, and no further renewal charge will be made. To avoid the next
          charge, cancellation must be completed before the displayed renewal time.
        </p>
        <p>
          Cancelling a plan is different from deleting an account or a search case. Face
          crops and result data continue to follow the deletion periods in the
          <a href="/legal/privacy"> Privacy policy</a>, whether or not a subscription remains active.
        </p>
      </section>

      <section>
        <h2>5. Refunds after cancellation</h2>
        <p>
          Cancellation does not normally create a prorated refund for the unused portion
          of a billing period. Duplicate charges, non-delivery, technical failures and
          mandatory consumer remedies are handled under the
          <a href="/legal/refunds"> Refund policy</a>.
        </p>
      </section>

      <section>
        <h2>6. Trials and promotions</h2>
        <p>
          If PROMAI offers a trial or introductory price, checkout will disclose its length,
          eligibility rules, the price charged after it ends and the deadline for avoiding
          that charge. A trial will not convert into a paid subscription unless the user has
          been shown those terms and has expressly accepted the recurring payment.
        </p>
      </section>

      <section>
        <h2>7. Price and plan changes</h2>
        <p>
          PROMAI may change a future renewal price or plan features only after giving the
          notice required by applicable law. The notice will state the new amount and its
          effective renewal date and will explain how to cancel. A material change will not
          be applied retroactively to an already paid period.
        </p>
      </section>

      <section>
        <h2>8. Failed payments and plan access</h2>
        <p>
          If a renewal payment fails, PROMAI or its payment provider may retry the payment
          and notify the subscriber. Paid features may be limited after reasonable notice,
          but a failed payment will not change the privacy and deletion protections for
          existing search data. PROMAI may also suspend a plan for material misuse under
          the <a href="/legal/terms">Terms of use</a>.
        </p>
      </section>
    </LegalPage>
  );
}
