import { useState } from "react";

export default function FaqItem({ q, a, index = 0 }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={panelId}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? "white" : "var(--gold)"} strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div className="faq-answer" id={panelId} role="region" aria-labelledby={panelId}>
        <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--stone)", fontWeight: 300, maxWidth: 600 }}>{a}</p>
      </div>
    </div>
  );
}
