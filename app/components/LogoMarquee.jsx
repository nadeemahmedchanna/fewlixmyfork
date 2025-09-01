  "use client";

  import * as React from "react";

  export function Marquee({
    pauseOnHover = false,
    direction = "left",
    speed = 20,
    className = "",
    ...props
  }) {
    const marqueeRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    const clientLogos = [
      "/clients/1.svg",
      "/clients/2.svg",
      "/clients/3.svg",
      "/clients/4.svg",
      "/clients/5.svg",
      "/clients/6.svg",
    ];

    const marqueeClasses = [
      "flex items-center whitespace-nowrap",
      pauseOnHover ? "hover:[animation-play-state:paused]" : "",
      direction === "right" ? "animate-marquee-reverse" : "animate-marquee",
    ]
      .filter(Boolean)
      .join(" ");

    React.useEffect(() => {
      if (!marqueeRef.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.5 }
      );
      observer.observe(marqueeRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={marqueeRef}
        className={`w-full py-20 sm:py-52 bg-[#f1faee] z-10 relative ${className}`}
        {...props}
      >
        <div className="relative text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold relative inline-block">
            Our Trusted <span className="relative z-10">Partners</span>
          </h2>
        </div>

        <div className="relative flex overflow-hidden py-5">
          <div className={marqueeClasses} style={{ "--duration": `${speed}s` }}>
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-24 w-auto mx-8 flex-shrink-0 filter grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
