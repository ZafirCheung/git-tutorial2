import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | PROMAI",
  description: "Rules for lawful, responsible use of PROMAI visual-similarity search.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms of use"
      updated="23 August 2026"
      summary="These terms govern access to PROMAI, including lawful search purposes, prohibited conduct, accounts, credits, billing and responsibility for similarity results."
    >
      <section>
        <h2>1. Operator and acceptance</h2>
        <p>
          PROMAI is operated by Ice Bear Media Inc, a corporation incorporated under the
          laws of Colorado, USA, with an address at 5142 N Academy Blvd Unit 4322, Colorado
          Springs, CO 80918, USA (&quot;PROMAI&quot;, &quot;we&quot;, &quot;us&quot;).
        </p>
        <p>
          By accessing or using PROMAI, creating an account or purchasing credits, you
          accept these terms and the policies linked from them. If you do not agree, do not
          use the service.
        </p>
      </section>

      <section>
        <h2>2. What PROMAI provides</h2>
        <p>
          PROMAI compares a user-approved face crop with images available through sources
          that PROMAI and its providers are permitted to process. A result may include a
          visual-similarity score, thumbnail and link to the public source page.
        </p>
        <p>
          PROMAI does not identify a person, verify a legal identity or certify that two
          photographs show the same individual. Results are investigative leads requiring
          independent human verification.
        </p>
      </section>

      <section>
        <h2>3. Eligibility and accounts</h2>
        <p>
          You must be at least 18 years old and legally capable of accepting these terms.
          Account information must be accurate and kept secure. You are responsible for
          activity under your account and must promptly report suspected unauthorised use.
          One person may not create multiple accounts to evade limits, enforcement or
          promotional conditions.
        </p>
      </section>

      <section>
        <h2>4. Permitted search purposes</h2>
        <p>You may submit a face only when at least one of these grounds applies:</p>
        <ul>
          <li>you are checking your own online photo footprint;</li>
          <li>the person shown has knowingly consented to the search;</li>
          <li>you are investigating suspected impersonation or fraud directed at you; or</li>
          <li>you have another documented and lawful basis for the specific search.</li>
        </ul>
        <p>
          You must truthfully select the search purpose and have the right to use the
          submitted photo. PROMAI may request additional information when necessary to
          review a search or suspected abuse.
        </p>
      </section>

      <section>
        <h2>5. Prohibited use</h2>
        <p>You must not use PROMAI to:</p>
        <ul>
          <li>stalk, harass, threaten, intimidate, blackmail or expose private details about anyone;</li>
          <li>reveal an anonymous person&apos;s identity merely because they chose to remain anonymous;</li>
          <li>identify people at protests, places of worship, health facilities, shelters or other sensitive locations;</li>
          <li>make employment, housing, credit, insurance, education, benefits or other eligibility decisions;</li>
          <li>create, enrich, sell or redistribute a database or profile of individuals;</li>
          <li>run bulk searches, automate queries, scrape results or bypass access controls;</li>
          <li>submit a minor&apos;s face without clear lawful authority;</li>
          <li>present a similarity score as proof of identity, wrongdoing or association; or</li>
          <li>violate privacy, publicity, copyright or other rights belonging to another person.</li>
        </ul>
      </section>

      <section>
        <h2>6. Photos and submitted material</h2>
        <p>
          You retain rights in material you submit. You grant PROMAI and its contracted
          providers a limited licence to process the approved face crop solely to perform
          the requested search, secure the service, investigate abuse and comply with law.
          This licence ends when the applicable retention period ends.
        </p>
        <p>
          You represent that you have a lawful basis to submit the image and that doing so
          does not violate another person&apos;s rights. Data handling is explained in the
          <a href="/legal/privacy"> Privacy policy</a>.
        </p>
      </section>

      <section>
        <h2>7. Similarity, accuracy and source pages</h2>
        <p>
          Image quality, age, pose, lighting, editing and natural resemblance can produce
          missed or incorrect matches. A high score can still be wrong. PROMAI does not
          guarantee web coverage, a result, a minimum match count, source availability or
          fitness for a particular purpose.
        </p>
        <p>
          Third parties control the linked source pages. PROMAI is not responsible for
          their content, availability, accuracy or privacy practices.
        </p>
      </section>

      <section>
        <h2>8. Credits, subscriptions and payment</h2>
        <p>
          Current recurring plans, one-time credit packs, renewal rules, credit expiry and
          cancellation instructions appear in the <a href="/legal/subscriptions">Subscription
          policy</a>. Checkout displays the total price, currency, taxes, billing interval
          and included credits before payment.
        </p>
        <p>
          Card details are submitted directly to the payment processor and do not pass
          through PROMAI&apos;s servers. Refund eligibility and processing are governed by
          the <a href="/legal/refunds">Refund policy</a>. Credits have no cash value and may
          not be transferred or resold.
        </p>
      </section>

      <section>
        <h2>9. Removal and complaints</h2>
        <p>
          Anyone may request free de-indexing of their face without a purchase or account.
          The verification, source-removal distinction and appeal process appear in the
          <a href="/legal/removal"> Remove my photos policy</a>.
        </p>
      </section>

      <section>
        <h2>10. Enforcement</h2>
        <p>
          PROMAI may rate-limit, reject a search, suspend or terminate access when it
          reasonably believes activity is unlawful, automated, deceptive, harmful or in
          material breach of these terms. Serious or repeated abuse may result in loss of
          credits without refund to the extent permitted by law. PROMAI may preserve
          limited evidence and report conduct when legally required.
        </p>
      </section>

      <section>
        <h2>11. Intellectual property</h2>
        <p>
          PROMAI, its interface, software, branding and original content belong to Ice Bear
          Media Inc or its licensors. These terms grant only a personal, limited,
          non-exclusive, non-transferable right to use the service as permitted here. They
          do not grant rights in third-party source content shown in results.
        </p>
      </section>

      <section>
        <h2>12. Availability and liability</h2>
        <p>
          The service is provided on an &quot;as available&quot; basis. To the maximum
          extent permitted by law, PROMAI disclaims implied warranties and is not liable
          for indirect, incidental, special or consequential loss arising from a result,
          missed match, source page or user decision. PROMAI&apos;s aggregate liability for
          a claim will not exceed the amount paid by the claimant to PROMAI during the
          twelve months before the event giving rise to that claim.
        </p>
        <p>
          Nothing in these terms excludes liability or consumer remedies that cannot
          lawfully be excluded.
        </p>
      </section>

      <section>
        <h2>13. Governing law and disputes</h2>
        <p>
          These terms are governed by the laws of Delaware, USA, without regard to conflict
          of law rules. Before commencing a formal dispute, contact{" "}
          <a href="mailto:support@promai.app">support@promai.app</a> and allow 30 days for
          an informal resolution.
        </p>
        <p>
          Subject to mandatory consumer law, unresolved disputes will be resolved by
          binding individual arbitration in Wilmington, Delaware under the Commercial
          Arbitration Rules of the American Arbitration Association. Either party may seek
          urgent injunctive relief in a court of competent jurisdiction.
        </p>
      </section>

      <section>
        <h2>14. Changes and contact</h2>
        <p>
          Material changes will be dated and, where required, notified before taking
          effect. Continued use after the effective date constitutes acceptance, except
          where law requires renewed consent. Questions may be sent to{" "}
          <a href="mailto:support@promai.app">support@promai.app</a>.
        </p>
      </section>
    </LegalPage>
  );
}
