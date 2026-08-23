"use client";

import { ChangeEvent, DragEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRedditAlien,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const platforms = [
  { label: "Instagram", Icon: FaInstagram },
  { label: "TikTok", Icon: FaTiktok },
  { label: "X", Icon: FaXTwitter },
  { label: "Facebook", Icon: FaFacebookF },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "YouTube", Icon: FaYoutube },
  { label: "Pinterest", Icon: FaPinterestP },
  { label: "Reddit", Icon: FaRedditAlien },
  { label: "Dating sites", Icon: FaHeart },
];

const faceCards = ["p1", "p2", "p3", "p4", "p2", "p4", "p1", "p3", "p4", "p2"];

const subscriptionPlans = [
  {
    badge: "Most popular",
    name: "Weekly",
    price: "$12.99",
    interval: "/week",
    summary: "5 searches per week",
    features: [
      "5 face searches every week",
      "Every match with its source link",
      "Confidence score on every result",
      "Cancel anytime",
    ],
  },
  {
    badge: "Best value",
    name: "Unlimited Annual",
    price: "$79.99",
    interval: "/year",
    summary: "$6.67 a month, billed yearly",
    savings: "Save 88%",
    features: [
      "Unlimited face searches",
      "Every match with its source link",
      "Confidence score on every result",
      "Priority queue on the index",
      "Fair use: 250 searches a year",
    ],
  },
];

const oneTimePacks = [
  { searches: "1 search", price: "$4.99", perSearch: "$4.99 a search" },
  { searches: "5 searches", price: "$17.99", perSearch: "$3.60 a search", savings: "Save 28%" },
  { searches: "10 searches", price: "$29.99", perSearch: "$3.00 a search", savings: "Save 40%", badge: "Most popular" },
  { searches: "20 searches", price: "$47.99", perSearch: "$2.40 a search", savings: "Save 52%" },
];

type PricingView = "subscriptions" | "packs" | "offer";

const RETENTION_OFFER_DURATION_MS = 10 * 60 * 1000;
const RETENTION_OFFER_STORAGE_KEY = "promai-retention-offer-expires-at";

