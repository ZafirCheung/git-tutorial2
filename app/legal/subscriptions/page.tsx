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
        <p>PROMAI offers the following recurring plans in US dollars:</p>
        <ul>
          <li>
            <strong>Weekly:</strong> US$12.99 per week, including five face searches
            during each weekly billing period; and
          </li>
          <li>
            <strong>Unlimited Annual:</strong> US$79.99 per year, advertised as unlimited
            subject to a disclosed fair-use allowance of 250 searches during each annual
            billing period.
          </li>
        </ul>
        <p>
          PROMAI also offers non-recurring packs: one search for US$4.99, five searches
          for US$17.99, ten searches for US$29.99 and twenty searches for US$47.99.
          One-time packs do not automatically renew and unused searches do not expire.
          Checkout controls if it shows a temporary discount, tax or different local
          price required by law.
        </p>
      </section>

      <section>
        <h2>2. Consent and confirmation</h2>
        <p>
          Before purchase, checkout identifies the plan, included credits, total price,
          currency, taxes, weekly or annual billing interval, first charge and automatic-renewal
          terms. A subscription starts only after the customer expressly confirms the
          recurring payment. The receipt records the accepted plan and charge.
        </p>
      </section>

      <section>
        <h2>3. Automatic renewal</h2>
        <p>
          Weekly renews every week and Unlimited Annual renews every year until cancelled.
          PROMAI charges the payment method on file on the applicable renewal date. A
          successful Weekly renewal provides a new five-search weekly allocation. A
          successful Unlimited Annual renewal begins a new annual fair-use period.
        </p>
      </section>

      <section>
        <h2>4. Credits</h2>
        <p>
          Weekly searches are valid only during the weekly billing period in which they are
          issued. Unused Weekly searches expire at the end of that period and do not roll
          over. Unlimited Annual is subject to reasonable anti-abuse controls and the
          disclosed limit of 250 searches per annual term. Unused one-time pack searches
          do not expire, but remain subject to account availability, these terms and
          continued operation of the service. Searches have no cash value and cannot be
          transferred or resold. Source links already unlocked remain associated with the
          relevant report while that report is available under PROMAI&apos;s retention rules.
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
