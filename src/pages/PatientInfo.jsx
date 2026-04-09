import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import FaqItem from "../components/FaqItem";
import { useReveal } from "../hooks";
import { FAQS } from "../data";

const FIRST_VISIT_STEPS = [
  { num: "1", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, title: "Schedule", desc: "Call (843) 797-3960 or request an appointment through your referring physician." },
  { num: "2", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, title: "Prepare", desc: "Bring your insurance card, photo ID, and a list of current medications. Arrive 15 minutes early." },
  { num: "3", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: "Consultation", desc: "Your provider will perform a comprehensive skin evaluation and discuss your treatment plan." },
  { num: "4", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: "Follow Up", desc: "We'll schedule any necessary follow-up appointments and provide clear at-home care instructions." },
];

const INSURANCE_PLANS = [
  "Medicare", "Blue Cross Blue Shield", "Cigna", "Aetna",
  "United Healthcare", "Tricare", "Humana", "Medicaid",
];

export default function PatientInfo() {
  const [visitRef, visitVis] = useReveal();
  const [insRef, insVis] = useReveal();
  const [faqRef, faqVis] = useReveal();
  const [portalRef, portalVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Patient Information"
        title="Your Visit"
        titleAccent="Made Simple"
        subtitle="Everything you need to know before your first appointment — from what to bring to what to expect."
        image="/images/patient-welcome.png"
      />

      {/* ═══ FIRST VISIT ═══ */}
      <section ref={visitRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: visitVis?1:0.01, transform: visitVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>Getting Started</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 16 }}>Your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>First</em> Visit</h2>
        </div>
        <div className="visit-steps">
          {FIRST_VISIT_STEPS.map((step, i) => (
            <div key={i} className="visit-step" style={{ opacity: visitVis?1:0.01, transform: visitVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.1}s` }}>
              <div className="visit-step__icon">{step.icon}</div>
              <div className="visit-step__num">{step.num}</div>
              <h3 className="visit-step__title">{step.title}</h3>
              <p className="visit-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ INSURANCE ═══ */}
      <section ref={insRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48, opacity: insVis?1:0.01, transform: insVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>Coverage</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 16 }}>Insurance We <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Accept</em></h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, maxWidth: 460, margin: "0 auto" }}>We accept most major plans. Contact us to verify your specific coverage before your visit.</p>
        </div>
        <div className="insurance-grid">
          {INSURANCE_PLANS.map((plan, i) => (
            <div key={i} className="insurance-card" style={{ opacity: insVis?1:0.01, transform: insVis?"none":"scale(.95)", transition: `all .5s cubic-bezier(.16,1,.3,1) ${i*.05}s` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>{plan}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--mist)", fontWeight: 400, marginTop: 24 }}>Don't see your plan? Call <a href="tel:8437973960" style={{ color: "var(--gold)", fontWeight: 600 }}>(843) 797-3960</a> — we may still be able to help.</p>
      </section>

      {/* ═══ PORTAL & RESOURCES ═══ */}
      <section ref={portalRef} style={{ padding: "0 var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto", opacity: portalVis?1:0.01, transform: portalVis?"none":"translateY(20px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div className="portal-cards">
          <a href="https://tridentdermatology.ema.md/ema/Login.action" target="_blank" rel="noopener noreferrer" className="portal-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <h3>Patient Portal</h3>
            <p>Access your records, view lab results, and manage your appointments online.</p>
            <span className="portal-card__link">Log In →</span>
          </a>
          <a href="https://www.tridentderm.com/new-patients/" target="_blank" rel="noopener noreferrer" className="portal-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            <h3>New Patient Forms</h3>
            <p>Download and complete your intake forms before your first visit to save time.</p>
            <span className="portal-card__link">Get Forms →</span>
          </a>
          <a href="https://www.tridentderm.com/pay-bill-online/" target="_blank" rel="noopener noreferrer" className="portal-card">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <h3>Pay Your Bill</h3>
            <p>Securely pay your balance online with our convenient payment portal.</p>
            <span className="portal-card__link">Pay Now →</span>
          </a>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section ref={faqRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="faq-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", opacity: faqVis?1:0.01, transform: faqVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "0 0 35%", position: "sticky", top: 120, alignSelf: "flex-start" }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,48px)", marginBottom: 20 }}>Common<br/><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Questions</em></h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, marginBottom: 32 }}>Can't find what you're looking for? Give us a call.</p>
            <a href="tel:8437973960" className="btn btn-o" style={{ fontSize: 11, padding: "14px 32px" }}>Contact Us</a>
          </div>
          <div style={{ flex: 1 }}>{FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} index={i} />)}</div>
        </div>
      </section>
    </>
  );
}
