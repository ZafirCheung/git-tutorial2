"use client";

import { ChangeEvent, DragEvent, FormEvent, useEffect, useRef, useState } from "react";

const platforms = [
  "◎ Instagram",
  "♪ TikTok",
  "𝕏 X",
  "● Facebook",
  "in LinkedIn",
  "▶ YouTube",
  "P Pinterest",
  "● Reddit",
  "◉ Dating sites",
  "+ the open web",
];

const faceCards = ["p1", "p2", "p3", "p4", "p2", "p4", "p1", "p3", "p4", "p2"];

const faqItems = [
  {
    question: "What kind of photo actually works?",
    answer:
      "Use one clear, front-facing adult face with even light. Avoid sunglasses, heavy shadow and group photos. Crop to the person you are lawfully checking.",
  },
  {
    question: "What happens to the photo I upload?",
    answer:
      "Face framing is designed to happen in your browser. Only the crop you approve would be sent for a search; the original file is not retained by Promai.",
  },
  {
    question: "Is the search free?",
    answer:
      "This front-end is a product prototype and performs no live search or payment. A production plan would disclose the free preview, paid deliverables and refund rules before checkout.",
  },
  {
    question: "How accurate is it, honestly?",
    answer:
      "A result is a visual similarity lead, never identity proof. Lighting, age, angle and lookalikes all affect scores, so every result requires human verification.",
  },
  {
    question: "Can it find someone with no social media?",
    answer:
      "Only if a lawfully indexed public page contains a visually similar image. Promai does not promise complete web coverage and does not create an identity profile.",
  },
  {
    question: "Can I search for myself?",
    answer:
      "Yes. Personal footprint checks are a primary intended use, alongside consent-based checks and investigating suspected fraud directed at you.",
  },
  {
    question: "Is this legal?",
    answer:
      "Legality depends on your location, purpose, lawful basis and the source of indexed data. The service forbids stalking, harassment, doxxing, surveillance and eligibility decisions.",
  },
];

