export default function ServicePanel({ num, title, desc, items, align, vis, delay, dark, image, video }) {
  const accents = { "01": "#17363A", "02": "#8B6F4E", "03": "#2E6B68" };
  const accent = accents[num] || "var(--teal)";
  return (
    <div style={{
      display: "flex", flexDirection: align === "right" ? "row-reverse" : "row",
      gap: "clamp(32px,5vw,80px)", alignItems: "center",
      opacity: vis ? 1 : 0.01, transform: vis ? "none" : `translateX(${align === "right" ? 30 : -30}px)`,
      transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`, marginBottom: 100,
    }} className="svc-panel">
      <div style={{
        flex: "0 0 clamp(200px,24vw,340px)", aspectRatio: "3/4", borderRadius: 24, position: "relative", overflow: "hidden",
        boxShadow: dark ? "0 32px 80px rgba(0,0,0,0.2)" : "0 24px 60px rgba(23,54,58,0.08)",
      }}>
        {video ? (
          <video src={video} poster={image} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
        )}
        <div style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(to top, rgba(23,54,58,.65), transparent 60%)" : "linear-gradient(to top, rgba(0,0,0,.35), transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 24, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 300, color: "rgba(255,255,255,.25)", lineHeight: 1 }}>{num}</span>
          <div style={{ width: 1, height: 28, background: "rgba(255,255,255,.15)" }} />
          <span style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{num === "01" ? "Clinical" : num === "02" ? "Aesthetic" : "Surgical"}</span>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ width: 32, height: 3, background: accent, borderRadius: 2, marginBottom: 20 }} />
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,46px)", fontWeight: 300, color: "var(--teal)", lineHeight: 1.15, marginBottom: 16 }}>{title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, maxWidth: 480, marginBottom: 28 }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {items.map((it, i) => (
            <span key={i} className="svc-tag">{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
