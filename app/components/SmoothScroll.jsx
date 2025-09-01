// app/components/SmoothScroll.jsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!lenisRef.current) {
      // Initialize Lenis
      lenisRef.current = new Lenis({
        duration: 0.8,          // low duration = responsive scroll
        easing: (t) => t,       // linear easing = natural movement
        smooth: true,           // enable gradual stopping
        direction: "vertical",
        gestureDirection: "vertical",
        wheelMultiplier: 1,     // adjust scroll speed if needed
        infinite: false,         // prevents hard stop at the end
      });

      // RAF loop
      const raf = (time) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }, []);

  return <div>{children}</div>;
}
