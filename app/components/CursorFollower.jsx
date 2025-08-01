// components/CursorFollower.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  // 1rem offset in px
  const offset = 16;

  // lerp function for smooth movement
  const lerp = (start, end, amt) => start + (end - start) * amt;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX + offset;
      mousePos.current.y = e.clientY + offset;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smoothly move dotPos towards mousePos using lerp with easing factor 0.1
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.1);
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.1);

      setPosition({ x: dotPos.current.x, y: dotPos.current.y });

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-green-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_4px_rgba(34,197,94,0.7)]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}