const comparisonRows = [
  ["Searches the face, not the file", "Yes — visual geometry", "Exact or near-exact copies"],
  ["Score on every result", "0–100, every time", "Usually none"],
  ["Public profile coverage", "Eligible sources only", "Varies by engine"],
  ["Finds cropped or filtered photos", "Designed to", "Often misses them"],
  ["Identity conclusion", "Never — leads only", "No conclusion"],
  ["Keeps your upload", "Maximum 30-day case life", "Depends on provider"],
];

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [purpose, setPurpose] = useState("self");
  const [confirmed, setConfirmed] = useState(false);
  const [flowMessage, setFlowMessage] = useState("");
  const [removeOpen, setRemoveOpen] = useState(false);
  const [removalMessage, setRemovalMessage] = useState("");

  useEffect(() => {
    function handlePaste(event: ClipboardEvent) {
      const image = Array.from(event.clipboardData?.files || []).find((file) =>
        file.type.startsWith("image/"),
      );
      if (image) chooseFile(image);
    }
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  });

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function chooseFile(file?: File) {
    if (!file || !file.type.startsWith("image/")) return;
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
    setFileName(file.name);
    setFlowMessage("");
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    chooseFile(event.target.files?.[0]);
  }

  function handleDrop(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    chooseFile(event.dataTransfer.files?.[0]);
  }

  function loadDemo() {
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    setPreview("/og-promai.png");
    setFileName("AI-generated demo board");
    setPurpose("self");
    setFlowMessage("");
  }

  function prepareSearch() {
    if (!preview || !confirmed) return;
    setFlowMessage(
      "Prototype ready. A production build would now send only the approved face crop to a lawfully sourced search index.",
    );
  }

  function submitRemoval(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRemovalMessage(
      "Request captured in this prototype. Production would issue a case number and sync the removal with every index provider.",
    );
  }

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Promai home">
          <span className="brand-face" aria-hidden="true">⌖</span>
          <span>PRO</span><strong>MAI</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#platforms">Platforms</a>
          <a href="#method">How it works</a>
          <a href="#faq">FAQ</a>
          <button type="button" onClick={() => setRemoveOpen(true)}>Remove me</button>
        </nav>
        <a className="header-cta" href="#search">Search a face</a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="floating-photo floating-photo--one" aria-hidden="true"><span className="portrait p3" /></div>
          <div className="floating-photo floating-photo--two" aria-hidden="true"><span className="portrait p2" /></div>
          <div className="floating-photo floating-photo--three" aria-hidden="true"><span className="portrait p4" /></div>

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="live-counter"><i /> REFERENCE UI · INDEX OFFLINE</div>
              <p className="kicker">Who is that, really?</p>
              <h1 id="hero-title">Find where a face<br /><mark>shows up.</mark></h1>
              <p className="hero-lead">One photo in. Relevant public-web visual leads out.</p>
              <p className="hero-body">
                <strong>Reverse face search</strong> for personal footprint checks, consent-based verification and suspected fraud. Promai compares the face — even when the source photo is different.
              </p>
              <p className="hero-note">A normal reverse image search looks for copies of a file. This concept looks for visual similarity and never claims to identify a person.</p>
              <div className="platform-pills" id="platforms" aria-label="Potential public web sources">
                {platforms.map((platform, index) => <span className={index === platforms.length - 1 ? "dark" : ""} key={platform}>{platform}</span>)}
              </div>
              <dl className="hero-stats">
                <div><dt>~25s</dt><dd>target sweep</dd></div>
                <div><dt>0–100</dt><dd>score on every lead</dd></div>
                <div><dt>30d</dt><dd>maximum case life</dd></div>
              </dl>
            </div>

            <div className="search-column" id="search">
              <div className="case-stamp">CASE OPEN</div>
              <div className="tape" aria-hidden="true" />
              <div className="search-card">
                <button
                  type="button"
                  className={`drop-zone ${preview ? "drop-zone--ready" : ""}`}
                  onClick={() => inputRef.current?.click()}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleDrop}
                  aria-label="Choose a face photo"
                >
                  {preview ? (
                    <>
                      <img src={preview} alt="Selected local preview" />
                      <span className="face-frame" aria-hidden="true" />
                      <span className="replace-photo">Replace photo</span>
                    </>
                  ) : (
                    <>
                      <small>START HERE</small>
                      <span className="upload-circle" aria-hidden="true">↥</span>
                      <strong>Drop a photo here</strong>
                      <p>Click to browse, drag one in, or just paste it</p>
                      <span className="format-list"><b>JPG</b><b>PNG</b><b>WEBP</b><b>10 MB MAX</b></span>
                    </>
                  )}
                </button>
                <input ref={inputRef} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={handleInput} />

                {preview && (
                  <div className="search-approval">
                    <div className="file-row"><span>{fileName}</span><button type="button" onClick={loadDemo}>Use AI demo</button></div>
                    <label>
                      <span>Lawful search reason</span>
                      <select value={purpose} onChange={(event) => setPurpose(event.target.value)}>
                        <option value="self">I am searching for myself</option>
                        <option value="consent">The person has consented</option>
                        <option value="fraud">I am checking suspected fraud against me</option>
                        <option value="other">I have another lawful basis</option>
                      </select>
                    </label>
                    <label className="lawful-check">
                      <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
                      <span>I confirm a lawful reason and will not use results for harassment, doxxing, surveillance or eligibility decisions.</span>
                    </label>
                    <button className="search-button" type="button" disabled={!confirmed} onClick={prepareSearch}>Prepare private search →</button>
                  </div>
                )}
              </div>
              <p className="upload-note">
                Your photo stays on your device until you press search. Only the face crop you approve is prepared for transfer. Continuing confirms a lawful reason to look this person up. <button type="button" onClick={loadDemo}>Try the AI demo.</button>
              </p>
              <p className="flow-message" aria-live="polite">{flowMessage}</p>
            </div>
          </div>
        </section>

        <section className="engine section-light" aria-labelledby="engine-title">
          <div className="content-width">
            <span className="section-tag dark-tag" id="engine-title">LIVE FROM THE PROTOTYPE</span>
            <div className="metric-grid">
              <article className="metric red"><strong>0</strong><h3>Uploads stored</h3><p>This front-end sends no photo anywhere.</p></article>
              <article className="metric"><strong>Browser</strong><h3>Face framing</h3><p>Crop selection is designed for the device.</p></article>
              <article className="metric yellow"><strong>0–100</strong><h3>Score range</h3><p>Similarity evidence, never an identity verdict.</p></article>
              <article className="metric"><strong>30d</strong><h3>Maximum case life</h3><p>Production biometric case data expires.</p></article>
            </div>
            <p className="metrics-note">Prototype numbers are product commitments, not fabricated performance claims. Live index size and speed would be shown only after independent measurement.</p>
          </div>
        </section>

        <section className="face-board" aria-labelledby="board-title">
          <div className="content-width board-heading">
            <span className="section-tag red-tag">THE BOARD</span>
            <h2 id="board-title">A face can appear on many boards.<br />The score still is not a name.</h2>
            <p>Public profiles, news photos, forum avatars and old pages — only from sources the index is lawfully allowed to process.</p>
          </div>
          <div className="portrait-strip" aria-label="Computer-generated demonstration portraits">
            {faceCards.map((portrait, index) => (
              <div className={`board-photo rotate-${(index % 5) + 1}`} key={`${portrait}-${index}`}>
                <span className={`portrait ${portrait}`} role="img" aria-label="AI-generated demonstration portrait" />
              </div>
            ))}
          </div>
          <p className="content-width illustration-note">Illustration only — every face above is computer-generated. None is a real person or a search result.</p>
        </section>

        <section className="method section-light" id="method" aria-labelledby="method-title">
          <div className="content-width">
            <span className="section-tag yellow-tag">THE METHOD</span>
            <h2 id="method-title">Three steps. No identity claims.<br />No hidden verdict.</h2>
            <div className="steps-grid">
              <article><span className="step-tab yellow">01</span><h3>Hand us the photo</h3><p>Choose one clear face. Frame it on your device and confirm you have a lawful, one-to-one reason to search.</p></article>
              <article><span className="step-tab green">02</span><h3>We work the file</h3><p>The approved crop becomes a mathematical signature and is compared with a lawfully sourced public-web index.</p></article>
              <article><span className="step-tab red">03</span><h3>You get visual leads</h3><p>Each match is ranked with a 0–100 similarity score and source link. You verify the evidence and make the call.</p></article>
            </div>
            <a className="outline-button" href="#scores">How the matching works →</a>
          </div>
        </section>

        <section className="scores" id="scores" aria-labelledby="scores-title">
          <div className="content-width scores-grid">
            <div>
              <span className="section-tag red-tag">READING THE SCORE</span>
              <h2 id="scores-title">It’s a number,<br />not a verdict.</h2>
              <p>Face similarity is not identity. Promai shows how visually similar two images are so you can weigh a lead, verify the source and avoid trusting a green tick.</p>
            </div>
            <div className="score-ladder">
              <article><div><span className="green-tag">STRONG MATCH</span><b>90–100</b></div><p>High visual similarity. Still verify with other independent evidence.</p></article>
              <article><div><span className="yellow-tag">LIKELY MATCH</span><b>83–89</b></div><p>Potentially the same person, but never rely on one result alone.</p></article>
              <article><div><span className="paper-tag">POSSIBLE MATCH</span><b>70–82</b></div><p>Could be lighting, age or a stranger who looks similar.</p></article>
              <article><div><span className="paper-tag">WEAK MATCH</span><b>UNDER 70</b></div><p>Shown for completeness, not as evidence of anything.</p></article>
            </div>
          </div>
        </section>

        <section className="cases" aria-labelledby="cases-title">
          <div className="content-width">
            <span className="section-tag paper-tag">OPEN CASES</span>
            <h2 id="cases-title">Everyone starts with<br />a different question.</h2>
            <div className="case-grid">
              <article><i /><span>THE DATE</span><h3>Check a suspicious profile before meeting</h3><p>Look for reused photos across unrelated accounts. Never treat a result as proof or permission to contact a third party.</p></article>
              <article><i /><span>THE MIRROR</span><h3>See where your own face ended up</h3><p>Audit your public footprint, then use the free removal path when an eligible source should be de-indexed.</p></article>
              <article><i /><span>THE CATFISH</span><h3>Spot a stolen profile picture</h3><p>Romance and marketplace scams reuse the same small set of photos. Visual leads can expose that pattern.</p></article>
              <article><i /><span>THE CONSENT CHECK</span><h3>Verify with the person involved</h3><p>Use a result to start a direct, respectful conversation — not to expose an anonymous person or build a dossier.</p></article>
            </div>
            <div className="line-card"><strong>Where the line is.</strong><span>Promai is for self-search, consent-based checks and fraud directed at you. Stalking, harassment, threats, doxxing, protest monitoring and identity profiling are forbidden.</span></div>
          </div>
        </section>

        <section className="comparison section-light" aria-labelledby="comparison-title">
          <div className="content-narrow">
            <span className="section-tag yellow-tag">WHY NOT JUST GOOGLE IT</span>
            <h2 id="comparison-title">Reverse <em>image</em> search finds the file.<br />Promai compares the face.</h2>
            <p className="comparison-intro">Normal reverse image search hunts for copies of the exact picture. Visual similarity compares facial geometry, so a different photo may still surface as a lead.</p>
            <div className="comparison-table" role="table" aria-label="Promai and reverse image search comparison">
              <div className="comparison-head" role="row"><span>WHAT IT DOES</span><span>PROMAI</span><span>REVERSE IMAGE SEARCH</span></div>
              {comparisonRows.map(([feature, ours, other]) => (
                <div className="comparison-row" role="row" key={feature}><strong>{feature}</strong><span className="ours">● {ours}</span><span>{other}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq section-light" id="faq" aria-labelledby="faq-title">
          <div className="content-narrow faq-inner">
            <span className="section-tag yellow-tag">INTERROGATION ROOM</span>
            <h2 id="faq-title">Everything people ask<br />before they hit search.</h2>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="final-cta" aria-labelledby="final-title">
          <div className="cta-paper">
            <span className="cta-pin" aria-hidden="true" />
            <h2 id="final-title">One photo is usually<br /><em>all it takes.</em></h2>
            <p>No live index is connected yet. Try the private, no-upload prototype flow.</p>
            <a href="#search">Search a face →</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-face">⌖</span><span>PRO</span><strong>MAI</strong></a><p>A face is a clue. Never a verdict.</p></div>
          <div><h3>THE GOODS</h3><a href="#search">Search a face</a><a href="#platforms">Search sources</a><a href="#method">How it works</a><a href="#scores">How scores work</a><a href="#faq">FAQ</a></div>
          <div><h3>SMALL PRINT</h3><a href="#top">About Promai</a><a href="#top">Terms of use</a><a href="#top">Privacy</a><button type="button" onClick={() => setRemoveOpen(true)}>Remove my photos</button></div>
        </div>
        <div className="content-width legal-copy">
          <p>Promai is not a consumer reporting agency and this service is not a consumer report. You may not use it to make decisions about employment, tenancy, credit, insurance, benefits or any other purpose covered by the Fair Credit Reporting Act or similar law. Looking someone up does not entitle you to contact, follow or harass them.</p>
          <span>© 2026 PROMAI · CONCEPT PROTOTYPE</span>
        </div>
      </footer>

      {removeOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setRemoveOpen(false)}>
          <section className="remove-modal" role="dialog" aria-modal="true" aria-labelledby="remove-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close removal form" onClick={() => setRemoveOpen(false)}>×</button>
            <span className="section-tag red-tag">FREE REMOVAL</span>
            <h2 id="remove-title">Remove me.</h2>
            <p>Request de-indexing without buying a search. Production would verify the request and forward it to the index provider.</p>
            <form onSubmit={submitRemoval}>
              <label>Email for case updates<input type="email" name="email" required placeholder="you@example.com" /></label>
              <label>Public source URL<input type="url" name="url" required placeholder="https://example.com/photo" /></label>
              <label>Request details<textarea name="details" rows={3} required placeholder="Tell us what should be removed and why." /></label>
              <button type="submit">Submit free removal →</button>
            </form>
            <p className="removal-message" aria-live="polite">{removalMessage}</p>
          </section>
        </div>
      )}
    </div>
  );
}
