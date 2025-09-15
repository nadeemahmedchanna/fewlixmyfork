"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function TwoRowCarousel({ images = [] }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [secondRowImages, setSecondRowImages] = useState([]);
  const [hovered, setHovered] = useState(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSecondRowImages(shuffleArray(images));
  }, [images]);

  const imageSize = isSmallScreen ? 200 : 500;
  const scrollSpeed = isSmallScreen ? 20 : 40;
  const repeatCount = 5;

  const allImagesRow1 = Array.from({ length: repeatCount }, () => images).flat();
  const allImagesRow2 = Array.from({ length: repeatCount }, () => secondRowImages).flat();

  const handleMouseEnter = (i) => {
    hoverTimeout.current = setTimeout(() => setHovered(i), 500); // 500ms delay
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHovered(null);
  };

  const getImageClasses = (i) => {
    if (hovered === null) return "flex-shrink-0 mx-3 rounded-xl overflow-hidden transform transition duration-300";
    return hovered === i
      ? "flex-shrink-0 mx-3 rounded-xl overflow-hidden transform transition duration-300 scale-105"
      : "flex-shrink-0 mx-3 rounded-xl overflow-hidden transform transition duration-300 grayscale blur-sm";
  };

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Row 1 */}
      <motion.div
        className="flex mb-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: scrollSpeed, ease: "linear" }}
      >
        {allImagesRow1.map((src, i) => (
          <div
            key={i}
            className={getImageClasses(i)}
            style={{ width: imageSize, height: imageSize }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              width={imageSize}
              height={imageSize}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: scrollSpeed, ease: "linear" }}
      >
        {allImagesRow2.map((src, i) => (
          <div
            key={i + "-2"}
            className={getImageClasses(i + 100)}
            style={{ width: imageSize, height: imageSize }}
            onMouseEnter={() => handleMouseEnter(i + 100)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              width={imageSize}
              height={imageSize}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
