"use client";
import React, { useRef, useEffect } from "react";

export default function InfiniteMarquee({ logos = [], duration = 20 }) {
  const trackRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const setMarquee = () => {
      const width = Math.ceil(group.getBoundingClientRect().width);
      track.style.setProperty("--marquee-width", `${width}px`);
      track.style.setProperty("--marquee-duration", `${duration}s`);
    };

    // initial measure
    setMarquee();

    // after images load
    const images = group.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", setMarquee);
    });

    // update on resize
    window.addEventListener("resize", setMarquee);

    return () => {
      window.removeEventListener("resize", setMarquee);
      images.forEach((img) => img.removeEventListener("load", setMarquee));
    };
  }, [logos, duration]);

  return (
    <section className="w-full overflow-hidden bg-black py-10">
      <div ref={trackRef} className="marquee-track">
        <div ref={groupRef} className="marquee-group">
          {logos.map((logo, i) => (
            <div key={i} className="marquee-item">
              <img
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* duplicate group for seamless scroll */}
        <div className="marquee-group" aria-hidden="true">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              <img
                src={logo.src}
                alt=""
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee var(--marquee-duration, 20s) linear infinite;
        }

        .marquee-group {
          display: flex;
          gap: 2rem;
          flex-shrink: 0;
        }

        .marquee-item {
          flex: 0 0 auto;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(var(--marquee-width) * -1));
          }
        }

        /* optional: pause on hover */
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
