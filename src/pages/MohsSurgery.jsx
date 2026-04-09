import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { AnimatedTrident } from "../components/Icons";
import { useReveal, useCountUp } from "../hooks";

const MOHS_STEPS = [
  { num: "01", title: "Consultation & Mapping", desc: "Your surgeon examines the cancer site, discusses the procedure, and maps the treatment area with precise markings." },
  { num: "02", title: "Tissue Removal", desc: "A thin layer of tissue is removed from the cancer site under local anesthesia — you remain comfortable and awake throughout." },
  { num: "03", title: "Laboratory Analysis", desc: "The tissue is processed, color-coded, and examined under a microscope by your Mohs surgeon in our on-site lab." },
  { num: "04", title: "Margin Assessment", desc: "If cancer cells are detected at the margin, only the precise area where they remain is re-targeted — preserving maximum healthy tissue." },
  { num: "05", title: "Closure & Reconstruction", desc: "Once margins are confirmed cancer-free, the wound is repaired using the optimal reconstructive technique for the best cosmetic outcome." },
];

const MOHS_FAQS = [
  { q: "How long does Mohs surgery take?", a: "Most cases are completed in 2–4 hours, though complex cases may take longer. Plan to be at our office for most of the day, as each layer requires processing time." },
  { q: "Is Mohs surgery painful?", a: "The procedure is performed under local anesthesia, so you'll be comfortable throughout. Most patients report minimal discomfort — less than they expected." },
  { q: "What types of skin cancer does Mohs treat?", a: "Mohs is most commonly used for basal cell carcinoma (BCC) and squamous cell carcinoma (SCC), especially in cosmetically sensitive areas like the face, ears, and hands." },
  { q: "Will I have a scar?", a: "Our surgeons are trained in reconstructive techniques to minimize scarring. Most patients are very pleased with their cosmetic outcome, especially given the alternative of more invasive surgery." },
  { q: "Is Mohs covered by insurance?", a: "Yes. Mohs surgery is a medically necessary procedure and is covered by most insurance plans, including Medicare. Our team will help verify your coverage before your procedure." },
];

