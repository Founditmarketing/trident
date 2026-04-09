import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { AnimatedTrident } from "../components/Icons";
import { useReveal } from "../hooks";

const VALUES = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Board Certified", desc: "Every physician is board-certified by the American Board of Dermatology, ensuring the highest standard of clinical expertise." },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title: "Patient First", desc: "Every treatment plan is personalized. We listen, educate, and empower patients to make informed decisions about their skin health." },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>, title: "Evidence-Based", desc: "Our protocols are grounded in the latest peer-reviewed research and clinical guidelines — never trends or shortcuts." },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: "Collaborative Team", desc: "Our physicians and PAs work together across specialties — sharing insights to deliver the most comprehensive care possible." },
];

const MILESTONES = [
  { year: "2004", event: "Trident Dermatology founded in North Charleston by Dr. Bradley J. Saylors" },
  { year: "2008", event: "Expanded to five board-certified dermatologists" },
  { year: "2012", event: "Launched Mohs Micrographic Surgery program" },
  { year: "2018", event: "Recognized as Charleston's Choice for Best Dermatologist" },
  { year: "2024", event: "Surpassed 250+ five-star Google reviews from grateful patients" },
];

export default function About() {
  const [storyRef, storyVis] = useReveal();
  const [valRef, valVis] = useReveal();
  const [tlRef, tlVis] = useReveal();
  const [teamRef, teamVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Our Practice"
        title="A Tradition of"
        titleAccent="Clinical Excellence"
        subtitle="Five board-certified dermatologists. Two decades of dedication. One mission — exceptional skin care for the Lowcountry."
        image="/images/about-clinic.png"
      />

      {/* ═══ OUR STORY ═══ */}
      <section ref={storyRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-split" style={{ display: "flex", gap: "clamp(48px,7vw,120px)", alignItems: "center", opacity: storyVis?1:0.01, transform: storyVis?"none":"translateY(30px)", transition: "all 1s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: "1 1 55%" }}>
            <div className="eyebrow">Our Story</div>
            <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 28 }}>
              Rooted in the <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Lowcountry</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, marginBottom: 20, maxWidth: 540 }}>
              Founded in 2004, Trident Dermatology has grown from a single-physician practice into the Lowcountry's most trusted dermatology team. Our five board-certified dermatologists and three physician assistants bring together expertise spanning medical, surgical, and cosmetic dermatology.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--stone)", fontWeight: 300, maxWidth: 540 }}>
              Located in North Charleston's Medical Plaza, we serve patients across Charleston, Mount Pleasant, Summerville, and the greater Lowcountry with the same personal attention and clinical rigor that has defined our practice since day one.
            </p>
          </div>
          <div style={{ flex: "0 0 40%", borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(23,54,58,.1)" }}>
            <img src="/images/about-clinic.png" alt="Modern, warm interior of Trident Dermatology clinic" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section ref={valRef} style={{ padding: "40px var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64, opacity: valVis?1:0.01, transform: valVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>What Guides Us</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)" }}>Our <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Values</em></h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="value-card" style={{ opacity: valVis?1:0.01, transform: valVis?"none":"translateY(20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.1}s` }}>
              <div className="value-card__icon">{v.icon}</div>
              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section ref={tlRef} style={{ margin: "20px clamp(16px,3vw,48px)", borderRadius: 28, padding: "clamp(64px,8vw,100px) clamp(32px,6vw,80px)", background: "linear-gradient(160deg, var(--teal), #1A4848, var(--teal2))", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: .03 }}><AnimatedTrident size={400} delay={0} /></div>
        <div style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 12 }}>Milestones</div>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,44px)", color: "white" }}>Our <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Journey</em></h2>
        </div>
        <div className="timeline" style={{ position: "relative", zIndex: 2 }}>
          {MILESTONES.map((m, i) => (
            <div key={i} className="timeline__item" style={{ opacity: tlVis?1:0.01, transform: tlVis?"none":"translateX(-20px)", transition: `all .6s cubic-bezier(.16,1,.3,1) ${i*.12}s` }}>
              <div className="timeline__year">{m.year}</div>
              <div className="timeline__line" />
              <div className="timeline__event">{m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TEAM PREVIEW ═══ */}
      <section ref={teamRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto", textAlign: "center" }}>
        <div style={{ opacity: teamVis?1:0.01, transform: teamVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 16 }}>Our Team</div>
          <h2 className="display" style={{ fontSize: "clamp(34px,4.5vw,54px)", marginBottom: 20 }}>Meet the <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Experts</em></h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--stone)", fontWeight: 300, maxWidth: 480, margin: "0 auto 40px" }}>
            A team of specialists united by a shared commitment to your skin's health and beauty.
          </p>
          <Link to="/providers" className="btn btn-p">View All Providers</Link>
        </div>
      </section>
    </>
  );
}