const faqItems = [
  {
    question: "What kind of photo actually works?",
    answer:
      "Use one clear, front-facing adult face with even light. Avoid sunglasses, heavy shadow and group photos. Crop to the person you are lawfully checking.",
  },
  {
    question: "What happens to the photo I upload?",
    answer:
      "Face framing happens in your browser. Only the crop you approve is sent for a search; the surrounding original file is not retained by PROMAI.",
  },
  {
    question: "Is the search free?",
    answer:
      "The index search and matched photographs are free to review. Opening the exact profile or source page requires a paid weekly or annual plan, or a one-time search pack. Every price and renewal term is shown before checkout.",
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
  const [pricingOpen, setPricingOpen] = useState(false);
  const [pricingView, setPricingView] = useState<PricingView>("subscriptions");
  const [selectedSubscription, setSelectedSubscription] = useState("Weekly");
  const [selectedPack, setSelectedPack] = useState("1 search");
  const [retentionShown, setRetentionShown] = useState(false);
  const [offerExpiresAt, setOfferExpiresAt] = useState<number | null>(null);
  const [offerRemainingSeconds, setOfferRemainingSeconds] = useState(10 * 60);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const activeSubscription =
    subscriptionPlans.find((plan) => plan.name === selectedSubscription) ?? subscriptionPlans[0];
  const activePack = oneTimePacks.find((pack) => pack.searches === selectedPack) ?? oneTimePacks[0];
  const offerMinutes = String(Math.floor(offerRemainingSeconds / 60)).padStart(2, "0");
  const offerSeconds = String(offerRemainingSeconds % 60).padStart(2, "0");
  const offerExpired = offerRemainingSeconds <= 0;

  const showRetentionOffer = useCallback(() => {
    const now = Date.now();
    const storedExpiry = Number(window.sessionStorage.getItem(RETENTION_OFFER_STORAGE_KEY));

    if (Number.isFinite(storedExpiry) && storedExpiry > 0 && storedExpiry <= now) {
      setPricingOpen(false);
      return;
    }

    const expiresAt = Number.isFinite(storedExpiry) && storedExpiry > now
      ? storedExpiry
      : now + RETENTION_OFFER_DURATION_MS;

    window.sessionStorage.setItem(RETENTION_OFFER_STORAGE_KEY, String(expiresAt));
    setOfferExpiresAt(expiresAt);
    setOfferRemainingSeconds(Math.max(0, Math.ceil((expiresAt - now) / 1000)));
    setRetentionShown(true);
    setPricingView("offer");
    setCheckoutMessage("");
  }, []);

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

  useEffect(() => {
    if (!pricingOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (pricingView !== "offer" && !retentionShown) {
        showRetentionOffer();
      } else {
        setPricingOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [pricingOpen, pricingView, retentionShown, showRetentionOffer]);

  useEffect(() => {
    if (!pricingOpen || pricingView !== "offer" || !offerExpiresAt) return;

    function updateCountdown() {
      setOfferRemainingSeconds(Math.max(0, Math.ceil((offerExpiresAt! - Date.now()) / 1000)));
    }

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, [pricingOpen, pricingView, offerExpiresAt]);

  useEffect(() => {
    function openRemovalFromHash() {
      if (window.location.hash === "#remove-me") setRemoveOpen(true);
    }
    openRemovalFromHash();
    window.addEventListener("hashchange", openRemovalFromHash);
    return () => window.removeEventListener("hashchange", openRemovalFromHash);
  }, []);

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
      "Search request prepared. Only the approved face crop is used for the lawful similarity search; the surrounding original image is not retained.",
    );
  }

  function openPricing(view: PricingView = "subscriptions", selection?: string) {
    setPricingView(view);
    if (view === "subscriptions" && selection) setSelectedSubscription(selection);
    if (view === "packs" && selection) setSelectedPack(selection);
    setRetentionShown(false);
    setCheckoutMessage("");
    setPricingOpen(true);
  }

  function requestClosePricing() {
    if (pricingView !== "offer" && !retentionShown) {
      showRetentionOffer();
      return;
    }
    setPricingOpen(false);
  }

  function previewCheckout() {
    setCheckoutMessage(
      "Checkout is not connected in this front-end demo. The selected plan, total price and renewal terms will be confirmed before payment.",
    );
  }

  function submitRemoval(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    const url = String(data.get("url") || "");
    const details = String(data.get("details") || "");
    const subject = encodeURIComponent("PROMAI removal request");
    const body = encodeURIComponent(
      `Requester email: ${email}\nPublic source URL: ${url}\n\nRequest details:\n${details}`,
    );
    window.location.href = `mailto:support@promai.app?subject=${subject}&body=${body}`;
    setRemovalMessage("Your email application is opening with the removal request.");
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
          <button type="button" onClick={() => openPricing()}>Price</button>
          <button type="button" onClick={() => setRemoveOpen(true)}>Remove me</button>
          <a href="/account">Account</a>
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
              <div className="live-counter"><i /> PRIVACY-FIRST · LAWFUL USE ONLY</div>
              <p className="kicker">Who is that, really?</p>
              <h1 id="hero-title">Find where a face<br /><mark>shows up.</mark></h1>
              <p className="hero-lead">One photo in. Relevant public-web visual leads out.</p>
              <p className="hero-body">
                <strong>Reverse face search</strong> for personal footprint checks, consent-based verification and suspected fraud. Promai compares the face — even when the source photo is different.
              </p>
              <p className="hero-note">A normal reverse image search looks for copies of a file. PROMAI looks for visual similarity and never claims to identify a person.</p>
              <div className="platform-pills" id="platforms" aria-label="Potential public web sources">
                {platforms.map(({ label, Icon }) => (
                  <span key={label}><Icon aria-hidden="true" />{label}</span>
                ))}
                <span className="dark"><b className="platform-plus" aria-hidden="true">+</b>the open web</span>
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
                    <div className="file-row"><span>{fileName}</span><button type="button" onClick={loadDemo}>Use AI sample</button></div>
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
                Your photo stays on your device until you press search. Only the face crop you approve is prepared for transfer. Continuing confirms a lawful reason to look this person up. <button type="button" onClick={loadDemo}>Try an AI-generated sample.</button>
              </p>
              <p className="flow-message" aria-live="polite">{flowMessage}</p>
            </div>
          </div>
        </section>

        <section className="engine section-light" aria-labelledby="engine-title">
          <div className="content-width">
            <span className="section-tag dark-tag" id="engine-title">SEARCH COMMITMENTS</span>
            <div className="metric-grid">
              <article className="metric red"><strong>0</strong><h3>Uploads stored</h3><p>This front-end sends no photo anywhere.</p></article>
              <article className="metric"><strong>Browser</strong><h3>Face framing</h3><p>Crop selection is designed for the device.</p></article>
              <article className="metric yellow"><strong>0–100</strong><h3>Score range</h3><p>Similarity evidence, never an identity verdict.</p></article>
              <article className="metric"><strong>30d</strong><h3>Maximum case life</h3><p>Biometric search-case data expires.</p></article>
            </div>
            <p className="metrics-note">Index coverage and processing time vary by source availability, image quality and traffic. PROMAI does not guarantee a match or minimum result count.</p>
          </div>
        </section>

        <section className="face-board" aria-labelledby="board-title">
          <div className="content-width board-heading">
            <span className="section-tag red-tag">THE BOARD</span>
            <h2 id="board-title">A face can appear on many boards.<br />The score still is not a name.</h2>
            <p>Public profiles, news photos, forum avatars and old pages — only from sources the index is lawfully allowed to process.</p>
          </div>
          <div
            className="portrait-marquee"
            role="img"
            aria-label="A continuously scrolling row of computer-generated demonstration portraits"
          >
            <div className="portrait-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="portrait-strip" key={copy}>
                  {faceCards.map((portrait, index) => (
                    <div className={`board-photo rotate-${(index % 5) + 1}`} key={`${copy}-${portrait}-${index}`}>
                      <span className={`portrait ${portrait}`} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
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

        <section className="pricing" id="pricing" aria-labelledby="pricing-title">
          <div className="content-width">
            <div className="pricing-heading">
              <span className="section-tag yellow-tag">PRICE</span>
              <h2 id="pricing-title">Search free.<br />Pay to reveal sources.</h2>
              <p>
                Review real, unblurred match photographs at no charge. A paid plan unlocks
                the exact profile and source-page links behind every match.
              </p>
              <button className="pricing-launch" type="button" onClick={() => openPricing()}>
                Compare subscriptions &amp; one-time packs →
              </button>
            </div>

            <div className="pricing-group" aria-labelledby="subscription-title">
              <div className="pricing-group-heading">
                <div>
                  <span>RECURRING PLANS</span>
                  <h3 id="subscription-title">Subscribe and keep searching.</h3>
                </div>
                <p>Subscriptions renew until cancelled. Unlocked reports stay yours.</p>
              </div>
              <div className="subscription-grid">
                {subscriptionPlans.map((plan) => (
                  <article className={`price-card price-card--subscription ${plan.name === "Unlimited Annual" ? "price-card--featured" : ""}`} key={plan.name}>
                    <span className="price-badge">{plan.badge}</span>
                    <p className="price-name">{plan.name}</p>
                    <div className="price-line"><strong>{plan.price}</strong><span>{plan.interval}</span></div>
                    {plan.savings ? <p className="price-savings">{plan.savings}</p> : null}
                    <p className="price-summary">{plan.summary}</p>
                    <ul>
                      {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <button className="price-choice-button" type="button" onClick={() => openPricing("subscriptions", plan.name)}>
                      Choose {plan.name} →
                    </button>
                  </article>
                ))}
              </div>
            </div>

            <div className="pricing-group pricing-group--packs" aria-labelledby="packs-title">
              <div className="pricing-group-heading">
                <div>
                  <span>NO SUBSCRIPTION</span>
                  <h3 id="packs-title">Buy the searches outright.</h3>
                </div>
                <p>Charged once. Nothing renews. Unused searches do not expire.</p>
              </div>
              <div className="pack-grid">
                {oneTimePacks.map((pack) => (
                  <article className={`price-card price-card--pack ${pack.badge ? "price-card--popular" : ""}`} key={pack.searches}>
                    {pack.badge ? <span className="price-badge">{pack.badge}</span> : null}
                    <p className="price-name">{pack.searches}</p>
                    <div className="price-line"><strong>{pack.price}</strong></div>
                    {pack.savings ? <p className="price-savings">{pack.savings}</p> : null}
                    <p className="price-summary">{pack.perSearch}</p>
                    <ul>
                      <li>{pack.searches.replace("search", "full face search")}</li>
                      <li>Every match with its source link</li>
                      <li>Searches never expire</li>
                    </ul>
                    <button className="price-choice-button" type="button" onClick={() => openPricing("packs", pack.searches)}>
                      Choose {pack.searches} →
                    </button>
                  </article>
                ))}
              </div>
            </div>

            <p className="pricing-legal">
              Prices are in US dollars and exclude taxes that may apply. The annual plan is
              marketed as unlimited subject to a disclosed fair-use allowance of 250 searches
              per annual term. See the <a href="/legal/subscriptions">Subscription policy</a> and
              <a href="/legal/refunds"> Refund policy</a> before purchase.
            </p>
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
            <p>Choose a clear face, confirm a lawful purpose and review visual-similarity leads.</p>
            <a href="#search">Search a face →</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-grid">
          <div><a className="brand footer-brand" href="#top"><span className="brand-face">⌖</span><span>PRO</span><strong>MAI</strong></a><p>A face is a clue. Never a verdict.</p></div>
          <div><h3>THE GOODS</h3><a href="#search">Search a face</a><a href="#platforms">Search sources</a><a href="#method">How it works</a><a href="#scores">How scores work</a><button type="button" onClick={() => openPricing()}>Price</button><a href="/account">Account</a><a href="#faq">FAQ</a></div>
          <div><h3>SMALL PRINT</h3><a href="/about">About PROMAI</a><a href="/legal/terms">Terms of use</a><a href="/legal/privacy">Privacy</a><a href="/legal/refunds">Refund policy</a><a href="/legal/subscriptions">Subscription policy</a><a href="/legal/removal#request">Remove my photos</a></div>
        </div>
        <div className="content-width legal-copy">
          <p>PROMAI is not a consumer reporting agency and this service is not a consumer report. You may not use it to make decisions about employment, tenancy, credit, insurance, benefits or any other purpose covered by the Fair Credit Reporting Act or similar law. Looking someone up does not entitle you to contact, follow or harass them.</p>
          <span>© 2026 PROMAI · Operated by Ice Bear Media Inc · <a href="mailto:support@promai.app">support@promai.app</a></span>
        </div>
      </footer>

      {pricingOpen && (
        <div className="modal-backdrop pricing-backdrop">
          <button className="modal-dismiss-layer" type="button" aria-label="Close pricing" onClick={requestClosePricing} />
          <section className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
            <span className="checkout-grab" aria-hidden="true" />
            <header className="checkout-modal-header">
              <div>
                <span className="checkout-eyebrow">
                  {pricingView === "subscriptions" ? "SOURCE PAGES LOCKED" : pricingView === "packs" ? "NO SUBSCRIPTION" : "LIMITED-TIME OFFER"}
                </span>
                <h2 id="checkout-title">
                  {pricingView === "subscriptions" ? "See who posted every match." : pricingView === "packs" ? "Buy the searches outright." : "One face, one price."}
                </h2>
              </div>
              <button className="checkout-close" type="button" aria-label="Close pricing" onClick={requestClosePricing}>×</button>
            </header>

            <div className="checkout-modal-body">
              <p className="checkout-intro">
                The match photographs are free to review. A paid option reveals the exact
                public source page behind every match in the purchased search report.
              </p>

              {pricingView === "subscriptions" && (
                <div className="checkout-plan-list" role="radiogroup" aria-label="Subscription plans">
                  {subscriptionPlans.map((plan) => (
                    <button
                      className={`checkout-plan ${selectedSubscription === plan.name ? "checkout-plan--selected" : ""}`}
                      type="button"
                      role="radio"
                      aria-checked={selectedSubscription === plan.name}
                      onClick={() => { setSelectedSubscription(plan.name); setCheckoutMessage(""); }}
                      key={plan.name}
                    >
                      <span className="checkout-radio" aria-hidden="true" />
                      <span className="checkout-plan-copy">
                        <span className="checkout-plan-title">{plan.name}<em>{plan.badge}</em></span>
                        <small>{plan.name === "Weekly" ? plan.summary : "Fair use: 250 searches per year"}</small>
                      </span>
                      <span className="checkout-plan-price"><strong>{plan.price}</strong><small>{plan.interval}</small></span>
                    </button>
                  ))}
                </div>
              )}

              {pricingView === "packs" && (
                <div className="checkout-plan-list" role="radiogroup" aria-label="One-time search packs">
                  {oneTimePacks.map((pack) => (
                    <button
                      className={`checkout-plan ${selectedPack === pack.searches ? "checkout-plan--selected" : ""}`}
                      type="button"
                      role="radio"
                      aria-checked={selectedPack === pack.searches}
                      onClick={() => { setSelectedPack(pack.searches); setCheckoutMessage(""); }}
                      key={pack.searches}
                    >
                      <span className="checkout-radio" aria-hidden="true" />
                      <span className="checkout-plan-copy">
                        <span className="checkout-plan-title">{pack.searches}{pack.badge ? <em>{pack.badge}</em> : null}</span>
                        <small>{pack.perSearch} · Never expires</small>
                      </span>
                      <span className="checkout-plan-price"><strong>{pack.price}</strong></span>
                    </button>
                  ))}
                </div>
              )}

              {pricingView === "offer" && (
                <div className="checkout-offer">
                  <p>Before you go: eligible customers can unlock one source-enabled search at this reduced price. No subscription and no automatic renewal.</p>
                  <div className="checkout-countdown" role="timer" aria-label={`${offerMinutes} minutes and ${offerSeconds} seconds remaining`}>
                    <span>This price holds for</span>
                    <div>
                      <span><strong>{offerMinutes}</strong><small>MIN</small></span>
                      <b aria-hidden="true">:</b>
                      <span><strong>{offerSeconds}</strong><small>SEC</small></span>
                    </div>
                  </div>
                  <div className={`checkout-plan checkout-plan--selected ${offerExpired ? "checkout-plan--expired" : ""}`}>
                    <span className="checkout-radio" aria-hidden="true" />
                    <span className="checkout-plan-copy">
                      <span className="checkout-plan-title">Just one search<em>Eligible offer</em></span>
                      <small><s>$4.99</s> · Save 40% · 1 source-enabled face search</small>
                    </span>
                    <span className="checkout-plan-price"><strong>$2.99</strong></span>
                  </div>
                  {offerExpired ? <p className="checkout-expired">This one-time offer has expired.</p> : null}
                </div>
              )}
            </div>

            <footer className="checkout-modal-footer">
              <button className="checkout-primary" type="button" onClick={previewCheckout} disabled={pricingView === "offer" && offerExpired}>
                {pricingView === "offer" && offerExpired ? "Offer expired" : `Reveal sources · ${pricingView === "subscriptions" ? `${activeSubscription.price}${activeSubscription.interval}` : pricingView === "packs" ? activePack.price : "$2.99"} →`}
              </button>
              {pricingView === "subscriptions" ? (
                <button className="checkout-switch" type="button" onClick={() => { setPricingView("packs"); setCheckoutMessage(""); }}>See one-time search packs</button>
              ) : pricingView === "packs" ? (
                <button className="checkout-switch" type="button" onClick={() => { setPricingView("subscriptions"); setCheckoutMessage(""); }}>See subscription plans</button>
              ) : (
                <button className="checkout-switch" type="button" onClick={() => setPricingOpen(false)}>Not now</button>
              )}
              <p className="checkout-message" aria-live="polite">{checkoutMessage}</p>
              <p className="checkout-fine-print">
                Prices are in USD before applicable tax. Recurring plans renew until cancelled.
                One-time packs and eligible offers do not renew. See our <a href="/legal/subscriptions">billing terms</a> and <a href="/legal/refunds">refund policy</a>.
              </p>
            </footer>
          </section>
        </div>
      )}

      {removeOpen && (
        <div className="modal-backdrop">
          <button className="modal-dismiss-layer" type="button" aria-label="Close removal form" onClick={() => setRemoveOpen(false)} />
          <section className="remove-modal" role="dialog" aria-modal="true" aria-labelledby="remove-title">
            <button className="modal-close" type="button" aria-label="Close removal form" onClick={() => setRemoveOpen(false)}>×</button>
            <span className="section-tag red-tag">FREE REMOVAL</span>
            <h2 id="remove-title">Remove me.</h2>
            <p>Request free de-indexing without buying a search. PROMAI verifies the request and sends removal instructions to every relevant index provider.</p>
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