export default function MohsSurgery() {
  const [introRef, introVis] = useReveal();
  const [stepsRef, stepsVis] = useReveal(0.05);
  const [statsRef, statsVis] = useReveal();
  const [faqRef, faqVis] = useReveal();
  const [ctaRef, ctaVis] = useReveal();
  const [docRef, docVis] = useReveal();

  const c99 = useCountUp(99, 2200, statsVis);
  const cLayers = useCountUp(100, 1800, statsVis);

  return (
    <>
      <PageHero
        eyebrow="Mohs Micrographic Surgery"
        title="The Gold Standard in"
        titleAccent="Skin Cancer Treatment"
        subtitle="Up to 99% cure rate. Maximum tissue preservation. Same-day results. Performed by fellowship-trained Mohs surgeons in our North Charleston office."
        image="/images/mohs-hero.png"
      />

      {/* ═══ INTRO ═══ */}
      <section ref={introRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-split" style={{ display: "flex", gap: "clamp(48px,7vw,120px)", alignItems: "center", opacity: introVis?1:0.01, transform: introVis?"none":"translateY(30px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "1 1 55%" }}>
            <div className="eyebrow">What Is Mohs?</div>
            <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 28 }}>
              Precision That <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Preserves</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, marginBottom: 20, maxWidth: 540 }}>
              Mohs micrographic surgery is a specialized, highly precise technique for removing skin cancer. Unlike traditional excision, Mohs examines 100% of the tissue margin during surgery — ensuring all cancer cells are removed while sparing the maximum amount of healthy skin.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, maxWidth: 540 }}>
              Named after Dr. Frederic Mohs, this technique is particularly valuable for cancers in cosmetically and functionally critical areas — the face, nose, ears, eyelids, lips, hands, and feet — where preserving healthy tissue is essential.
            </p>
          </div>
          <div style={{ flex: "0 0 40%", borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(23,54,58,.12)", position: "relative" }}>
            <video src="/svc-mohs.mp4" poster="/images/svc-mohs.png" autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(23,54,58,.3), transparent 40%)" }} />
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section ref={statsRef} style={{ margin: "20px clamp(16px,3vw,48px)", borderRadius: 28, padding: "clamp(48px,6vw,80px) clamp(24px,5vw,72px)", background: "linear-gradient(160deg, var(--teal), #1A4848, var(--teal2))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: .03 }}><AnimatedTrident size={350} delay={0} /></div>
        <div className="mohs-stats" style={{ position: "relative", zIndex: 2 }}>
          {[
            { val: c99, suffix: "%", label: "Cure Rate", sub: "Highest of any skin cancer treatment" },
            { val: cLayers, suffix: "%", label: "Margin Examined", sub: "Every edge checked microscopically" },
            { val: "Same", suffix: " Day", label: "Results", sub: "Know you're cancer-free before you leave" },
          ].map((s, i) => (
            <div key={i} className="mohs-stat">
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 300, color: "white", lineHeight: 1 }}>
                {typeof s.val === 'number' ? s.val : s.val}{s.suffix}
              </div>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginTop: 8 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", fontWeight: 300, marginTop: 6, lineHeight: 1.5 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROCEDURE STEPS ═══ */}
      <section ref={stepsRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: stepsVis?1:0.01, transform: stepsVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>The Process</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 16 }}>How Mohs <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Surgery</em> Works</h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, maxWidth: 520, margin: "0 auto" }}>A multi-step, same-day procedure performed entirely in our office under local anesthesia.</p>
        </div>
        <div className="mohs-steps">
          {MOHS_STEPS.map((step, i) => (
            <div key={i} className="mohs-step" style={{ opacity: stepsVis?1:0.01, transform: stepsVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.1}s` }}>
              <div className="mohs-step__num">{step.num}</div>
              <div className="mohs-step__content">
                <h3 className="mohs-step__title">{step.title}</h3>
                <p className="mohs-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ YOUR MOHS SURGEON ═══ */}
      <section ref={docRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", alignItems: "center", opacity: docVis?1:0.01, transform: docVis?"none":"translateY(30px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "0 0 clamp(160px,20vw,260px)" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", border: "3px solid rgba(184,149,106,.15)", boxShadow: "0 24px 60px rgba(23,54,58,.08)" }}>
              <img src="/images/providers/bradley-saylors.webp" alt="Dr. Bradley J. Saylors, Fellowship-Trained Mohs Surgeon" style={{ width: "100%", display: "block", aspectRatio: "3/4", objectFit: "cover" }} loading="lazy" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="eyebrow">Your Mohs Surgeon</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", marginBottom: 16 }}>
              Bradley J. Saylors, <em style={{ fontStyle: "italic", color: "var(--gold)" }}>MD</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, marginBottom: 16, maxWidth: 500 }}>
              Dr. Saylors is the founder of Trident Dermatology and a fellowship-trained Mohs micrographic surgeon. A graduate of the College of Charleston and the Medical University of South Carolina (MUSC), he has been performing Mohs surgery in the Lowcountry for over two decades.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, marginBottom: 24, maxWidth: 500 }}>
              His specialized training in Mohs surgery and reconstructive techniques ensures that patients receive the most precise, tissue-sparing treatment with optimal cosmetic outcomes.
            </p>
            <Link to="/providers" className="btn btn-o" style={{ fontSize: 11 }}>Meet All Providers</Link>
          </div>
        </div>
      </section>

      {/* ═══ MOHS FAQ ═══ */}
      <section ref={faqRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="faq-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", opacity: faqVis?1:0.01, transform: faqVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "0 0 35%", position: "sticky", top: 120, alignSelf: "flex-start" }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,48px)", marginBottom: 20 }}>Mohs Surgery<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Questions</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, marginBottom: 32 }}>Have more questions? We're happy to help.</p>
            <a href="tel:8437973960" className="btn btn-o" style={{ fontSize: 11, padding: "14px 32px" }}>Call (843) 797-3960</a>
          </div>
          <div style={{ flex: 1 }}>
            {MOHS_FAQS.map((f, i) => (
              <MohsFaqItem key={i} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section ref={ctaRef} style={{ margin: "20px clamp(16px,3vw,48px) 40px", borderRadius: 28, background: "linear-gradient(150deg, var(--teal), #1A4848, var(--teal2))", padding: "clamp(64px,9vw,100px) clamp(32px,6vw,80px)", position: "relative", overflow: "hidden", opacity: ctaVis?1:0.01, transform: ctaVis?"none":"scale(.98)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-6%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,149,106,.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24 }}>Take The Next Step</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(34px,5vw,54px)", fontWeight: 300, color: "white", lineHeight: 1.12, marginBottom: 24 }}>Schedule Your <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Mohs</em> Consultation</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", maxWidth: 440, margin: "0 auto 44px", fontWeight: 300, lineHeight: 1.75 }}>If you or your referring physician suspects skin cancer, contact us to schedule a Mohs surgery consultation with Dr. Saylors.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8437973960" className="btn btn-g">Call (843) 797-3960</a>
            <Link to="/contact" className="btn" style={{ background: "rgba(255,255,255,.07)", color: "white", border: "1px solid rgba(255,255,255,.12)" }}>Visit Our Office</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* Inline FAQ component for Mohs-specific FAQs */
import { useState } from "react";
function MohsFaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "var(--gold)"} strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div className="faq-answer" role="region">
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, maxWidth: 600 }}>{a}</p>
      </div>
    </div>
  );
}
