"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Statics from "./Statics";

const words = [
  "Clarity.",
  "Emotion.",
  "Identity.",
  "Energy.",
  "Creativity.",
  "Authenticity.",
  "Originality.",
  "Intensity.",
  "Versatility.",
  "Personality.",
  "Symmetry.",
  "Fluidity.",
  "Ingenuity.",
  "Visibility.",
  "Elegance.",
  "Intention.",
  "Connection.",
  "Perception.",
];

const clientImages = [
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isClient]);

  const currentWord = isClient ? words[index] : words[0];

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row md:justify-between items-start px-6 md:px-20 py-0 bg-white">
      {/* Text Section */}
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-[2rem] md:text-6xl leading-tight text-gray-900">
          The Visual Design Studio Driven By{" "}
          <span className="inline-block min-w-[120px] min-h-[80px] font-bold relative align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                className="inline-flex flex-wrap gap-[1px] pb-2 overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                  exit: {
                    transition: {
                      staggerChildren: 0.03,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {currentWord.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                      exit: { y: -20, opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <Paragraph>
          We transform ideas and brands into visual stories that drive real
          growth, no fluff, just impactful design that delivers results.
        </Paragraph>

        <Paragraph>
          <div className="flex -space-x-2">
            {clientImages.map((src, index) => (
              <div key={index} className="relative">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-white object-cover"
                />
              </div>
            ))}
          </div>
          Trusted by 150+ businesses
        </Paragraph>
        <div className="flex gap-4 flex-wrap py-4">

          <Button text={"Contact Us"} />
        </div>


      </div>

      {/* Image Section */}
      <div className="flex-2 flex w-full md:max-w-1/2 aspect-square">
        <Image
          src="/graphic designer working.gif"
          alt="Hero"
          width={720}
          height={720}
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
