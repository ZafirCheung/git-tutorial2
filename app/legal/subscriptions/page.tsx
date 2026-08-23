import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Subscription Policy | PROMAI",
  description: "PROMAI plan pricing, automatic renewal, credits, cancellation and billing rules.",
};

export default function SubscriptionPolicyPage() {
  return (
    <LegalPage
      eyebrow="BILLING"
      title="Subscription policy"
      updated="23 August 2026"
      summary="This policy governs recurring PROMAI plans, automatic renewal, plan credits, cancellation and related billing."
    >
      <section>
        <h2>1. Current plans</h2>
        <p>PROMAI offers the following monthly subscriptions in US dollars:</p>
        <ul>
          <li><strong>Pro:</strong> US$25 per month, including 100 credits;</li>
          <li><strong>Ultra:</strong> US$79 per month, including 500 credits.</li>
        </ul>
        <p>
          PROMAI also offers non-recurring credit packs: 3 credits for US$3, 30 credits
          for US$24 and 100 credits for US$69. One-time packs do not automatically renew.
          Checkout controls if it shows a temporary discount or a different local price
          required by law.
        </p>
      </section>

      <section>
        <h2>2. Consent and confirmation</h2>
        <p>
          Before purchase, checkout identifies the plan, included credits, total price,
          currency, taxes, monthly billing interval, first charge and automatic-renewal
          terms. A subscription starts only after the customer expressly confirms the
          recurring payment. The receipt records the accepted plan and charge.
        </p>
      </section>

      <section>
        <h2>3. Automatic renewal</h2>
        <p>
          Pro and Ultra renew each month until cancelled. PROMAI charges the payment method
          on file on the same calendar date as the initial purchase, or the nearest
          available billing date. The renewal provides a new monthly credit allocation.
        </p>
      </section>

      <section>
        <h2>4. Credits</h2>
        <p>
          Subscription credits are valid only during the billing period in which they are
          issued. Unused subscription credits expire at the end of that period and do not
          roll over. One-time pack credits remain available according to the expiry date,
          if any, displayed before purchase. Credits have no cash value and cannot be
          transferred or resold.
        </p>
      </section>

      <section id="cancel">
        <h2>5. Cancelling</h2>
        <p>
          Customers may cancel through the billing portal or by emailing{" "}
          <a href="mailto:support@promai.app">support@promai.app</a>. To avoid the next
          charge, submit cancellation at least 48 hours before the renewal date.
          Cancellation takes effect at the end of the current paid period, access continues
          until then and no later renewal is charged.
        </p>
        <p>
          Deleting the app, browser data, a search case or an account does not by itself
          cancel a subscription. Subscription cancellation is separate from account and
          biometric-data deletion.
        </p>
      </section>

      <section>
        <h2>6. Refunds</h2>
        <p>
          Cancellation does not normally create a prorated refund. The 30-day initial
          unused-credit rule, duplicate charges, service failure and mandatory consumer
          remedies are addressed in the <a href="/legal/refunds">Refund policy</a>.
        </p>
      </section>

      <section>
        <h2>7. Trials, promotions and plan changes</h2>
        <p>
          A trial or introductory offer states its duration, eligibility, included credits,
          renewal price and cancellation deadline before acceptance. PROMAI gives advance
          notice of a material renewal-price change and explains how to cancel before it
          takes effect. Changes do not apply retroactively to a paid period.
        </p>
      </section>

      <section>
        <h2>8. Failed payments</h2>
        <p>
          If a renewal payment fails, PROMAI or its payment provider may retry it and notify
          the customer. Paid features may be limited until payment succeeds. A failed
          payment does not change the privacy and deletion obligations applying to existing
          search data.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Billing and cancellation questions should be sent to{" "}
          <a href="mailto:support@promai.app">support@promai.app</a>. PROMAI is operated by
          Ice Bear Media Inc, 5142 N Academy Blvd Unit 4322, Colorado Springs, CO 80918, USA.
        </p>
      </section>
    </LegalPage>
  );
}
