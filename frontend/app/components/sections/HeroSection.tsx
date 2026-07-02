"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { scrollToSection } from "../../utils/scroll";
import type { ColorFinish } from "../../types";

interface HeroSectionProps {
  selectedColor: ColorFinish;
}

export default function HeroSection({ selectedColor }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-between pb-12 md:pb-20 pt-0 overflow-hidden">
      {/* Dynamic Glow Behind Hero Image based on selected titanium color */}
      <div className={`absolute inset-0 bg-gradient-to-b ${selectedColor.glowClass} transition-all duration-700 ease-in-out pointer-events-none -z-10`} />

      {/* <div className="w-full max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center pt-8">
        <span className="text-[14px] uppercase tracking-[0.25em] font-semibold text-zinc-400 mb-2 animate-fade-in-up">
          iPhone 17 Pro
        </span>
        <h1 className="text-[56px] md:text-[80px] font-bold tracking-tight leading-tight text-gradient mb-6 animate-fade-in-up">
          Hello, Future.
        </h1>
      </div> */}

      {/* Widescreen optimized video showcase instead of 3D phone model image */}
      <div className="w-full z-10 mt-0 mb-6 flex justify-center">
        <div className="relative w-full aspect-video bg-zinc-950 group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dz4zobnat/video/upload/v1782977769/iphone-17-pro-hero_ulokdc.mp4"
            poster="https://res.cloudinary.com/dz4zobnat/video/upload/so_0,w_1920,q_auto/v1782977769/iphone-17-pro-hero_ulokdc.jpg"
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => {
              if (!hasEnded) setIsPlaying(false);
            }}
            onEnded={() => {
              setHasEnded(true);
              setIsPlaying(false);
            }}
          />
        </div>
      </div>

      {/* Hero Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10 animate-fade-in-up">
        <button
          onClick={() => scrollToSection("cta")}
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-[17px] cursor-pointer border-none"
        >
          Buy
        </button>
        <button
          onClick={() => scrollToSection("industrial-design")}
          className="px-8 py-3 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-[17px] flex items-center gap-2 group cursor-pointer bg-transparent border-none"
        >
          Learn more
          <Image
            src="/9525bc32609d8363148bb5a393cef1f748604915.svg"
            alt="Arrow icon"
            width={9}
            height={15}
            className="invert group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  );
}
