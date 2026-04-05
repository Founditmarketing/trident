import { useState, useEffect, useRef } from "react";

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
    if (!el) return;

    // Safety: if IO never fires (scroll container mismatch), use scroll fallback
    const checkVisible = () => {
      if (v) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 1.1 && rect.bottom > 0;
      if (inView) setV(true);
    };

    // Primary: IntersectionObserver with generous rootMargin
    let o;
    if ('IntersectionObserver' in window) {
      o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setV(true);
          o.disconnect();
          window.removeEventListener("scroll", checkVisible);
        }
      }, { threshold: t, rootMargin: "0px 0px 100px 0px", root: null });
      o.observe(el);
    }

    // Fallback: scroll-based check (catches IO misses from overflow containers)
    window.addEventListener("scroll", checkVisible, { passive: true });
    // Also check on mount (elements already in view)
    requestAnimationFrame(checkVisible);

    return () => {
      if (o) o.disconnect();
      window.removeEventListener("scroll", checkVisible);
    };
  }, [t, v]);
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
