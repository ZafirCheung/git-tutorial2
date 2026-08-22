"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const faqItems = [
  {
    question: "Does TraceLens identify a person?",
    answer:
      "No. TraceLens returns visually similar public-web images and a similarity score. A score is a lead to verify, never proof of identity.",
  },
  {
    question: "What happens to the photo I choose?",
    answer:
      "Face detection and framing happen in your browser. Only the face crop you approve is prepared for search; the original image is not retained by the service.",
  },
  {
    question: "Who is allowed to run a search?",
    answer:
      "You may search your own face, a person who has consented, or where you have another lawful basis such as checking a person you are directly dealing with for suspected fraud.",
  },
  {
    question: "Can a result be used for hiring or tenant screening?",
    answer:
      "No. TraceLens is not a consumer reporting agency and results may not be used for employment, tenancy, credit, insurance, benefits, or similar eligibility decisions.",
  },
];

const prohibitedUses = [
  "Stalking, harassment, threats or doxxing",
  "Employment, tenancy, credit or insurance decisions",
  "Building or reselling personal profile databases",
  "Identifying people at protests, worship or medical sites",
  "Automated, bulk or API-driven searches",
  "Treating a similarity score as proof of identity",
];

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [purpose, setPurpose] = useState("self");
  const [confirmed, setConfirmed] = useState(false);
  const [flowMessage, setFlowMessage] = useState("");
  const [removalMessage, setRemovalMessage] = useState("");

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function chooseFile(file?: File) {
    if (!file) return;
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
    setFileName(file.name);
    setFlowMessage("");
  }

  function loadDemo() {
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    setPreview("/og.png");
    setFileName("synthetic-demo-board.png");
    setPurpose("self");
    setFlowMessage("");
  }

  function prepareSearch() {
    if (!preview || !confirmed) return;
    setFlowMessage(
      "Prototype flow complete — the approved search index and payment backend would connect here.",
    );
  }

  function submitRemoval(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRemovalMessage(
      "Request captured in this prototype. Production would issue a case number and sync removal with the index provider.",
    );
  }

  return (
    <div className="site-shell">
      <div className="signal-bar">
        <span>PRIVACY-FIRST PUBLIC-WEB SIMILARITY SEARCH</span>
        <span className="signal-bar__right">30-DAY MAXIMUM RETENTION</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="TraceLens home">
          <span className="brand-mark" aria-hidden="true">
            TL
          </span>
          <span>TRACELENS</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#method">How it works</a>
          <a href="#safety">Safety</a>
          <a href="#scores">Read scores</a>
          <a className="remove-link" href="#remove">
            Remove me
          </a>
        </nav>
        <a className="header-cta" href="#search">
          Run a check <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Built for lawful, one-to-one checks
            </div>
            <p className="kicker">Before you trust the profile</p>
            <h1 id="hero-title">
              A face is a <span>clue.</span>
              <br />
              Not a verdict.
            </h1>
            <p className="hero-lead">
              Find visually similar public-web photos to check a suspicious
              profile, audit your own digital footprint, or investigate fraud
              against you.
            </p>
            <p className="hero-note">
              TraceLens does not tell you who someone is. It organizes visual
              leads, shows the score behind every match, and leaves the final
              judgment to you.
            </p>
            <div className="use-chips" aria-label="Permitted use examples">
              <span>Self-search</span>
              <span>Consent-based checks</span>
              <span>Fraud prevention</span>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>LOCAL</dt>
                <dd>face framing</dd>
              </div>
              <div>
                <dt>30 DAYS</dt>
                <dd>maximum case life</dd>
              </div>
              <div>
                <dt>0–100</dt>
                <dd>score, not identity</dd>
              </div>
            </dl>
          </div>

          <div className="search-wrap" id="search">
            <div className="case-label">CASE 001 · START HERE</div>
            <div className="search-card">
              <div className="search-card__topline">
                <span>PRIVATE SEARCH SETUP</span>
                <span className="encrypted">● DEVICE FIRST</span>
              </div>

              <button
                className={`drop-zone ${preview ? "drop-zone--ready" : ""}`}
                type="button"
                onClick={() => inputRef.current?.click()}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  chooseFile(event.dataTransfer.files?.[0]);
                }}
                aria-label="Choose a face photo"
              >
                {preview ? (
                  <>
                    <img src={preview} alt="Selected local preview" />
                    <span className="preview-frame" aria-hidden="true" />
                    <span className="replace-photo">Replace photo</span>
                  </>
                ) : (
                  <>
                    <span className="upload-glyph" aria-hidden="true">
                      ↑
                    </span>
                    <strong>Drop one clear photo</strong>
                    <small>or click to choose from your device</small>
                    <span className="format-row">JPG · PNG · WEBP · 10 MB</span>
                  </>
                )}
              </button>
              <input
                ref={inputRef}
                className="sr-only"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => chooseFile(event.target.files?.[0])}
              />

              <div className="demo-row">
                <span>{fileName || "Nothing selected"}</span>
                <button type="button" onClick={loadDemo}>
                  Use AI demo
                </button>
              </div>

              <label className="purpose-field">
                <span>Why are you searching?</span>
                <select
                  value={purpose}
                  onChange={(event) => setPurpose(event.target.value)}
                >
                  <option value="self">I am searching for myself</option>
                  <option value="consent">The person has consented</option>
                  <option value="fraud">I am checking suspected fraud against me</option>
                  <option value="right">I have another lawful basis</option>
                </select>
              </label>

              <label className="lawful-check">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(event) => setConfirmed(event.target.checked)}
                />
                <span>
                  I confirm this is a lawful, one-to-one search and will not be
                  used to harass, identify or make eligibility decisions about
                  anyone.
                </span>
              </label>

              <button
                type="button"
                className="primary-action"
                disabled={!preview || !confirmed}
                onClick={prepareSearch}
              >
                Prepare private search <span aria-hidden="true">→</span>
              </button>

              <p className="privacy-microcopy">
                Face framing happens in your browser. Only the crop you approve
                is prepared for search; this prototype uploads nothing.
              </p>
              <p className="flow-message" aria-live="polite">
                {flowMessage}
              </p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Privacy guarantees">
          <article>
            <span>01</span>
            <div>
              <strong>Detect locally</strong>
              <p>Your browser frames the face first.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <strong>Send the crop only</strong>
              <p>The original image never enters the case.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <strong>Delete on schedule</strong>
              <p>Biometric case data expires in 30 days.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <strong>Remove without paying</strong>
              <p>Free requests are synced to the index.</p>
            </div>
          </article>
        </section>

        <section className="demo-board section" aria-labelledby="demo-heading">
          <div className="section-heading">
            <span className="section-index">SYNTHETIC BOARD / 01</span>
            <h2 id="demo-heading">
              Show the product.
              <br />
              <em>Never expose a person.</em>
            </h2>
            <p>
              Every face used in this demonstration is computer-generated. No
              real person was searched, indexed, or used without permission.
            </p>
          </div>
          <figure className="demo-figure">
            <img
              src="/og.png"
              alt="TraceLens demonstration board with four AI-generated adult portraits"
            />
            <figcaption>
              <span>AI-GENERATED DEMO</span>
              Fictional portraits · no real search results
            </figcaption>
          </figure>
        </section>

        <section className="method section" id="method" aria-labelledby="method-heading">
          <div className="method-intro">
            <span className="section-index">THE METHOD / 02</span>
            <h2 id="method-heading">Three checkpoints before any result.</h2>
            <p>
              The experience is designed to slow down misuse and keep context
              attached to every search.
            </p>
          </div>
          <ol className="method-list">
            <li>
              <span className="step-number">01</span>
              <div className="step-mark" aria-hidden="true">⌁</div>
              <h3>Frame it locally</h3>
              <p>
                Choose one clear face. Local detection isolates the crop before
                the search service receives anything.
              </p>
              <small>ORIGINAL IMAGE: NOT RETAINED</small>
            </li>
            <li>
              <span className="step-number">02</span>
              <div className="step-mark" aria-hidden="true">✓</div>
              <h3>State your lawful reason</h3>
              <p>
                Select a permitted purpose and confirm the search is not for
                monitoring, doxxing or an eligibility decision.
              </p>
              <small>PURPOSE: RECORDED MINIMALLY</small>
            </li>
            <li>
              <span className="step-number">03</span>
              <div className="step-mark" aria-hidden="true">≈</div>
              <h3>Review visual leads</h3>
              <p>
                Similar images are ranked with transparent scores. You verify
                context; TraceLens never declares an identity.
              </p>
              <small>OUTPUT: CLUES, NOT A VERDICT</small>
            </li>
          </ol>
        </section>

        <section className="scores section" id="scores" aria-labelledby="scores-heading">
          <div className="score-copy">
            <span className="section-index section-index--dark">READ THE SCORE / 03</span>
            <h2 id="scores-heading">Similarity is a spectrum, not a green tick.</h2>
            <p>
              A score measures how alike two face crops appear to the model. It
              does not establish a name, relationship, intent or identity.
            </p>
            <div className="score-warning">
              <strong>Human verification required</strong>
              <span>Check multiple sources, dates and contextual details.</span>
            </div>
          </div>
          <div className="score-ladder" aria-label="Similarity score guide">
            <article>
              <div className="score-row"><strong>90–100</strong><span>Strong visual lead</span></div>
              <div className="meter"><i style={{ width: "96%" }} /></div>
              <p>Worth careful verification against additional sources.</p>
            </article>
            <article>
              <div className="score-row"><strong>83–89</strong><span>Possible visual lead</span></div>
              <div className="meter"><i style={{ width: "86%" }} /></div>
              <p>Look for a second result and matching context.</p>
            </article>
            <article>
              <div className="score-row"><strong>70–82</strong><span>Weak visual lead</span></div>
              <div className="meter"><i style={{ width: "72%" }} /></div>
              <p>Similar appearance; may be an unrelated person.</p>
            </article>
            <article>
              <div className="score-row"><strong>&lt; 70</strong><span>Low-confidence noise</span></div>
              <div className="meter"><i style={{ width: "48%" }} /></div>
              <p>Do not rely on it for any conclusion.</p>
            </article>
          </div>
        </section>

        <section className="safety section" id="safety" aria-labelledby="safety-heading">
          <div className="safety-title">
            <span className="section-index">THE SAFETY LINE / 04</span>
            <h2 id="safety-heading">Useful has a boundary.</h2>
            <p>
              These controls are part of the product—not small print added after
              the experience is designed.
            </p>
          </div>
          <div className="safety-grid">
            <article className="allowed-card">
              <span className="card-tag">PERMITTED</span>
              <h3>Search with a lawful basis</h3>
              <ul>
                <li>Your own digital footprint</li>
                <li>A person who has consented</li>
                <li>Someone directly contacting you in suspected fraud</li>
                <li>Another documented legal right</li>
              </ul>
            </article>
            <article className="blocked-card">
              <span className="card-tag">PROHIBITED</span>
              <h3>Never search to control a person</h3>
              <ul>
                {prohibitedUses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="remove-section" id="remove" aria-labelledby="remove-heading">
          <div className="remove-copy">
            <span className="section-index section-index--light">YOUR FACE, YOUR EXIT / 05</span>
            <h2 id="remove-heading">Found yourself? Leave the board.</h2>
            <p>
              Removal is free, does not require a paid account, and should be
              synchronized with the underlying index—not hidden behind a support
              ticket.
            </p>
            <div className="remove-promises">
              <span>FREE REQUEST</span>
              <span>HUMAN REVIEW</span>
              <span>CASE NUMBER</span>
            </div>
          </div>
          <form className="remove-form" onSubmit={submitRemoval}>
            <label>
              <span>Source page or result URL</span>
              <input type="url" placeholder="https://…" required />
            </label>
            <label>
              <span>Email for the case update</span>
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label className="removal-check">
              <input type="checkbox" required />
              <span>I am the person shown or their authorized representative.</span>
            </label>
            <button type="submit">Start removal request →</button>
            <p aria-live="polite">{removalMessage}</p>
          </form>
        </section>

        <section className="faq section" aria-labelledby="faq-heading">
          <div className="faq-title">
            <span className="section-index">BEFORE YOU SEARCH / 06</span>
            <h2 id="faq-heading">Questions worth asking first.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <span>ONE PHOTO · ONE PURPOSE · ONE EXPIRING CASE</span>
          <h2>Check the clue. Keep the context.</h2>
          <a href="#search">Prepare a lawful search →</a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand brand--footer" href="#top">
            <span className="brand-mark">TL</span>
            <span>TRACELENS</span>
          </a>
          <p>Visual leads for lawful checks. Never identity by decree.</p>
        </div>
        <div className="footer-links">
          <a href="#method">How it works</a>
          <a href="#safety">Acceptable use</a>
          <a href="#remove">Remove my photos</a>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
        <p className="legal-footer">
          TraceLens is not a consumer reporting agency and this service is not a
          consumer report. You may not use it to make decisions about employment,
          tenancy, credit, insurance, benefits, or any purpose governed by the
          Fair Credit Reporting Act. A similarity score is not proof of identity.
          Looking someone up never entitles you to contact, follow or harass them.
        </p>
        <p className="copyright">© 2026 TraceLens · Front-end concept</p>
      </footer>
    </div>
  );
}
