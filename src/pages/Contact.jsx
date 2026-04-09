import { useState } from "react";
import PageHero from "../components/PageHero";
import { useReveal } from "../hooks";

export default function Contact() {
  const [mapActive, setMapActive] = useState(false);
  const [infoRef, infoVis] = useReveal();
  const [mapRef, mapVis] = useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Visit"
        titleAccent="Our Office"
        subtitle="Conveniently located in North Charleston's Medical Plaza — serving the greater Lowcountry with comprehensive dermatologic care."
        image="/images/contact-building.png"
      />

      {/* ═══ CONTACT INFO + MAP ═══ */}
      <section ref={infoRef} style={{ padding: "var(--section-pad) var(--side-pad)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="loc-split" style={{ display: "flex", gap: "clamp(48px,7vw,100px)", alignItems: "flex-start", opacity: infoVis?1:0.01, transform: infoVis?"none":"translateY(30px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
          <div style={{ flex: 1 }}>
            <div className="eyebrow">Location</div>
            <h2 className="display" style={{ fontSize: "clamp(34px,4vw,48px)", marginBottom: 48 }}>Find <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Us</em></h2>

            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 12 }}>Address</div>
              <p style={{ fontSize: 18, fontFamily: "'Cormorant Garamond',serif", color: "var(--ink)", fontWeight: 400, lineHeight: 1.65 }}>9295 Medical Plaza Drive, Suite A<br/>North Charleston, SC 29406</p>
            </div>

            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 12 }}>Phone</div>
              <a href="tel:8437973960" style={{ fontSize: 28, fontFamily: "'Cormorant Garamond',serif", color: "var(--teal)", textDecoration: "none", fontWeight: 400 }}>(843) 797-3960</a>
            </div>

            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 12 }}>Fax</div>
              <p style={{ fontSize: 16, fontFamily: "'Cormorant Garamond',serif", color: "var(--stone)", fontWeight: 400 }}>(843) 797-3965</p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 9, letterSpacing: 5, textTransform: "uppercase", color: "var(--mist)", fontWeight: 600, marginBottom: 16 }}>Hours</div>
              {[["Monday","7:30 AM – 5:00 PM"],["Tuesday","7:30 AM – 5:00 PM"],["Wednesday","7:30 AM – 5:00 PM"],["Thursday","7:30 AM – 5:00 PM"],["Friday","7:30 AM – 5:00 PM"],["Saturday – Sunday","Closed"]].map(([d,h],i) =>
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(184,149,106,.06)", maxWidth: 380 }}>
                  <span style={{ fontSize: 15, fontWeight: 400 }}>{d}</span>
                  <span style={{ fontSize: 15, fontWeight: 300, color: "var(--stone)" }}>{h}</span>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:8437973960" className="btn btn-p" style={{ fontSize: 11 }}>Call Now</a>
              <a href="https://maps.google.com/?q=9295+Medical+Plaza+Dr+North+Charleston+SC" target="_blank" rel="noopener noreferrer" className="btn btn-o" style={{ fontSize: 11 }}>Get Directions <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg></a>
            </div>
          </div>

          <div style={{ flex: "0 0 50%" }} className="map-wrap">
            <div style={{ aspectRatio: "4/3", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(184,149,106,.08)", position: "relative", boxShadow: "0 24px 60px rgba(23,54,58,.08)" }}>
              {!mapActive && <div onClick={() => setMapActive(true)} style={{ position: "absolute", inset: 0, zIndex: 2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(250,248,243,.15)" }}>
                <span style={{ padding: "10px 24px", borderRadius: 40, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", fontSize: 12, fontWeight: 500, color: "var(--teal)", letterSpacing: 1.5, textTransform: "uppercase", border: "1px solid rgba(184,149,106,.1)" }}>Tap to interact with map</span>
              </div>}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-80.0389!3d32.8867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7b4a4b3f4e5d%3A0x1234567890abcdef!2s9295+Medical+Plaza+Dr%2C+North+Charleston%2C+SC+29406!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{ border: 0, minHeight: 360, pointerEvents: mapActive ? "auto" : "none" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Trident Dermatology Location"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIRECTIONS ═══ */}
      <section ref={mapRef} style={{ padding: "0 var(--side-pad) var(--section-pad)", maxWidth: 1440, margin: "0 auto", opacity: mapVis?1:0.01, transform: mapVis?"none":"translateY(20px)", transition: "all .8s cubic-bezier(.16,1,.3,1)" }}>
        <div className="directions-grid">
          <div className="directions-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <h3>Arriving Early</h3>
            <p>Please arrive 15 minutes before your appointment to complete any remaining paperwork.</p>
          </div>
          <div className="directions-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <h3>Parking</h3>
            <p>Free parking is available directly in front of our building in the Medical Plaza complex.</p>
          </div>
          <div className="directions-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <h3>From I-26</h3>
            <p>Take Exit 209B toward North Charleston. Turn right onto Medical Plaza Drive. We are in Suite A.</p>
          </div>
        </div>
      </section>
    </>
  );
}
