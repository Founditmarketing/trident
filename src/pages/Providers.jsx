import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { StarIcon } from "../components/Icons";
import { useReveal } from "../hooks";
import { DOCS, PAS, REVIEWS } from "../data";

export default function Providers() {
  const [bioOpen, setBioOpen] = useState(null);
  const [prRef, prVis] = useReveal();
  const [paRef, paVis] = useReveal();
  const [rvRef, rvVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Your"
        titleAccent="Providers"
        subtitle="A team of specialists with decades of combined experience — united by a shared commitment to your skin's health and beauty."
        image="/images/hero-doctor.png"
      />

      {/* ═══ PHYSICIANS ═══ */}
      <section ref={prRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--taupe)" }} />Physicians
        </div>
        <div className="provider-grid">
          {DOCS.map((p, i) => (
            <div key={i} className="provider-card" style={{ opacity: prVis?1:0.01, transform: prVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.08}s` }}>
              <div className="provider-card__photo">
                <img src={p.img} alt={p.name} loading="lazy" />
                {p.featured && <div className="provider-card__badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>}
              </div>
              <div className="provider-card__info">
                <h3 className="provider-card__name">{p.name}</h3>
                <div className="provider-card__cred">{p.cred}</div>
                <div className="provider-card__focus">{p.focus}</div>
                <p className="provider-card__bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PHYSICIAN ASSISTANTS ═══ */}
      <section ref={paRef} style={{ padding: "0 var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--taupe)" }} />Physician Assistants
        </div>
        <div className="pa-grid-page">
          {PAS.map((p, i) => (
            <div key={i} className="provider-card provider-card--pa" style={{ opacity: paVis?1:0.01, transform: paVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.08}s` }}>
              <div className="provider-card__photo provider-card__photo--sm">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="provider-card__info">
                <h3 className="provider-card__name">{p.name}</h3>
                <div className="provider-card__cred">{p.cred}</div>
                <p className="provider-card__bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SELECT REVIEWS ═══ */}
      <section ref={rvRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56, opacity: rvVis?1:0.01, transform: rvVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>Patient Reviews</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,52px)" }}>What Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Patients</em> Say</h2>
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
    </>
  );
}
