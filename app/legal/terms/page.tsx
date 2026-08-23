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
      summary="These terms set the boundary for a lawful visual-similarity service: what PROMAI does, what it does not prove and the uses that are never allowed."
    >
      <section>
        <h2>1. What PROMAI is</h2>
        <p>
          PROMAI is designed to compare a face selected by a user with images from
          sources that the service is lawfully permitted to search. A result may include
          a visual-similarity score and a link to the public source where a similar image
          appears.
        </p>
        <p>
          PROMAI does not identify a person, verify a legal identity or certify that two
          photographs show the same individual. Every result is an investigative lead
          that requires independent human verification.
        </p>
      </section>

      <section>
        <h2>2. Who may use the service</h2>
        <p>
          You must be legally capable of accepting these terms and must comply with the
          laws that apply where you live and where the person in the photo is located.
          The service is not intended for children.
        </p>
      </section>

      <section>
        <h2>3. Allowed search purposes</h2>
        <p>You may submit a face only when at least one of these grounds applies:</p>
        <ul>
          <li>you are checking your own online photo footprint;</li>
          <li>the person shown has knowingly consented to the search;</li>
          <li>you are checking a suspected impersonation or fraud directed at you; or</li>
          <li>you have another documented and lawful basis for the specific search.</li>
        </ul>
        <p>
          When asked, you must truthfully select the purpose of the search and confirm
          that you have the right to use the submitted photo.
        </p>
      </section>

      <section>
        <h2>4. Uses that are forbidden</h2>
        <p>You must not use PROMAI to:</p>
        <ul>
          <li>stalk, harass, threaten, intimidate, blackmail or expose private details about anyone;</li>
          <li>reveal an anonymous person&apos;s identity merely because they chose to remain anonymous;</li>
          <li>identify people at protests, places of worship, health facilities, shelters or other sensitive locations;</li>
          <li>make employment, housing, credit, insurance, education, benefits or other eligibility decisions;</li>
          <li>create, enrich, sell or redistribute a database or profile of individuals;</li>
          <li>run bulk searches, automate queries, scrape results or bypass access controls;</li>
          <li>present a similarity score as proof of identity, wrongdoing or association; or</li>
          <li>violate privacy, publicity, copyright or other rights belonging to another person.</li>
        </ul>
      </section>

      <section>
        <h2>5. Similarity scores and accuracy</h2>
        <p>
          Image quality, age, pose, lighting, editing and natural resemblance can all
          produce missed or incorrect matches. A high score can still be wrong. You are
          responsible for checking the source, context and additional evidence before
          acting on a result.
        </p>
      </section>

      <section>
        <h2>6. Photos, results and privacy</h2>
        <p>
          The handling of search crops, result thumbnails, source links and technical
          records is described in the <a href="/legal/privacy">Privacy policy</a>. The
          current demo processes a local preview in the browser and sends no image to a
          search service.
        </p>
      </section>

      <section>
        <h2>7. Removal and complaints</h2>
        <p>
          A person may request free removal of their face from the PROMAI search index
          without purchasing a search or opening an account. The production verification
          and de-indexing process is described on the <a href="/legal/removal">Remove my photos</a> page.
        </p>
      </section>

      <section>
        <h2>8. Enforcement</h2>
        <p>
          PROMAI may rate-limit, suspend or permanently block access when a search appears
          unlawful, automated, deceptive or harmful. Where paid access is later offered,
          serious or repeated abuse may result in termination without a refund to the
          extent permitted by law.
        </p>
      </section>

      <section>
        <h2>9. Availability and changes</h2>
        <p>
          Search coverage can change when source pages disappear or an approved index
          provider updates its data. PROMAI does not promise complete web coverage,
          uninterrupted availability or a particular number of results. Material changes
          to these terms will be dated and displayed before they take effect.
        </p>
      </section>

      <section>
        <h2>10. Disclaimer and responsibility</h2>
        <p>
          To the extent permitted by law, the service is provided without a guarantee that
          any result is complete, accurate or suitable for a particular purpose. Nothing
          on PROMAI is legal advice, a background check or a consumer report. These terms
          do not exclude rights or remedies that cannot lawfully be excluded.
        </p>
      </section>
    </LegalPage>
  );
}
