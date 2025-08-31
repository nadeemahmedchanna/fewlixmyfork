"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/vitalis.png",
  "/logos/coolandcool.png",
  "/logos/healingshilajit.png",
  "/logos/glowzi.png",
  "/logos/eushbi.png",
  "/logos/pakshilajit.png",
  "/logos/mamaminies.png",
  "/logos/linearpharma.png",
  "/logos/honeyx.png",
  "/logos/urapra.png",
  "/logos/dopamean.png",
  "/logos/ruralgallery.png",
  "/logos/hometrends.png",
  "/logos/snuggles.png",
];

const LogoMarquee = () => {
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      {/* TOP ROW */}
      <motion.div
        className="flex gap-6 mb-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-gray-200 rounded-lg w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={128}
              height={80}
              className="object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </motion.div>

      {/* BOTTOM ROW */}
      <motion.div
        className="flex gap-6 "
        animate={{ x: ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={`row2-${i}`}
            className="flex-shrink-0 bg-gray-200 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition"
          >
            <Image
              src={src}
              alt={`logo-${i}`}
              width={128}
              height={80}
              className="object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;
