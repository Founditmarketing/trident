import { useState, useCallback } from "react";
import { useScroll, useReveal, useCountUp } from "./hooks";
import { DOCS, PAS, REVIEWS, FAQS } from "./data";
import { GradientMesh, AnimatedTrident, TridentLogo, StarIcon, FaqItem, ServicePanel } from "./components";

export default function App() {
  const sy = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bioOpen, setBioOpen] = useState(null);
  const [ftOpen, setFtOpen] = useState(null);
  const [mapActive, setMapActive] = useState(false);
  const navOp = Math.min(sy / 280, 1);
  const go = useCallback((id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }, []);

  const [abRef, abVis] = useReveal();
  const [svcRef, svcVis] = useReveal(0.08);
  const [prRef, prVis] = useReveal();
  const [numRef, numVis] = useReveal();
  const [ctRef, ctVis] = useReveal();
  const [loRef, loVis] = useReveal();
  const [rvRef, rvVis] = useReveal();
  const [fqRef, fqVis] = useReveal();

  const c5 = useCountUp(5, 1600, numVis);
  const c8 = useCountUp(8, 1800, numVis);
  const c99 = useCountUp(99, 2200, numVis);
  const cYrs = useCountUp(20, 2000, numVis);

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", fontFamily: "'DM Sans',sans-serif" }}>
      <a href="#main-content" className="sr-only" style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden", zIndex: 9999 }} onFocus={e => { e.target.style.position = "fixed"; e.target.style.top = "10px"; e.target.style.left = "10px"; e.target.style.width = "auto"; e.target.style.height = "auto"; e.target.style.padding = "12px 24px"; e.target.style.background = "var(--teal)"; e.target.style.color = "white"; e.target.style.borderRadius = "8px"; e.target.style.fontSize = "14px"; }} onBlur={e => { e.target.style.position = "absolute"; e.target.style.left = "-9999px"; }}>Skip to main content</a>
      <div className="grain" />

      {/* ═══ NAV ═══ */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 76, padding: "0 clamp(20px,5vw,72px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: `rgba(250,248,243,${.45 + navOp * .5})`, backdropFilter: navOp > .05 ? `blur(${navOp * 28}px) saturate(1.4)` : "none", borderBottom: `1px solid rgba(184,149,106,${navOp * .08})` }}>
        <div onClick={() => go("hero")} style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
          <TridentLogo />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "var(--teal)", lineHeight: 1 }}>Trident</div>
            <div style={{ fontSize: 7.5, letterSpacing: 4.5, textTransform: "uppercase", color: "var(--stone)", fontWeight: 500, marginTop: 2 }}>Dermatology</div>
          </div>
        </div>
        <div className="d-nav" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["About","Services","Providers","Reviews","Location"].map(s => <button key={s} className="lnk" onClick={() => go(s.toLowerCase())}>{s}</button>)}
          <a href="tel:8437973960" className="btn btn-p" style={{ padding: "11px 28px", fontSize: 11 }}>(843) 797-3960</a>
        </div>
        <button className="m-tog" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 1001 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 1.5, background: "var(--teal)", borderRadius: 2, transition: "all .3s", transform: menuOpen ? (i===0?"rotate(45deg) translate(4.5px,4.5px)":i===2?"rotate(-45deg) translate(4.5px,-4.5px)":"scaleX(0)") : "none", opacity: menuOpen&&i===1?0:1 }} />)}
        </button>
      </nav>
      <header>

      {menuOpen && <div className="mob-menu">
        <a href="tel:8437973960" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", fontWeight: 600, marginBottom: 16, animation: "textUp .4s ease both" }}>(843) 797-3960</a>
        {["About","Services","Providers","Reviews","Location"].map((s,i) => <button key={s} onClick={() => go(s.toLowerCase())} style={{ background:"none",border:"none",fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:300,color:"var(--teal)",cursor:"pointer",animation:`textUp .5s ease ${i*.06}s both` }}>{s}</button>)}
        <a href="tel:8437973960" className="btn btn-g" style={{ marginTop:16,animation:"textUp .5s ease .3s both" }}>Call Now</a>
      </div>}

      {/* ═══ HERO ═══ */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px clamp(20px,5vw,72px) 60px", overflow: "hidden" }}>
        <GradientMesh />
        <div className="hero-split" style={{ display: "flex", alignItems: "center", gap: "clamp(40px,6vw,100px)", maxWidth: 1440, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div style={{ flex: "1 1 58%" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 44, animation: "textUp .8s ease .2s both" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", animation: "dotPulse 2.5s ease-in-out infinite" }} />
              <span style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", fontWeight: 600, color: "var(--charcoal)" }}>North Charleston, South Carolina</span>
              <div style={{ width: 48, height: 1, background: "var(--taupe)" }} />
            </div>
            <h1 className="display" style={{ fontSize: "clamp(46px,7vw,96px)", marginBottom: 12 }}>
              <span style={{ display: "block", animation: "textUp 1s ease .4s both" }}>The Art &</span>
              <span style={{ display: "block", animation: "textUp 1s ease .55s both" }}>Science of</span>
              <span style={{ display: "block", fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg, #8B6F4E 0%, var(--gold) 40%, #8B6F4E 80%)", backgroundSize: "200% 100%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "textUp 1s ease .7s both" }}>Beautiful Skin</span>
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "28px 0 16px", animation: "textUp 1s ease .85s both" }}>
              <div style={{ width: 72, height: 1.5, background: "linear-gradient(90deg, var(--gold), transparent)", transformOrigin: "left", animation: "lineDraw .8s ease 1.2s both" }} />
              <span style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "var(--stone)", fontWeight: 500 }}>Est. North Charleston</span>
            </div>
            {/* Google Reviews social proof badge */}
            <a href="https://www.google.com/maps/place/Trident+Dermatology/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 40, background: "rgba(255,255,255,.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(184,149,106,.1)", marginBottom: 28, animation: "textUp 1s ease .9s both", transition: "all .4s ease" }} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.9)";e.currentTarget.style.borderColor="rgba(184,149,106,.25)"}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.6)";e.currentTarget.style.borderColor="rgba(184,149,106,.1)"}}>
              <div style={{ display: "flex", gap: 2 }}>{[...Array(5)].map((_,i)=><svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>4.9</span>
              <span style={{ fontSize: 12, color: "var(--stone)", fontWeight: 400 }}>on Google Reviews</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
            <p style={{ fontSize: "clamp(15px,1.6vw,18px)", lineHeight: 1.85, color: "var(--stone)", maxWidth: 480, fontWeight: 300, marginBottom: 40, animation: "textUp 1s ease 1s both" }}>
              Five board-certified dermatologists and a dedicated team delivering the Lowcountry's most comprehensive medical, cosmetic, and surgical skin care.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "textUp 1s ease 1.15s both" }}>
              <a href="tel:8437973960" className="btn btn-p">Call to Schedule <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></a>
              <button className="btn btn-o" onClick={() => go("services")}>Our Expertise</button>
            </div>
          </div>
          <div className="hero-vis" style={{ flex: "0 0 38%", position: "relative", animation: "fadeIn 1.5s ease .5s both" }}>
            {/* Decorative background panel */}
            <div style={{ position: "absolute", top: 40, right: -20, bottom: -20, left: 20, borderRadius: 28, background: "linear-gradient(160deg, var(--cream), rgba(184,149,106,.12))", border: "1px solid rgba(184,149,106,.08)" }} />
            <div style={{ aspectRatio: "3/4", borderRadius: 28, position: "relative", overflow: "hidden", border: "1px solid rgba(184,149,106,.1)", boxShadow: "0 32px 80px rgba(23,54,58,.12)" }}>
              <img src="/images/hero-doctor.png" alt="Trident Dermatology physician consulting with patient" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "80px 32px 28px", background: "linear-gradient(to top, rgba(23,54,58,.85), rgba(23,54,58,.3) 50%, transparent)" }}>
                <div style={{ color: "rgba(255,255,255,.35)", fontSize: 9, letterSpacing: 5, textTransform: "uppercase", marginBottom: 6 }}>Trident Dermatology</div>
                <div style={{ color: "white", fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 300 }}>North Charleston, SC</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: Math.max(0, 1 - sy / 300) }}>
          <span style={{ fontSize: 8, letterSpacing: 5, textTransform: "uppercase", color: "var(--stone)", fontWeight: 600 }}>Scroll</span>
          <div style={{ width: 1, height: 44, overflow: "hidden" }}><div style={{ width: 1, height: 44, background: "var(--gold)", animation: "float 2s ease-in-out infinite" }} /></div>
        </div>
      </section>
      </header>

      <main id="main-content">

      {/* ═══ TRUST BAR ═══ */}
      <div style={{ padding: "28px clamp(20px,5vw,72px)", background: "var(--teal)", display: "flex", justifyContent: "center", gap: "clamp(24px,5vw,72px)", flexWrap: "wrap", animation: "fadeIn 1s ease 1.5s both" }}>
        {[["5","Board-Certified Physicians"],["8","Expert Providers"],["99%","Mohs Cure Rate"],["20+","Years Experience"]].map(([v,l],i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 300, color: "var(--gold-lt)", lineHeight: 1 }}>{v}</span>
            <span style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", fontWeight: 500, lineHeight: 1.4 }}>{l}</span>
          </div>
        ))}
      </div>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ padding: "32px 0", borderTop: "1px solid rgba(184,149,106,.06)", borderBottom: "1px solid rgba(184,149,106,.06)", overflow: "hidden", background: "rgba(237,229,216,.18)" }}>
        <div style={{ display: "flex", animation: "marquee 55s linear infinite", width: "max-content" }}>
          {[...Array(2)].map((_,r) => <div key={r} style={{ display: "flex", alignItems: "center", gap: 52, paddingRight: 52 }}>
            {["Board-Certified Physicians","Mohs Surgery Specialists","Cosmetic Excellence","Five Dermatologists","Patient-First Care","Lowcountry's Premier Practice","Decades of Experience","Comprehensive Skin Health"].map((t,i) =>
              <div key={`${r}-${i}`} style={{ display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap" }}>
                <svg width="5" height="5" viewBox="0 0 5 5"><rect width="5" height="5" rx=".8" fill="var(--gold)" transform="rotate(45 2.5 2.5)"/></svg>
                <span style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "var(--stone)", fontWeight: 500 }}>{t}</span>
              </div>
            )}
          </div>)}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" ref={abRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-split" style={{ display: "flex", gap: "clamp(48px,7vw,120px)", alignItems: "center", opacity: abVis ? 1 : 0.01, transform: abVis ? "none" : "translateY(30px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "1 1 55%" }}>
            <div className="eyebrow">Our Practice</div>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,62px)", marginBottom: 32 }}>
              A Legacy of<br /><em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>Clinical Excellence</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, marginBottom: 20, maxWidth: 540 }}>
              Trident Dermatology unites five board-certified dermatologists and a team of exceptional physician assistants to deliver the Lowcountry's most comprehensive skin care — from routine evaluations and complex medical conditions to advanced Mohs surgery and refined cosmetic artistry.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, maxWidth: 540 }}>
              Every patient receives personalized, evidence-based treatment in an environment designed around comfort, trust, and exceptional outcomes.
            </p>
          </div>
          <div style={{ flex: "0 0 40%", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ borderRadius: 24, padding: "52px 40px", background: "linear-gradient(160deg, var(--teal), var(--teal2))", color: "white", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -30, opacity: .04 }}><AnimatedTrident size={200} delay={0} /></div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 300, lineHeight: 1.35, fontStyle: "italic", marginBottom: 20, position: "relative", zIndex: 2 }}>
                "The skin is the mirror<br/>of the body's health."
              </div>
              <div style={{ width: 40, height: 1, background: "var(--gold-lt)", marginBottom: 14 }} />
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: .5 }}>Our Philosophy</div>
            </div>
            <div style={{ borderRadius: 24, padding: "36px 40px", background: "rgba(255,255,255,.5)", backdropFilter: "blur(16px)", border: "1px solid rgba(184,149,106,.08)" }}>
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>Office Hours</div>
              {[["Monday – Friday","7:30 AM – 5:00 PM"],["Weekend","Closed"]].map(([d,h],i) =>
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i===0?"1px solid rgba(184,149,106,.06)":"none" }}>
                  <span style={{ fontSize: 14, fontWeight: 400 }}>{d}</span>
                  <span style={{ fontSize: 14, fontWeight: 300, color: "var(--stone)" }}>{h}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" ref={svcRef} style={{ padding: "80px clamp(20px,5vw,72px) 40px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80, opacity: svcVis?1:0.01, transform: svcVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>What We Treat</div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 16 }}>Three Pillars of <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Exceptional</em> Care</h2>
        </div>
        <ServicePanel num="01" title="Medical Dermatology" align="left" vis={svcVis} delay={0.1} dark image="/images/svc-medical.png" video="/svc-medical.mp4" desc="Comprehensive diagnosis and treatment of conditions affecting the skin, hair, and nails — from acne and eczema to complex autoimmune disorders." items={["Acne & Rosacea","Psoriasis & Eczema","Skin Cancer Screening","Mole Evaluation","Hair & Nail Disorders"]} />
        <ServicePanel num="02" title="Cosmetic Dermatology" align="right" vis={svcVis} delay={0.25} image="/images/svc-cosmetic.png" video="/svc-cosmetic.mp4" desc="Refined aesthetic treatments that enhance your natural beauty with precision, subtlety, and clinical artistry." items={["Botox & Dysport","Dermal Fillers","Chemical Peels","Laser Treatments","Microneedling"]} />
        <ServicePanel num="03" title="Mohs Micrographic Surgery" align="left" vis={svcVis} delay={0.4} dark image="/images/svc-mohs.png" video="/svc-mohs.mp4" desc="The gold standard in skin cancer removal — tissue-sparing precision with the highest cure rates in modern dermatologic surgery." items={["Skin Cancer Removal","Tissue-Sparing Technique","Same-Day Results","Reconstructive Options","99% Cure Rate"]} />
      </section>

      {/* ═══ BY THE NUMBERS ═══ */}
      <section ref={numRef} style={{ margin: "40px clamp(16px,3vw,48px)", borderRadius: 28, padding: "clamp(56px,8vw,100px) clamp(24px,5vw,72px)", background: "linear-gradient(160deg, var(--teal), #1A4848, var(--teal2))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: .04 }}><AnimatedTrident size={400} delay={0} /></div>
        <div style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 12 }}>By The Numbers</div>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,44px)", color: "white" }}>Trusted by the <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Lowcountry</em></h2>
        </div>
        <div className="num-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, position: "relative", zIndex: 2 }}>
          {[{ val: c5, label: "Board-Certified Physicians", suffix: "" },{ val: c8, label: "Total Providers on Staff", suffix: "" },{ val: c99, label: "Mohs Surgery Cure Rate", suffix: "%" },{ val: cYrs, label: "Years Combined Experience", suffix: "+" }].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "24px 16px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px,6vw,72px)", fontWeight: 300, color: "white", lineHeight: 1 }}>{s.val}{s.suffix}</div>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.45)", fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROVIDERS ═══ */}
      <section id="providers" ref={prRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: 72, opacity: prVis?1:0.01, transform: prVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div className="eyebrow">Our Team</div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,56px)", marginBottom: 16 }}>Meet Your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Providers</em></h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300 }}>A team of specialists with decades of combined experience — dedicated to your skin's health and beauty.</p>
        </div>
        <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--taupe)" }} />Physicians
        </div>
        <div className="prov-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, marginBottom: 48 }}>
          {DOCS.map((p, i) => (
            <div key={i} className="prov-card" onClick={() => setBioOpen(bioOpen === i ? null : i)} style={{ opacity: prVis?1:0.01, transform: prVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.08}s`, cursor: "pointer" }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto 20px", overflow: "hidden", border: "3px solid rgba(184,149,106,.15)", position: "relative" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                {p.featured && <div style={{ position: "absolute", bottom: 0, right: 0, width: 22, height: 22, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "var(--teal)", lineHeight: 1.25, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: 1.5, marginBottom: 10 }}>{p.cred}</div>
              <div style={{ fontSize: 12, color: "var(--stone)", fontWeight: 300, lineHeight: 1.5, marginBottom: 8 }}>{p.focus}</div>
              <div style={{ maxHeight: bioOpen === i ? 200 : 0, overflow: "hidden", transition: "max-height .5s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--stone)", fontWeight: 300, paddingTop: 10, borderTop: "1px solid rgba(184,149,106,.08)" }}>{p.bio}</p>
              </div>
              <div style={{ marginTop: 6, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>{bioOpen === i ? "Close" : "View Bio"}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--taupe)" }} />Physician Assistants
        </div>
        <div className="pa-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 740 }}>
          {PAS.map((p, i) => (
            <div key={i} className="prov-card" style={{ padding: "32px 24px", opacity: prVis?1:0.01, transform: prVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${(i+5)*.08}s` }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 16px", overflow: "hidden", border: "3px solid rgba(184,149,106,.1)" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 600, color: "var(--teal)", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: 1 }}>{p.cred}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section id="reviews" ref={rvRef} style={{ padding: "80px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: rvVis?1:0.01, transform: rvVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Patient Reviews</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 16 }}>What Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Patients</em> Say</h2>
          <a href="https://www.google.com/maps/place/Trident+Dermatology/@32.8867,-80.0389,15z/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--stone)", fontWeight: 400, transition: "color .3s" }} onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"} onMouseLeave={e=>e.currentTarget.style.color="var(--stone)"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/><path d="M12 6.8c-2.87 0-5.2 2.33-5.2 5.2s2.33 5.2 5.2 5.2 5.2-2.33 5.2-5.2S14.87 6.8 12 6.8z" fill="white"/><path d="M12 8.4c1.99 0 3.6 1.61 3.6 3.6s-1.61 3.6-3.6 3.6-3.6-1.61-3.6-3.6 1.61-3.6 3.6-3.6z" fill="#4285F4"/></svg>
            Read all reviews on Google →
          </a>
        </div>
        <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card" style={{ opacity: rvVis?1:0.01, transform: rvVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.08}s` }}>
              <div className="review-stars">{[...Array(r.rating)].map((_,j) => <StarIcon key={j} />)}</div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--stone)", fontWeight: 300, marginBottom: 24, fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(145deg, var(--cream), var(--taupe))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>{r.name.charAt(0)}</div>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section ref={fqRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="faq-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", opacity: fqVis?1:0.01, transform: fqVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "0 0 35%", position: "sticky", top: 120, alignSelf: "flex-start" }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,48px)", marginBottom: 20 }}>Common<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Questions</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, marginBottom: 32 }}>Can't find what you're looking for? Call us at (843) 797-3960.</p>
            <a href="tel:8437973960" className="btn btn-o" style={{ fontSize: 11, padding: "14px 32px" }}>Contact Us</a>
          </div>
          <div style={{ flex: 1 }}>{FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section ref={ctRef} style={{ margin: "20px clamp(16px,3vw,48px)", borderRadius: 28, background: "linear-gradient(150deg, var(--teal), #1A4848, var(--teal2))", padding: "clamp(64px,9vw,120px) clamp(32px,6vw,80px)", position: "relative", overflow: "hidden", opacity: ctVis?1:0.01, transform: ctVis?"none":"scale(.98)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-6%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,149,106,.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24 }}>Ready?</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(34px,5vw,58px)", fontWeight: 300, color: "white", lineHeight: 1.12, marginBottom: 24 }}>Your Skin Deserves<br/><em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Expert</em> Care</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", maxWidth: 440, margin: "0 auto 44px", fontWeight: 300, lineHeight: 1.75 }}>New and existing patients welcome. Schedule your appointment with one of our board-certified dermatologists.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8437973960" className="btn btn-g">Call (843) 797-3960 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></a>
            <a href="https://tridentdermatology.ema.md/ema/Login.action" className="btn" style={{ background: "rgba(255,255,255,.07)", color: "white", border: "1px solid rgba(255,255,255,.12)" }}>Patient Portal</a>
          </div>
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section id="location" ref={loRef} style={{ padding: "var(--section-pad) var(--side-pad) 100px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="loc-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", alignItems: "flex-start", opacity: loVis?1:0.01, transform: loVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: 1 }}>
            <div className="eyebrow">Visit Us</div>
            <h2 className="display" style={{ fontSize: "clamp(34px,4vw,48px)", marginBottom: 48 }}>Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Location</em></h2>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 12 }}>Address</div>
              <p style={{ fontSize: 18, fontFamily: "'Cormorant Garamond',serif", color: "var(--ink)", fontWeight: 400, lineHeight: 1.65 }}>9295 Medical Plaza Drive, Suite A<br/>North Charleston, SC 29406</p>
            </div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 12 }}>Phone</div>
              <a href="tel:8437973960" style={{ fontSize: 28, fontFamily: "'Cormorant Garamond',serif", color: "var(--teal)", textDecoration: "none", fontWeight: 400 }}>(843) 797-3960</a>
            </div>
            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 16 }}>Hours</div>
              {[["Monday – Friday","7:30 AM – 5:00 PM"],["Weekend","Closed"]].map(([d,h],i) =>
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(184,149,106,.06)" }}>
                  <span style={{ fontSize: 15, fontWeight: 400 }}>{d}</span>
                  <span style={{ fontSize: 15, fontWeight: 300, color: "var(--stone)" }}>{h}</span>
                </div>
              )}
            </div>
            <a href="https://maps.google.com/?q=9295+Medical+Plaza+Dr+North+Charleston+SC" target="_blank" rel="noopener noreferrer" className="btn btn-o">Get Directions <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg></a>
          </div>
          <div style={{ flex: "0 0 46%" }} className="map-wrap">
            <div style={{ aspectRatio: "4/3", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(184,149,106,.08)", position: "relative" }}>
              {!mapActive && <div onClick={() => setMapActive(true)} style={{ position: "absolute", inset: 0, zIndex: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(250,248,243,.15)" }}>
                <span style={{ padding: "10px 24px", borderRadius: 40, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", fontSize: 12, fontWeight: 500, color: "var(--teal)", letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(184,149,106,.1)" }}>Tap to interact with map</span>
              </div>}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-80.0389!3d32.8867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7b4a4b3f4e5d%3A0x1234567890abcdef!2s9295+Medical+Plaza+Dr%2C+North+Charleston%2C+SC+29406!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{ border: 0, minHeight: 360, pointerEvents: mapActive ? "auto" : "none" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Trident Dermatology Location"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      </main>
      <footer style={{ background: "var(--teal)", color: "rgba(255,255,255,.65)", padding: "80px clamp(20px,5vw,72px) 40px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="ft-grid" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: "clamp(24px,4vw,56px)", marginBottom: 64 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, color: "white" }}>
                <TridentLogo color="white" height={26} />
                <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600 }}>Trident</div><div style={{ fontSize: 7, letterSpacing: 4, textTransform: "uppercase", opacity: .35, marginTop: 1 }}>Dermatology</div></div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280, fontWeight: 300, marginBottom: 24 }}>Comprehensive dermatology for the Lowcountry — clinical excellence meets compassionate care.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://www.facebook.com/TridentDermatology/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .3s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gold-lt)";e.currentTarget.style.background="rgba(255,255,255,.08)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.background="transparent"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.65)"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/tridentderm/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .3s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gold-lt)";e.currentTarget.style.background="rgba(255,255,255,.08)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.background="transparent"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg>
                </a>
                <a href="https://www.google.com/maps/place/Trident+Dermatology/" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google" style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .3s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--gold-lt)";e.currentTarget.style.background="rgba(255,255,255,.08)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.12)";e.currentTarget.style.background="transparent"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.65)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </a>
              </div>
            </div>
            {/* Footer columns - accordion on mobile */}
            {[["Services", [["Medical Dermatology","services"],["Cosmetic Treatments","services"],["Mohs Surgery","services"],["Meet Our Providers","providers"],["Patient Reviews","reviews"]]],
              ["Resources", [["Patient Portal","https://tridentdermatology.ema.md/ema/Login.action"],["New Patients","https://www.tridentderm.com/new-patients/"],["Pay Bill","https://www.tridentderm.com/pay-bill-online/"],["Blog","https://www.tridentderm.com/blog/"],["Contact","https://www.tridentderm.com/contact-us/"]]]].map(([title, links], ci) => (
              <div key={ci} className={`ft-col${ftOpen === ci ? ' ft-col-open' : ''}`}>
                <button className="ft-col-head" onClick={() => setFtOpen(ftOpen === ci ? null : ci)} style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24, background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  {title}
                  <svg className="ft-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-lt)" strokeWidth="2" style={{ transition: "transform .3s", transform: ftOpen === ci ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div className="ft-col-links" style={{ overflow: "hidden" }}>
                  {links.map(([l,h],li) => (
                    h.startsWith("http") ? 
                      <a key={li} href={h} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 14, padding: "8px 0", fontWeight: 300, transition: "color .3s", color: "rgba(255,255,255,.65)" }}
                        onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.65)"}>{l}</a>
                    : <button key={li} onClick={() => go(h)} style={{ display: "block", fontSize: 14, padding: "8px 0", fontWeight: 300, transition: "color .3s", color: "rgba(255,255,255,.65)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}
                        onMouseEnter={e=>e.target.style.color="white"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.65)"}>{l}</button>
                  ))}
                </div>
              </div>
            ))}
            <div><div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24 }}>Contact</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, marginBottom: 14 }}>9295 Medical Plaza Dr<br/>Suite A<br/>North Charleston, SC 29406</p>
              <a href="tel:8437973960" style={{ fontSize: 14, color: "var(--gold-lt)", textDecoration: "none", fontWeight: 500 }}>(843) 797-3960</a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 300, opacity: .35 }}>© {new Date().getFullYear()} Trident Dermatology. All rights reserved.</div>
            <div style={{ display: "flex", gap: 28 }}>
              {["Privacy","Disclaimer","Accessibility"].map((s,i) => <span key={i} style={{ fontSize: 10, fontWeight: 300, opacity: .35, cursor: "pointer", letterSpacing: 1.5, transition: "opacity .3s" }}
                onMouseEnter={e=>e.target.style.opacity=1} onMouseLeave={e=>e.target.style.opacity=.35}>{s}</span>)}
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      {sy > 500 && <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, padding: "12px 20px", background: "rgba(250,248,243,.95)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(184,149,106,.1)", display: "flex", justifyContent: "center", gap: 12, zIndex: 90, animation: "fadeIn .4s ease both" }}>
        <a href="tel:8437973960" className="btn btn-p" style={{ padding: "12px 24px", fontSize: 11, flex: 1, maxWidth: 180, textAlign: "center", justifyContent: "center" }}>Call Now</a>
        <a href="https://tridentdermatology.ema.md/ema/Login.action" className="btn btn-o" style={{ padding: "12px 24px", fontSize: 11, flex: 1, maxWidth: 180, textAlign: "center", justifyContent: "center" }}>Portal</a>
      </div>}
    </div>
  );
}
