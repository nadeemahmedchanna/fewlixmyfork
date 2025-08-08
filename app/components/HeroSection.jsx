'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Paragraph from './ui/Paragraph';
import Avtars from './Avtars';
import Button from './ui/Button';
import Statics from './Statics';

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
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-20 py-16 bg-white">
      {/* Text Section */}
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl leading-tight text-gray-900">
          The Visual Design Studio Driven By{' '}
          <span className="inline-block min-w-[120px] h-[73px] font-bold relative overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                className="inline-flex flex-wrap gap-[1px] pb-2"
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
                {currentWord.split('').map((char, i) => (
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
          We transform ideas and brands into visual stories that drive real growth, no fluff, just impactful design that delivers results.
        </Paragraph>

        <div className='flex gap-4 flex-wrap py-4'>
          <Avtars />
          <Button text={"Contact Us"} />
        </div>

        <Paragraph>
          Trusted by 150+ businesses 
        </Paragraph>

        <Statics />
      </div>

      {/* Image Section */}
      <div className="flex-2 flex w-full md:max-w-1/2 aspect-square">

          <Image
            src="/graphic designer working.gif" // Replace with your own image in /public
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
