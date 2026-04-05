import { useEffect, useRef, useState } from "react";

export function GradientMesh() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let mx = 0.5, my = 0.5, raf;
    const resize = () => { c.width = c.offsetWidth * 1.5; c.height = c.offsetHeight * 1.5; };
    resize();
    const onMove = (e) => { const r = c.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; };
    let t = 0;
    const draw = () => {
      t += 0.003;
      const w = c.width, h = c.height;
      ctx.clearRect(0, 0, w, h);
      const g1 = ctx.createRadialGradient(w*(0.3+mx*0.2+Math.sin(t)*0.05), h*(0.3+my*0.15+Math.cos(t*0.7)*0.05), 0, w*0.4, h*0.4, w*0.45);
      g1.addColorStop(0, "rgba(184,149,106,0.12)"); g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h);
      const g2 = ctx.createRadialGradient(w*(0.7-mx*0.15+Math.cos(t*0.8)*0.04), h*(0.6-my*0.1+Math.sin(t*0.6)*0.04), 0, w*0.5, h*0.5, w*0.4);
      g2.addColorStop(0, "rgba(26,58,58,0.07)"); g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
      const g3 = ctx.createRadialGradient(w*(0.5+Math.sin(t*1.2)*0.08), h*(0.2+Math.cos(t*0.9)*0.06), 0, w*0.3, h*0.3, w*0.35);
      g3.addColorStop(0, "rgba(212,188,168,0.08)"); g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3; ctx.fillRect(0, 0, w, h);
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

export function AnimatedTrident({ size = 300, delay = 0 }) {
  return (
    <svg viewBox="0 0 100 140" width={size} height={size * 1.4} fill="none" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" style={{ overflow: "visible" }}>
      <path className="tri-draw" d="M50 15 V125" strokeWidth="1.5" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay}s forwards` }} />
      <path className="tri-draw" d="M50 15 Q50 35 35 28 L15 18" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.3}s forwards` }} />
      <path className="tri-draw" d="M50 15 Q50 35 65 28 L85 18" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.3}s forwards` }} />
      <path className="tri-draw" d="M13 16 L17 20" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.6}s forwards` }} />
      <path className="tri-draw" d="M87 16 L83 20" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.6}s forwards` }} />
      <path className="tri-draw" d="M48 12 L52 12" strokeWidth="1.5" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.6}s forwards` }} />
      <path className="tri-draw" d="M38 110 Q50 120 62 110" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 0.8}s forwards` }} />
      <path className="tri-draw" d="M25 50 Q50 60 75 50" strokeWidth="0.5" opacity="0.4" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 1}s forwards` }} />
      <path className="tri-draw" d="M30 70 Q50 78 70 70" strokeWidth="0.5" opacity="0.3" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: `triDraw 2.5s ease ${delay + 1.2}s forwards` }} />
    </svg>
  );
}

export function TridentLogo({ color = "var(--teal)", height = 29 }) {
  const w = height * 60 / 80;
  return (
    <svg viewBox="0 0 60 80" width={w} height={height} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <path d="M30 12V72"/><path d="M30 12L14 24"/><path d="M30 12L46 24"/>
      <path d="M12 22L14 24L16 22" strokeWidth="2"/><path d="M44 22L46 24L48 22" strokeWidth="2"/>
      <path d="M28 8L32 8" strokeWidth="3"/><path d="M24 62Q30 68 36 62" strokeWidth="2"/>
    </svg>
  );
}

export function StarIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
}

export function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "var(--gold)"} strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div className="faq-answer">
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, maxWidth: 600 }}>{a}</p>
      </div>
    </div>
  );
}

export function ServicePanel({ num, title, desc, items, align, vis, delay, dark }) {
  return (
    <div style={{
      display: "flex", flexDirection: align === "right" ? "row-reverse" : "row",
      gap: "clamp(32px,5vw,80px)", alignItems: "center",
      opacity: vis ? 1 : 0, transform: vis ? "none" : `translateX(${align === "right" ? 60 : -60}px)`,
      transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`, marginBottom: 100,
    }} className="svc-panel">
      <div style={{
        flex: "0 0 clamp(160px,20vw,280px)", aspectRatio: "1/1.1", borderRadius: 24, position: "relative", overflow: "hidden",
        background: dark ? "linear-gradient(155deg, var(--teal), #1E4A4A)" : "linear-gradient(155deg, var(--cream), rgba(184,149,106,0.08))",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: dark ? "none" : "1px solid rgba(184,149,106,0.1)",
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(80px,12vw,140px)", fontWeight: 300, color: dark ? "rgba(255,255,255,0.07)" : "rgba(26,58,58,0.05)", position: "absolute", lineHeight: 1 }}>{num}</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, fontStyle: "italic", color: dark ? "var(--gold-light)" : "var(--gold)", position: "relative", zIndex: 2 }}>{num}</span>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,46px)", fontWeight: 300, color: "var(--teal)", lineHeight: 1.15, marginBottom: 16 }}>{title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, maxWidth: 480, marginBottom: 28 }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {items.map((it, i) => (
            <span key={i} className="hov" style={{ padding: "9px 20px", borderRadius: 40, fontSize: 13, fontWeight: 400, background: "rgba(26,58,58,0.04)", border: "1px solid rgba(26,58,58,0.06)", color: "var(--charcoal)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
              onMouseEnter={e => { e.target.style.background = "var(--teal)"; e.target.style.color = "white"; e.target.style.borderColor = "var(--teal)"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(26,58,58,0.04)"; e.target.style.color = "var(--charcoal)"; e.target.style.borderColor = "rgba(26,58,58,0.06)"; }}
            >{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
