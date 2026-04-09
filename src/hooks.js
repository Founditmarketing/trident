import { useState, useEffect, useRef, useCallback } from "react";

export function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const f = () => setY(window.scrollY);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return y;
}

export function useReveal(t = 0.05) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  
  useEffect(() => {
    const el = r.current;
    if (!el) { setV(true); return; } // No element = just show it

    // Immediately check if element is already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.2 && rect.bottom > -100) {
      setV(true);
      return;
    }

    // IntersectionObserver with generous rootMargin
    let o;
    if ('IntersectionObserver' in window) {
      o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.disconnect();
        }
      }, { threshold: t, rootMargin: "200px 0px 200px 0px", root: null });
      o.observe(el);
    }

    // Scroll fallback — fires on every scroll tick until visible
    const checkVisible = () => {
      const r2 = el.getBoundingClientRect();
      if (r2.top < window.innerHeight * 1.2 && r2.bottom > -100) {
        setV(true);
        window.removeEventListener("scroll", checkVisible);
        if (o) o.disconnect();
      }
    };
    window.addEventListener("scroll", checkVisible, { passive: true });

    // Ultimate safety net: force visible after 3 seconds no matter what
    const timeout = setTimeout(() => { setV(true); }, 3000);

    return () => {
      if (o) o.disconnect();
      window.removeEventListener("scroll", checkVisible);
      clearTimeout(timeout);
    };
  }, [t]); // removed `v` from deps — this effect runs once on mount

  return [r, v];
}

export function useCountUp(end, duration = 2000, trigger = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, end, duration]);
  return val;
}
