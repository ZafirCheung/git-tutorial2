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
      summary="Removal from a search index and removal from the original website are different actions. This page explains both and keeps index removal free."
    >
      <section>
        <h2>1. Two places a photo may exist</h2>
        <ul>
          <li>
            <strong>The original webpage.</strong> PROMAI does not host the public page
            linked in a search result. Only the website owner, platform or hosting provider
            can remove that source from the internet.
          </li>
          <li>
            <strong>The search index.</strong> A verified face can be excluded from the
            index used by PROMAI. De-indexing prevents PROMAI searches from returning the
            entry, even if the original page remains online.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Free de-indexing</h2>
        <p>
          A production removal request will be free. It will not require a subscription,
          purchase or prior PROMAI search. The requester will receive a case number and a
          confirmation after the verified entries have been excluded from PROMAI results.
        </p>
        <p>
          The form on this prototype demonstrates the proposed fields only; it currently
          sends and stores nothing.
        </p>
        <p><a className="legal-action" href="/#remove-me">Open the demo removal form →</a></p>
      </section>

      <section>
        <h2>3. Information needed to verify a request</h2>
        <p>To prevent one person from deleting another person&apos;s results, production may request:</p>
        <ul>
          <li>a clear current image showing the requester&apos;s face;</li>
          <li>a simple liveness or dated verification step;</li>
          <li>known result or source URLs, when available; and</li>
          <li>an email address used only for case updates.</li>
        </ul>
        <p>
          Verification material will be isolated from search data, used only to decide the
          request and deleted after the request and any appeal are complete.
        </p>
      </section>

      <section>
        <h2>4. What happens next</h2>
        <ol>
          <li>PROMAI acknowledges the request and assigns a case number.</li>
          <li>A reviewer verifies that the requester is entitled to act for the face shown.</li>
          <li>Matching index entries are located and a removal instruction is sent to every relevant index provider.</li>
          <li>The result is checked and the requester receives confirmation or a request for limited additional information.</li>
        </ol>
        <p>
          PROMAI&apos;s production target will be to complete ordinary verified requests within
          five business days. Complex or disputed cases may take longer, and the requester
          will receive a status update rather than silence.
        </p>
      </section>

      <section>
        <h2>5. Removing the source page</h2>
        <p>
          De-indexing does not erase the original internet post. Contact the source website
          or platform if the photo violates its rules or your legal rights. Depending on
          the situation, its copyright, impersonation, privacy or non-consensual-image
          reporting route may be appropriate.
        </p>
      </section>

      <section>
        <h2>6. Deleting your own searches</h2>
        <p>
          The current prototype does not transmit or store searches. In production, the
          selected crop, result thumbnails and source links will expire automatically no
          later than 30 days after a search. An earlier deletion control will be available
          for active cases.
        </p>
      </section>

      <section>
        <h2>7. Appeals and abusive requests</h2>
        <p>
          If PROMAI cannot verify a request, the requester may provide alternative evidence
          through an appeal. PROMAI may reject forged, automated or malicious requests and
          may preserve limited security evidence where necessary to protect another person
          or comply with law.
        </p>
      </section>
    </LegalPage>
  );
}
