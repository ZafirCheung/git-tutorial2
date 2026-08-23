import type { Metadata } from "next";
import LegalPage from "../legal/_components/LegalPage";

export const metadata: Metadata = {
  title: "About PROMAI",
  description: "What PROMAI visual-similarity search does, who operates it and where its limits are.",
};

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="ABOUT"
      title="About PROMAI"
      updated="23 August 2026"
      summary="PROMAI is a privacy-focused visual-similarity service for personal footprint checks, consent-based searches and investigating suspected impersonation or fraud."
    >
      <section>
        <h2>1. The service</h2>
        <p>
          PROMAI compares a face crop approved by the user with images available through
          sources that PROMAI and its index providers are permitted to process. Results
          may include similarity scores, thumbnails and links to the public pages where
          visually similar images appear.
        </p>
      </section>

      <section>
        <h2>2. A lead, not an identity decision</h2>
        <p>
          PROMAI does not certify that two photographs show the same person. Lookalikes,
          image quality, lighting, age, pose and editing can affect a result. Users must
          check every result against independent evidence and context before taking action.
        </p>
      </section>

      <section>
        <h2>3. Permitted purposes</h2>
        <ul>
          <li>checking where your own face appears online;</li>
          <li>searching with the informed consent of the person shown;</li>
          <li>investigating suspected impersonation or fraud directed at you; or</li>
          <li>another specific search supported by a documented lawful basis.</li>
        </ul>
      </section>

      <section>
        <h2>4. Prohibited purposes</h2>
        <p>
          PROMAI is not a surveillance, background-check, identity-monitoring or consumer
          reporting service. Stalking, harassment, doxxing, protest monitoring, identity
          profiling, bulk searching and eligibility decisions are prohibited. The complete
          restrictions appear in the <a href="/legal/terms">Terms of use</a>.
        </p>
      </section>

      <section>
        <h2>5. Privacy controls</h2>
        <p>
          Face detection and framing occur in the browser. Only the user-approved face crop
          is transmitted for a search, and biometric search-case data is deleted no later
          than 30 days after the search. Free de-indexing is available to people whose faces
          appear in results. See the <a href="/legal/privacy">Privacy policy</a>.
        </p>
      </section>

      <section>
        <h2>6. Operator and contact</h2>
        <p>
          PROMAI is operated by Ice Bear Media Inc, a Colorado corporation, at 5142 N
          Academy Blvd Unit 4322, Colorado Springs, CO 80918, USA. Questions, complaints
          and rights requests may be sent to{" "}
          <a href="mailto:support@promai.app">support@promai.app</a>.
        </p>
      </section>
    </LegalPage>
  );
}
