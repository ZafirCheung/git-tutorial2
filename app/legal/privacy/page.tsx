import type { Metadata } from "next";
import LegalPage from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | PROMAI",
  description: "How PROMAI handles face crops, search results and service data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="YOUR DATA"
      title="Privacy"
      updated="23 August 2026"
      summary="Face-search information can be biometric data. This policy states what the current demo does and the controls that must be active before production search is enabled."
    >
      <section>
        <h2>1. The photo-selection step</h2>
        <p>
          In the current demo, the file you choose is displayed through a temporary local
          browser URL. The file, its preview and the face-selection frame are not uploaded
          to PROMAI. Closing or refreshing the page ends that local preview.
        </p>
        <p>
          A production search will detect faces on the user&apos;s device and transmit only
          the face crop the user approves. The surrounding original image will not be sent
          to PROMAI or an index provider.
        </p>
      </section>

      <section>
        <h2>2. Information used for a production search</h2>
        <p>When live search is enabled, a search case may contain:</p>
        <ul>
          <li>the approved face crop;</li>
          <li>result thumbnails, similarity scores and source-page links;</li>
          <li>the user&apos;s selected lawful-purpose category;</li>
          <li>a random case or browser identifier; and</li>
          <li>limited security records needed for rate limiting and abuse review.</li>
        </ul>
        <p>
          PROMAI will not infer or append a name, home address, phone number or date of
          birth to a visual result.
        </p>
      </section>

      <section>
        <h2>3. How long search data remains</h2>
        <p>
          Production biometric case data — including the submitted crop, matched face
          thumbnails and result source links — will be permanently deleted no later than
          30 days after the search. PROMAI may retain a non-biometric case stub containing
          the date, result count, broad score range and processing status so that history
          screens can explain an expired case.
        </p>
        <p>
          Security and transaction records may be kept longer where necessary to prevent
          abuse, resolve a dispute or meet tax and accounting obligations. They must not
          contain the searched face or matched thumbnails.
        </p>
      </section>

      <section>
        <h2>4. Accounts and payments</h2>
        <p>
          The current demo has no account system or payment checkout. If either feature is
          introduced, the policy will identify the account and payment providers before
          data is collected. Complete card details will be entered directly with the
          payment processor and will not pass through PROMAI&apos;s servers. Purchase and
          renewal rules will also be published in the <a href="/legal/refunds">Refund
          policy</a> and <a href="/legal/subscriptions">Subscription policy</a>.
        </p>
      </section>

      <section>
        <h2>5. Website and security information</h2>
        <p>
          Hosting infrastructure may receive ordinary request data such as IP address,
          browser type, requested page and timestamp. Production may use a random,
          signed browser identifier and a salted IP hash to limit abuse. Raw IP addresses
          will not be attached to a face-search report by PROMAI.
        </p>
      </section>

      <section>
        <h2>6. Cookies and measurement</h2>
        <p>
          Essential cookies may be used to protect the service, maintain a session and
          prevent duplicate transactions. Any analytics or advertising measurement will
          be disclosed through the consent controls required in the visitor&apos;s location.
          PROMAI will not send a submitted face, result image or result URL to advertising
          platforms.
        </p>
      </section>

      <section>
        <h2>7. Service providers</h2>
        <p>Production data may be shared only with providers needed to deliver the requested service:</p>
        <ul>
          <li>an approved face-index provider receives the selected crop to run the search;</li>
          <li>hosting and security providers process technical requests and logs;</li>
          <li>a payment processor receives checkout and fraud-prevention information; and</li>
          <li>support providers receive information a user chooses to send in a support case.</li>
        </ul>
        <p>
          Providers must be contractually restricted to PROMAI&apos;s instructions, deletion
          schedule and security requirements. PROMAI will not sell face-search data or
          provide it to data brokers.
        </p>
      </section>

      <section>
        <h2>8. Faces appearing in the index</h2>
        <p>
          PROMAI will not launch a live search until it has documented the index source,
          the legal basis for processing and a method for propagating verified removal
          requests. PROMAI does not host the source webpages shown in results.
        </p>
      </section>

      <section>
        <h2>9. Your choices and rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete,
          restrict or receive a copy of personal data. A verified request to remove a face
          from search will be free and will not require a purchase. See
          the <a href="/legal/removal">removal procedure</a> for the distinction between
          deleting an index entry and removing the original webpage.
        </p>
      </section>

      <section>
        <h2>10. Security, children and updates</h2>
        <p>
          PROMAI will use access controls, encryption in transit, deletion jobs and audit
          logging appropriate to the sensitivity of biometric data. No security measure
          eliminates every risk. The service is not intended for children, and searches
          targeting minors are not permitted without a clear legal basis and appropriate
          authority. Policy changes will show a new effective date.
        </p>
      </section>
    </LegalPage>
  );
}
