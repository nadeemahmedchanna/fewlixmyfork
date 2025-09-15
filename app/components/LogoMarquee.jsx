"use client"

import { useState } from "react"
import Image from "next/image"

export function Marquee() {
  const [pausedRow, setPausedRow] = useState(null)

  // Sequence of client logos (repeat some for flow)
  const logos = [
    { id: 1, image: "/clients/1.svg" },
    { id: 2, image: "/clients/2.svg" },
    { id: 3, image: "/clients/3.svg" },
    { id: 4, image: "/clients/4.svg" },
    { id: 5, image: "/clients/5.svg" },
    { id: 6, image: "/clients/6.svg" },
    { id: 7, image: "/clients/2.svg" },
    { id: 8, image: "/clients/4.svg" },
  ]

  const secondRowLogos = [
    { id: 1, image: "/clients/6.svg" },
    { id: 2, image: "/clients/5.svg" },
    { id: 3, image: "/clients/3.svg" },
    { id: 4, image: "/clients/1.svg" },
    { id: 5, image: "/clients/2.svg" },
    { id: 6, image: "/clients/4.svg" },
    { id: 7, image: "/clients/6.svg" },
    { id: 8, image: "/clients/1.svg" },
  ]

  const LogoCard = ({ logo, rowId }) => (
    <div
      className="flex-shrink-0 mx-3 transition-transform duration-300 hover:scale-110"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-28 h-20 sm:w-32 sm:h-24 lg:w-36 lg:h-28 rounded-2xl bg-white border border-neutral-200 shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-lime-400/40 transition-all p-4">
        <div className="relative w-full h-full">
          <Image
            src={logo.image}
            alt={`Client ${logo.id}`}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Meet our <span className="text-lime-300">top-tier</span>
            <br />
            customers
          </h2>
          <button className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Learn More
          </button>
        </div>

        {/* Logo Marquee */}
        <div className="relative space-y-8">
          {/* First Row - Left → Right */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div
              className={`flex whitespace-nowrap scroll-right ${pausedRow === "first" ? "paused" : ""}`}
              style={{ animationPlayState: pausedRow === "first" ? "paused" : "running" }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Right → Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div
              className={`flex whitespace-nowrap scroll-left ${pausedRow === "second" ? "paused" : ""}`}
              style={{ animationPlayState: pausedRow === "second" ? "paused" : "running" }}
            >
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes + animation styles */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  )
}
