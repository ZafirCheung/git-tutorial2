/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Remove My Photos | PROMAI",
  description: "Free process for requesting removal from the PROMAI face-search index.",
};

export default function RemovalPage() {
  return (
    <LegalPage
      eyebrow="YOUR FACE"
      title="Remove my photos"
      updated="23 August 2026"
      summary="Anyone may request free removal of their face from PROMAI search results. No subscription, purchase or account is required."
    >
      <section>
        <h2>1. Source removal and index removal</h2>
        <ul>
          <li>
            <strong>The original webpage.</strong> PROMAI does not control the public page
            linked in a result. Only its publisher, platform or hosting provider can remove
            that source from the internet.
          </li>
          <li>
            <strong>The search index.</strong> PROMAI can exclude a verified face from the
            index used for its results. De-indexing prevents the relevant entries from
            appearing through PROMAI even if the source page remains online.
          </li>
        </ul>
      </section>

      <section id="request">
        <h2>2. Submit a free request</h2>
        <p>
          Open the <a href="/#remove-me">removal form</a> or email{" "}
          <a href="mailto:support@promai.app">support@promai.app</a> with the subject
          &quot;PROMAI removal request&quot;. Include known result or source URLs when
          available. PROMAI acknowledges the request and assigns a case reference.
        </p>
        <p>
          Removal is free and does not require payment, a paid search or a PROMAI account.
        </p>
      </section>

      <section>
        <h2>3. Verification</h2>
        <p>To prevent fraudulent deletion requests, PROMAI may request:</p>
        <ul>
          <li>a clear current image showing the requester&apos;s face;</li>
          <li>a simple liveness or dated verification step;</li>
          <li>authority to act when submitting for another person; and</li>
          <li>an email address used for request updates.</li>
        </ul>
        <p>
          Verification material is separated from search data, used only to decide the
          request and deleted after the request and any appeal are complete, unless law
          requires a longer period.
        </p>
      </section>

      <section>
        <h2>4. Processing</h2>
        <ol>
          <li>PROMAI acknowledges the request and provides a case reference.</li>
          <li>A reviewer verifies that the requester is entitled to act for the face shown.</li>
          <li>Matching entries are located and removal instructions are sent to relevant index providers.</li>
          <li>PROMAI checks the result and confirms completion or requests limited additional information.</li>
        </ol>
        <p>
          PROMAI normally completes an ordinary verified request within five business days.
          Complex or disputed cases may take longer; the requester receives a status update
          and all requests are completed within the period required by applicable law.
        </p>
      </section>

      <section>
        <h2>5. Removing the original page</h2>
        <p>
          De-indexing does not erase the original post. Contact the source website or
          platform if the photo violates its policies or your rights. Its copyright,
          impersonation, privacy or non-consensual-image reporting process may apply.
        </p>
      </section>

      <section>
        <h2>6. Search-case deletion</h2>
        <p>
          A submitted crop, matched thumbnails and source links are automatically deleted
          no later than 30 days after a search. A user may request earlier case deletion by
          emailing <a href="mailto:support@promai.app">support@promai.app</a>.
        </p>
      </section>

      <section>
        <h2>7. Appeals and abuse</h2>
        <p>
          If PROMAI cannot verify a request, the requester may provide alternative evidence
          for review. PROMAI may reject forged, automated or malicious requests and retain
          limited security evidence where necessary to protect another person or comply
          with law.
        </p>
      </section>
    </LegalPage>
  );
}
