import type { Metadata } from "next";
import LegalPage from "../legal/_components/LegalPage";

export const metadata: Metadata = {
  title: "About PROMAI",
  description: "What PROMAI visual-similarity search is designed to do and where its limits are.",
};

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="ABOUT"
      title="About PROMAI"
      updated="23 August 2026"
      summary="PROMAI is being designed as a privacy-first visual-similarity tool for personal footprint checks, consent-based verification and investigating suspected fraud directed at the user."
    >
      <section>
        <h2>1. One face, public-web visual leads</h2>
        <p>
          PROMAI compares a user-approved face crop with images from sources that a
          production service is lawfully permitted to search. It is intended to return
          visual-similarity scores and links to the pages where similar images appear.
        </p>
      </section>

      <section>
        <h2>2. A clue, not an identity</h2>
        <p>
          PROMAI does not name a person or certify that two photographs show the same
          individual. Lookalikes, image quality, lighting, age and editing can all affect
          a result. Every match must be checked against independent evidence and context.
        </p>
      </section>

      <section>
        <h2>3. Intended uses</h2>
        <ul>
          <li>checking where your own face appears online;</li>
          <li>running a search with the subject&apos;s informed consent;</li>
          <li>checking suspected impersonation or fraud directed at you; and</li>
          <li>another specific search supported by a documented lawful basis.</li>
        </ul>
      </section>

      <section>
        <h2>4. Where PROMAI draws the line</h2>
        <p>
          The service is not for stalking, harassment, doxxing, surveillance, protest
          monitoring, identity profiling or eligibility decisions. It is not a background
          check, a consumer report or a substitute for professional identity verification.
          The full restrictions appear in the <a href="/legal/terms">Terms of use</a>.
        </p>
      </section>

      <section>
        <h2>5. Privacy by design</h2>
        <p>
          The current demo does not upload a photo. Before live search is enabled, face
          selection must happen in the browser, only the approved crop may be transmitted,
          production biometric case data must expire within the published period, and free
          de-indexing must be operational. See the <a href="/legal/privacy">Privacy policy</a>.
        </p>
      </section>

      <section>
        <h2>6. Control over your face</h2>
        <p>
          A person will not need an account or payment to request exclusion from PROMAI
          search results. The difference between removing an index entry and removing the
          original webpage is explained in the <a href="/legal/removal">Removal policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
