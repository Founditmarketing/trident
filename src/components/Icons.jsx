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
