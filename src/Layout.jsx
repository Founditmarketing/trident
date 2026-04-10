import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", fontFamily: "'DM Sans',sans-serif", minHeight: "100vh" }}>
      <a href="#main-content" className="sr-only" style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden", zIndex: 9999 }} onFocus={e => { e.target.style.position = "fixed"; e.target.style.top = "10px"; e.target.style.left = "10px"; e.target.style.width = "auto"; e.target.style.height = "auto"; e.target.style.padding = "12px 24px"; e.target.style.background = "var(--teal)"; e.target.style.color = "white"; e.target.style.borderRadius = "8px"; e.target.style.fontSize = "14px"; }} onBlur={e => { e.target.style.position = "absolute"; e.target.style.left = "-9999px"; }}>Skip to main content</a>
      <div className="grain" />
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
