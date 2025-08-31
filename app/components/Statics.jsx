"use client"
import React, { useEffect, useRef, useState } from "react";

export default function Statics() {
  const refStarted = useRef(false);
  const [values, setValues] = useState({ a: 0, b: 0, c: 0 });
  const containerRef = useRef(null);

  // target numbers
  const targets = { a: 700, b: 1000, c: 80 };

  // easing functions
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  // animate helper
  function animateNumber({ from, to, duration, easing, onUpdate }) {
    const start = performance.now();
    const delta = to - from;
    let rafId = null;

    function frame(now) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easing(t);
      const current = from + delta * eased;
      onUpdate(current);
      if (t < 1) rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }

  function formatNumber(n) {
    const intVal = Math.round(n);
    return intVal.toLocaleString();
  }

  useEffect(() => {
    if (!containerRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !refStarted.current) {
            refStarted.current = true;

            animateNumber({
              from: 0,
              to: targets.a,
              duration: 1100,
              easing: easeOutCubic,
              onUpdate: (val) => setValues((s) => ({ ...s, a: val })),
            });

            animateNumber({
              from: 0,
              to: targets.b,
              duration: 1500,
              easing: easeOutCubic,
              onUpdate: (val) => setValues((s) => ({ ...s, b: val })),
            });

            animateNumber({
              from: 0,
              to: targets.c,
              duration: 2400,
              easing: easeOutExpo,
              onUpdate: (val) => setValues((s) => ({ ...s, c: val })),
            });

            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(containerRef.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full flex justify-center bg-gray-100 rounded-lg md:my-0 my-10"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Card 1 */}
        <div className="rounded-2xl p-6 text-center bg-white shadow">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span>{formatNumber(values.a)}</span>
            <span className="ml-1 text-sm sm:text-base md:text-xl align-top">M+</span>
          </div>
          <div className="mt-2 text-xs sm:text-sm">Rev Generated</div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl p-6 text-center bg-white shadow">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span>{formatNumber(values.b)}</span>
            <span className="ml-1 text-sm sm:text-base md:text-xl align-top">+</span>
          </div>
          <div className="mt-2 text-xs sm:text-sm">Ads Created</div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl p-6 text-center bg-white shadow">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span>{formatNumber(values.c)}</span>
            <span className="ml-1 text-sm sm:text-base md:text-xl align-top">+</span>
          </div>
          <div className="mt-2 text-xs sm:text-sm">Brands</div>
        </div>
      </div>
    </section>
  );
}
