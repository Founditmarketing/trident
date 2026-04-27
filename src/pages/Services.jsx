import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ServicePanel from "../components/ServicePanel";
import { useReveal } from "../hooks";

const DIFFERENTIATORS = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: "Board-Certified Team", desc: "All five dermatologists are board-certified with extensive fellowship training." },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33"/></svg>, title: "Advanced Technology", desc: "State-of-the-art diagnostic and treatment equipment for precise, effective care." },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: "Comprehensive Approach", desc: "Medical, cosmetic, and surgical dermatology under one roof for seamless care." },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title: "Patient-Centered", desc: "Personalized care plans, minimal wait times, and a warm, welcoming environment." },
];

export default function Services() {
  const [svcRef, svcVis] = useReveal(0.08);
  const [diffRef, diffVis] = useReveal();
  const [ctaRef, ctaVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Our Specialties"
        title="Comprehensive"
        titleAccent="Dermatologic Care"
        subtitle="From medical diagnostics to cosmetic artistry to life-saving Mohs surgery — every aspect of skin health, under one roof."
        image="/images/svc-medical.png"
      />

      {/* ═══ SERVICE PANELS ═══ */}
      <section ref={svcRef} aria-label="Our services" style={{ padding: "var(--section-pad) clamp(20px,5vw,72px) 40px", maxWidth: 1440, margin: "0 auto" }}>
        <ServicePanel num="01" title="Medical Dermatology" align="left" vis={svcVis} delay={0.1} dark image="/images/svc-medical.png" video="/svc-medical.mp4" desc="Comprehensive diagnosis and treatment of conditions affecting the skin, hair, and nails — from acne and eczema to complex autoimmune disorders." items={["Acne & Rosacea","Psoriasis & Eczema","Skin Cancer Screening","Mole Evaluation","Hair & Nail Disorders"]} />
        <ServicePanel num="02" title="Cosmetic Dermatology" align="right" vis={svcVis} delay={0.25} image="/images/svc-cosmetic.png" video="/svc-cosmetic.mp4" desc="Refined aesthetic treatments that enhance your natural beauty with precision, subtlety, and clinical artistry." items={["Botox & Dysport","Dermal Fillers","Laser Treatments","Microneedling"]} />
        <ServicePanel num="03" title="Mohs Micrographic Surgery" align="left" vis={svcVis} delay={0.4} dark image="/images/svc-mohs.png" video="/svc-mohs.mp4" desc="The gold standard in skin cancer removal — tissue-sparing precision with the highest cure rates in modern dermatologic surgery." items={["Skin Cancer Removal","Tissue-Sparing Technique","Same-Day Results","Reconstructive Options","99% Cure Rate"]} />
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link to="/services/mohs-surgery" className="btn btn-o">Learn More About Mohs Surgery →</Link>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section ref={diffRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: diffVis?1:0.01, transform: diffVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>The Difference</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)" }}>Why Choose <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Trident</em></h2>
        </div>
        <div className="diff-grid">
          {DIFFERENTIATORS.map((d, i) => (
            <div key={i} className="diff-card" style={{ opacity: diffVis?1:0.01, transform: diffVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.1}s` }}>
              <div className="diff-card__icon">{d.icon}</div>
              <h3 className="diff-card__title">{d.title}</h3>
              <p className="diff-card__desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INSURANCE CALLOUT ═══ */}
      <section ref={ctaRef} style={{ padding: "0 var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto", opacity: ctaVis?1:0.01, transform: ctaVis?"none":"translateY(20px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div className="insurance-callout">
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 300, color: "var(--teal)", marginBottom: 12 }}>
              Insurance & <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Payment</em>
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, maxWidth: 480 }}>
              We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Cigna, Aetna, United Healthcare, and Tricare. Cosmetic consultations are available for a $75 fee.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/patients" className="btn btn-o" style={{ fontSize: 11 }}>Patient Information</Link>
            <a href="tel:8437973960" className="btn btn-p" style={{ fontSize: 11 }}>Call to Verify</a>
          </div>
        </div>
      </section>
    </>
  );
}
