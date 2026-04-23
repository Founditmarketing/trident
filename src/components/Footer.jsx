import { useState } from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  const [ftOpen, setFtOpen] = useState(null);

  return (
    <footer style={{ background: "var(--teal)", color: "rgba(255,255,255,.65)", padding: "80px clamp(20px,5vw,72px) 40px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="ft-grid" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: "clamp(24px,4vw,56px)", marginBottom: 64 }}>
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, color: "white", textDecoration: "none" }}>
              <img src="/images/td-logo.png" alt="Trident Dermatology" style={{ height: 32, width: 'auto' }} />
              <div><div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600 }}>Trident</div><div style={{ fontSize: 7, letterSpacing: 4, textTransform: "uppercase", opacity: .35, marginTop: 1 }}>Dermatology</div></div>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280, fontWeight: 300, marginBottom: 24 }}>Comprehensive dermatology for the Lowcountry — clinical excellence meets compassionate care.</p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { href: "https://www.facebook.com/TridentDermatology/", label: "Facebook", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.65)"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { href: "https://www.instagram.com/tridentderm/", label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/></svg> },
                { href: "https://www.google.com/maps/place/Trident+Dermatology/", label: "Google", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.65)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="ft-social">{s.icon}</a>
              ))}
            </div>
          </div>
          {[
            ["Quick Links", [
              { label: "About Us", to: "/about" },
              { label: "Our Services", to: "/services" },
              { label: "Mohs Surgery", to: "/services/mohs-surgery" },
              { label: "Our Providers", to: "/providers" },
              { label: "Patient Info", to: "/patients" },
            ]],
            ["Resources", [
              { label: "Patient Portal", href: "https://tridentdermatology.ema.md/ema/Login.action" },
              { label: "New Patients", href: "https://www.tridentderm.com/new-patients/" },
              { label: "Pay Bill", href: "https://www.tridentderm.com/pay-bill-online/" },
              { label: "Blog", href: "https://www.tridentderm.com/blog/" },
              { label: "Contact", to: "/contact" },
            ]],
          ].map(([title, links], ci) => (
            <div key={ci} className={`ft-col${ftOpen === ci ? ' ft-col-open' : ''}`}>
              <button className="ft-col-head" onClick={() => setFtOpen(ftOpen === ci ? null : ci)} style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24, background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                {title}
                <svg className="ft-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-lt)" strokeWidth="2" style={{ transition: "transform .3s", transform: ftOpen === ci ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="ft-col-links" style={{ overflow: "hidden" }}>
                {links.map((l, li) => (
                  l.href ?
                    <a key={li} href={l.href} target="_blank" rel="noopener noreferrer" className="ft-link">{l.label}</a>
                  : <Link key={li} to={l.to} className="ft-link">{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: "var(--gold-lt)", fontWeight: 600, marginBottom: 24 }}>Contact</div>
            <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, marginBottom: 14 }}>9295 Medical Plaza Dr<br/>Suite A<br/>North Charleston, SC 29406</p>
            <a href="tel:8437973960" style={{ fontSize: 14, color: "var(--gold-lt)", textDecoration: "none", fontWeight: 500 }}>(843) 797-3960</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 300, opacity: .35 }}>© {new Date().getFullYear()} Trident Dermatology. All rights reserved.</div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { label: "Privacy", to: "/privacy" },
              { label: "Disclaimer", to: "/privacy" },
              { label: "Accessibility", to: "/privacy" },
            ].map((s, i) => <Link key={i} to={s.to} className="ft-legal">{s.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
