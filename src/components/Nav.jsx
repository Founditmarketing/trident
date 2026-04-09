import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TridentLogo } from "./Icons";
import { useScroll } from "../hooks";

export default function Nav() {
  const sy = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navOp = Math.min(sy / 280, 1);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const NAV_ITEMS = [
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Providers", to: "/providers" },
    { label: "Patients", to: "/patients" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: menuOpen ? 1010 : 100, height: 76, padding: "0 clamp(20px,5vw,72px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: menuOpen ? "transparent" : (navOp > .05 ? `var(--nav-bg-solid)` : `var(--nav-bg)`), backdropFilter: menuOpen ? "none" : (navOp > .05 ? `blur(${navOp * 28}px) saturate(1.4)` : "none"), borderBottom: menuOpen ? "none" : (navOp > .05 ? `1px solid var(--nav-border)` : "1px solid transparent") }}>
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <TridentLogo />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "var(--teal)", lineHeight: 1 }}>Trident</div>
            <div style={{ fontSize: 7.5, letterSpacing: 4.5, textTransform: "uppercase", color: "var(--stone)", fontWeight: 500, marginTop: 2 }}>Dermatology</div>
          </div>
        </Link>
        <div className="d-nav" style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `lnk${isActive ? ' lnk-active' : ''}`}>{item.label}</NavLink>
          ))}
          <a href="tel:8437973960" className="btn btn-p" style={{ padding: "11px 28px", fontSize: 11 }}>(843) 797-3960</a>
        </div>
        <button className="m-tog" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 12 }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 1.5, background: "var(--teal)", borderRadius: 2, transition: "all .3s", transform: menuOpen ? (i===0?"rotate(45deg) translate(4.5px,4.5px)":i===2?"rotate(-45deg) translate(4.5px,-4.5px)":"scaleX(0)") : "none", opacity: menuOpen&&i===1?0:1 }} />)}
        </button>
      </nav>

      {menuOpen && <div className="mob-menu">
        {/* Close button inside the overlay so it's always tappable */}
        <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 24, right: 24, width: 48, height: 48, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <a href="tel:8437973960" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", fontWeight: 600, marginBottom: 16, animation: "textUp .4s ease both" }}>(843) 797-3960</a>
        {NAV_ITEMS.map((item, i) => (
          <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} style={{ background:"none",border:"none",fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:300,color:"var(--teal)",cursor:"pointer",animation:`textUp .5s ease ${i*.06}s both`,textDecoration:"none" }}>{item.label}</Link>
        ))}
        <a href="tel:8437973960" className="btn btn-g" style={{ marginTop:16,animation:"textUp .5s ease .3s both" }}>Call Now</a>
      </div>}
    </>
  );
}
