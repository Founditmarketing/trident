import { Link } from "react-router-dom";
import GradientMesh from "../components/GradientMesh";
import { AnimatedTrident, TridentLogo, StarIcon } from "../components/Icons";
import { useReveal, useCountUp } from "../hooks";
import { REVIEWS } from "../data";

export default function Home() {
  const [abRef, abVis] = useReveal();
  const [svcRef, svcVis] = useReveal(0.08);
  const [numRef, numVis] = useReveal();
  const [rvRef, rvVis] = useReveal();
  const [ctRef, ctVis] = useReveal();

  const c5 = useCountUp(5, 1600, numVis);
  const c8 = useCountUp(8, 1800, numVis);
  const c99 = useCountUp(99, 2200, numVis);
  const cYrs = useCountUp(20, 2000, numVis);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section id="hero" aria-label="Welcome" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px clamp(20px,5vw,72px) 60px", overflow: "hidden" }}>
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
            <a href="https://www.google.com/maps/place/Trident+Dermatology/" target="_blank" rel="noopener noreferrer" className="google-badge" style={{ animation: "textUp 1s ease .9s both" }}>
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
              <Link to="/services" className="btn btn-o">Our Expertise</Link>
            </div>
          </div>
          <div className="hero-vis" style={{ flex: "0 0 38%", position: "relative", animation: "fadeIn 1.5s ease .5s both" }}>
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
      </section>

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

      {/* ═══ ABOUT PREVIEW ═══ */}
      <section ref={abRef} aria-label="About our practice" style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-split" style={{ display: "flex", gap: "clamp(48px,7vw,120px)", alignItems: "center", opacity: abVis ? 1 : 0.01, transform: abVis ? "none" : "translateY(30px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "1 1 55%" }}>
            <div className="eyebrow">Our Practice</div>
            <h2 className="display" style={{ fontSize: "clamp(36px,5vw,62px)", marginBottom: 32 }}>
              A Legacy of<br /><em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--gold)" }}>Clinical Excellence</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, marginBottom: 20, maxWidth: 540 }}>
              Trident Dermatology unites five board-certified dermatologists and a team of exceptional physician assistants to deliver the Lowcountry's most comprehensive skin care — from routine evaluations to advanced Mohs surgery and refined cosmetic artistry.
            </p>
            <Link to="/about" className="btn btn-o" style={{ marginTop: 16 }}>Learn More About Us</Link>
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

      {/* ═══ SERVICE PREVIEW CARDS ═══ */}
      <section ref={svcRef} aria-label="Our services" style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: svcVis?1:0.01, transform: svcVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>What We Treat</div>
          <h2 className="display" style={{ fontSize: "clamp(36px,5vw,60px)", marginBottom: 16 }}>Three Pillars of <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Exceptional</em> Care</h2>
        </div>
        <div className="svc-preview-grid">
          {[
            { num: "01", title: "Medical Dermatology", desc: "Comprehensive diagnosis and treatment of conditions affecting the skin, hair, and nails.", image: "/images/svc-medical.png", link: "/services" },
            { num: "02", title: "Cosmetic Dermatology", desc: "Refined aesthetic treatments that enhance your natural beauty with clinical artistry.", image: "/images/svc-cosmetic.png", link: "/services" },
            { num: "03", title: "Mohs Surgery", desc: "The gold standard in skin cancer removal with the highest cure rates.", image: "/images/svc-mohs.png", link: "/services/mohs-surgery" },
          ].map((svc, i) => (
            <Link to={svc.link} key={i} className="svc-preview-card" style={{ opacity: svcVis?1:0.01, transform: svcVis?"none":"translateY(30px)", transition: `all .8s cubic-bezier(.16,1,.3,1) ${i*.12}s` }}>
              <div className="svc-preview-card__img">
                <img src={svc.image} alt={svc.title} loading="lazy" />
                <div className="svc-preview-card__overlay" />
                <span className="svc-preview-card__num">{svc.num}</span>
              </div>
              <div className="svc-preview-card__body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="svc-preview-card__cta">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ BY THE NUMBERS ═══ */}
      <section ref={numRef} aria-label="Practice statistics" style={{ margin: "40px clamp(16px,3vw,48px)", borderRadius: 28, padding: "clamp(56px,8vw,100px) clamp(24px,5vw,72px)", background: "linear-gradient(160deg, var(--teal), #1A4848, var(--teal2))", position: "relative", overflow: "hidden" }}>
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

      {/* ═══ REVIEWS ═══ */}
      <section ref={rvRef} aria-label="Patient reviews" style={{ padding: "80px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: rvVis?1:0.01, transform: rvVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Patient Reviews</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 16 }}>What Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Patients</em> Say</h2>
        </div>
        <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {REVIEWS.slice(0,3).map((r, i) => (
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

      {/* ═══ CTA ═══ */}
      <section ref={ctRef} aria-label="Schedule appointment" style={{ margin: "20px clamp(16px,3vw,48px)", borderRadius: 28, background: "linear-gradient(150deg, var(--teal), #1A4848, var(--teal2))", padding: "clamp(64px,9vw,120px) clamp(32px,6vw,80px)", position: "relative", overflow: "hidden", opacity: ctVis?1:0.01, transform: ctVis?"none":"scale(.98)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-6%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,149,106,.1) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24 }}>Ready?</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(34px,5vw,58px)", fontWeight: 300, color: "white", lineHeight: 1.12, marginBottom: 24 }}>Your Skin Deserves<br/><em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Expert</em> Care</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.5)", maxWidth: 440, margin: "0 auto 44px", fontWeight: 300, lineHeight: 1.75 }}>New and existing patients welcome. Schedule your appointment with one of our board-certified dermatologists.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8437973960" className="btn btn-g">Call (843) 797-3960</a>
            <a href="https://tridentdermatology.ema.md/ema/Login.action" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "rgba(255,255,255,.07)", color: "white", border: "1px solid rgba(255,255,255,.12)" }}>Patient Portal</a>
          </div>
        </div>
      </section>
    </>
  );
}
