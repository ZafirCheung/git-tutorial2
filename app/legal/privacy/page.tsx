import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | PROMAI",
  description: "How PROMAI collects, uses, shares, protects and deletes face-search and account data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="YOUR DATA"
      title="Privacy"
      updated="23 August 2026"
      summary="This policy explains how PROMAI handles face crops, biometric templates, results, accounts, payments, support requests and website data."
    >
      <section>
        <h2>1. Controller and contact</h2>
        <p>
          Ice Bear Media Inc, 5142 N Academy Blvd Unit 4322, Colorado Springs, CO
          80918, USA, operates PROMAI and is responsible for the personal data described
          in this policy. Privacy questions and rights requests may be sent to{" "}
          <a href="mailto:support@promai.app">support@promai.app</a>.
        </p>
      </section>

      <section>
        <h2>2. Face selection and search data</h2>
        <p>
          Face detection and framing occur on the user&apos;s device. PROMAI receives only
          the face crop the user approves, not the surrounding original photograph. To
          perform a search, PROMAI and its index provider may create a mathematical
          representation of facial features and compare it with permitted index entries.
        </p>
        <p>A search case may contain:</p>
        <ul>
          <li>the approved face crop and temporary biometric template;</li>
          <li>result thumbnails, similarity scores and source-page links;</li>
          <li>the selected lawful-purpose category;</li>
          <li>a random case, account or browser identifier; and</li>
          <li>limited security records used for rate limiting and abuse review.</li>
        </ul>
        <p>
          PROMAI does not append a name, home address, telephone number or date of birth
          to a similarity result and does not represent that a result establishes identity.
        </p>
      </section>

      <section>
        <h2>3. Other information collected</h2>
        <ul>
          <li><strong>Account data:</strong> email address, authentication identifiers and settings;</li>
          <li><strong>Transaction data:</strong> plan, credits, amount, currency, tax, receipt and payment status;</li>
          <li><strong>Technical data:</strong> IP address, browser, device, requested page, cookie identifiers and timestamps;</li>
          <li><strong>Support data:</strong> messages, removal evidence and information voluntarily supplied in a request.</li>
        </ul>
        <p>
          PROMAI does not receive complete card numbers or card security codes. Those are
          collected directly by the payment processor.
        </p>
      </section>

      <section>
        <h2>4. Purposes and legal bases</h2>
        <p>PROMAI processes personal data to:</p>
        <ul>
          <li>provide the search, account, payment, history and support features requested by the user;</li>
          <li>verify lawful-use confirmations and enforce prohibited-use rules;</li>
          <li>prevent fraud, automated access, payment abuse and security incidents;</li>
          <li>process free removal, deletion, access and appeal requests;</li>
          <li>comply with tax, accounting, sanctions and other legal obligations; and</li>
          <li>measure and improve the service without sending face-search contents to advertising platforms.</li>
        </ul>
        <p>
          Depending on location and context, the legal basis is performance of a contract,
          consent or explicit consent, compliance with law, and PROMAI&apos;s legitimate
          interests in security and service operation. The person submitting a third
          party&apos;s face must independently have a lawful basis to do so.
        </p>
      </section>

      <section>
        <h2>5. Retention and biometric-data destruction</h2>
        <p>
          The submitted crop, biometric template, matched face thumbnails and result source
          links are permanently deleted no later than 30 days after the search. Earlier
          deletion is available through <a href="/legal/removal">Remove my photos</a>.
          PROMAI does not sell, lease or otherwise profit from biometric data itself.
        </p>
        <p>
          Account information is retained while the account remains active and for a
          limited period needed to resolve disputes or meet legal obligations. Payment,
          tax and accounting records are retained for the period required by law but do
          not contain searched faces or result thumbnails. Removal-verification material
          is deleted after the request and any appeal are completed, unless law requires
          preservation.
        </p>
      </section>

      <section>
        <h2>6. Service providers and disclosures</h2>
        <p>PROMAI discloses data only as needed to provide or protect the service:</p>
        <ul>
          <li>an approved index provider receives the selected crop to perform the search;</li>
          <li>hosting, security and authentication providers process technical and account data;</li>
          <li>the payment processor receives checkout and fraud-prevention information;</li>
          <li>support and email providers process messages a user chooses to send; and</li>
          <li>authorities or professional advisers receive information when required by law or necessary to protect legal rights.</li>
        </ul>
        <p>
          Providers are restricted by contract, security requirements and deletion
          instructions. PROMAI does not sell face-search data, disclose it to data brokers
          or provide submitted faces, results or source URLs to advertising platforms.
        </p>
      </section>

      <section>
        <h2>7. Index sources</h2>
        <p>
          PROMAI uses an index supplied by providers that must document their authority to
          process source images and support verified de-indexing. PROMAI does not use
          indiscriminate scraping to build or expand its own facial-recognition database.
          A verified removal instruction is sent to each relevant index provider.
        </p>
      </section>

      <section>
        <h2>8. Cookies and measurement</h2>
        <p>
          Essential cookies protect the service, maintain a session, remember a case and
          prevent duplicate transactions. Analytics or advertising cookies are used only
          with the notice and consent required in the visitor&apos;s location. PROMAI never
          places a submitted face, result image or result URL in an analytics or
          advertising event.
        </p>
      </section>

      <section>
        <h2>9. International transfers</h2>
        <p>
          PROMAI and its providers may process information in the United States and other
          countries. Where required, transfers rely on an adequacy decision, the EU–US
          Data Privacy Framework, standard contractual clauses or another lawful transfer
          mechanism.
        </p>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          PROMAI uses encryption in transit, access controls, rate limits, separated
          verification records, deletion jobs and audit logging appropriate to biometric
          data. Access is limited to personnel and providers who need it for an authorised
          purpose. No security measure can eliminate every risk.
        </p>
      </section>

      <section>
        <h2>11. Rights and choices</h2>
        <p>
          Depending on location, a person may request access, correction, deletion,
          restriction, portability or objection and may withdraw consent without affecting
          earlier lawful processing. A person may also complain to a competent data
          protection authority. Verified face de-indexing is free and does not require a
          purchase or account.
        </p>
        <p>
          Send a request to <a href="mailto:support@promai.app">support@promai.app</a>.
          PROMAI may request proportionate verification and will respond within the period
          required by applicable law.
        </p>
      </section>

      <section>
        <h2>12. Children and changes</h2>
        <p>
          PROMAI is not intended for anyone under 18. A minor&apos;s face may not be
          searched without clear legal authority. Material policy changes are dated and,
          where required, notified before taking effect or presented for renewed consent.
        </p>
      </section>
    </LegalPage>
  );
}
