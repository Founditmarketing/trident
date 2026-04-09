import { useEffect, useRef } from "react";

export default function GradientMesh() {
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
