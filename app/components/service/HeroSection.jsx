"use client";

import Button from "../../components/ui/Button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import Image from "next/image";

const defaultProps = {
  tagline: "MindSpace",
  heading: "Never forget what was said in a meeting again",
  description:
    "AI that joins, transcribes, and transforms your meetings into structured knowledge",
  features: [
    "Deal progress tracking",
    "Customer sentiment analysis",
    "Automatic CRM updates",
  ],
  cta: {
    primary: { label: "Try for free", onClick: undefined },
    secondary: { label: "How it works", onClick: undefined },
  },
  image: {
    src: "/Hero.png",
    alt: "Hero visual",
  },
};

export function HeroSection(props) {
  const { tagline, heading, description, features, cta, image } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className="bg-secondary section-padding-y px-6"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="flex flex-col gap-3">
            {/* Tagline (solid green, no outline container) */}
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-md text-sm lg:text-base font-semibold tracking-wide uppercase w-fit">
              {tagline}
            </span>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl lg:text-7xl font-black leading-[1.1] text-foreground"
            >
              {heading}
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-3 md:gap-4">
            {features.map((feature, idx) => (
              <div className="flex items-start gap-3" key={idx}>
                <div className="pt-1">
                  <Check className="text-primary h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <span className="text-base lg:text-lg text-card-foreground font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="text-lg font-semibold py-3 px-6 " text='Get Started' link="#cta"/>

          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="h-full w-full rounded-xl object-cover shadow-lg"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

HeroSection.defaultProps = defaultProps;
