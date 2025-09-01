"use client";

import React, { useEffect, useState, useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Section Wrapper ---
export function AnimatedSection({ className, children, ...props }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // triggers when 10% visible
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-900 dark:bg-black transition-all duration-700 ease-[cubic-bezier(0.6,0.6,0,1)]",
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

// --- Visual2 with Scroll Animation ---
export function Visual2({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808015",
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-[180px] w-full overflow-hidden rounded-t-lg"
    >
      <Layer1 hovered={inView} color={mainColor} secondaryColor={secondaryColor} />
      <Layer2 color={mainColor} inView={inView} />
      <Layer3 color={mainColor} inView={inView} />
      <Layer4 color={mainColor} secondaryColor={secondaryColor} hovered={inView} />
      <EllipseGradient color={mainColor} />
      <GridLayer color={gridColor} />
    </div>
  );
};

// --- Example Layer1 ---
const Layer1 = ({ hovered, color, secondaryColor }) => {
  const [mainProgress, setMainProgress] = useState(12.5);
  const [secondaryProgress, setSecondaryProgress] = useState(0);

  useEffect(() => {
    if (hovered) {
      const timeout = setTimeout(() => {
        setMainProgress(66);
        setSecondaryProgress(100);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setMainProgress(12.5);
      setSecondaryProgress(0);
    }
  }, [hovered]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const mainDashoffset = circumference - (mainProgress / 100) * circumference;
  const secondaryDashoffset =
    circumference - (secondaryProgress / 100) * circumference;

  return (
    <div
      className={`absolute top-0 left-0 z-[7] flex h-[360px] w-full items-center justify-center transition-transform duration-700 ${
        hovered ? "-translate-y-[90px] scale-110" : "translate-y-0 scale-100"
      }`}
    >
      <div className="relative flex h-[120px] w-[120px] items-center justify-center text-[#00000050] dark:text-white">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth="10" fill="transparent" opacity={0.2} />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={secondaryColor}
            strokeWidth="14"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={secondaryDashoffset}
            transform="rotate(-90 50 50)"
            style={{ transition: "stroke-dashoffset 0.7s ease" }}
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="14"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={mainDashoffset}
            transform="rotate(-90 50 50)"
            style={{ transition: "stroke-dashoffset 0.7s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-gilroy text-xl text-black dark:text-white">
            {hovered
              ? secondaryProgress > 66
                ? secondaryProgress
                : mainProgress
              : mainProgress}
            %
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Ellipse Gradient & Grid ---
const EllipseGradient = ({ color }) => (
  <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
    <svg width="356" height="196" viewBox="0 0 356 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="356" height="180" fill="url(#paint0_radial)" />
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178 98) rotate(90) scale(98 178)">
          <stop stopColor={color} stopOpacity="0.25" />
          <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const GridLayer = ({ color }) => (
  <div
    style={{ "--grid-color": color }}
    className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
  />
);
