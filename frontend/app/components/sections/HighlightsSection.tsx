"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";
import VideoSlidePlayer from "../VideoSlidePlayer";
import { SLIDES } from "../../constants/slides";

function useWindowWidth() {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("resize", onStoreChange);
      return () => window.removeEventListener("resize", onStoreChange);
    },
    () => window.innerWidth,
    () => 1200
  );
}

export default function HighlightsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const windowWidth = useWindowWidth();
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isActiveSlideVisible, setIsActiveSlideVisible] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const activeSlideElement = slideRefs.current[activeSlide];
    if (!activeSlideElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActiveSlideVisible(entry.isIntersecting);
      },
      { threshold: 0.65 }
    );

    observer.observe(activeSlideElement);
    setIsActiveSlideVisible(activeSlideElement.getBoundingClientRect().width > 0);

    return () => {
      observer.disconnect();
    };
  }, [activeSlide, windowWidth]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveSlide((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveSlide((prev) => Math.min(SLIDES.length - 1, prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe && activeSlide < SLIDES.length - 1) {
      setActiveSlide((prev) => prev + 1);
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Calculations for carousel translation
  const slideWidth = windowWidth < 768 ? windowWidth * 0.85 : 650;
  const gap = 24;
  const trackOffset = (windowWidth / 2) - (slideWidth / 2) - (activeSlide * (slideWidth + gap));

  return (
    <section id="highlights" className="w-full py-28 bg-[#000000] border-t border-b border-zinc-900 overflow-hidden select-none">
      <div className="w-full flex flex-col items-center text-center px-6 mb-16">
        <ScrollAnimate>
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-white mb-4">
            Discover the Highlights
          </h2>
          <p className="text-[16px] md:text-[20px] text-zinc-400 max-w-2xl leading-relaxed font-normal">
            Explore the key innovations of the iPhone 17 Series before diving into the full story.
          </p>
        </ScrollAnimate>
      </div>

      {/* Slideshow Track Container */}
      <div className="w-full relative min-h-130 md:min-h-155 flex items-center">

        {/* Left Arrow (Desktop only) */}
        <button
          onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
          disabled={activeSlide === 0}
          className={`hidden md:flex absolute left-8 z-30 w-14 h-14 rounded-full bg-white text-black hover:bg-zinc-200 transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer border-none shadow-[0_4px_20px_rgba(0,0,0,0.5)] items-center justify-center`}
          aria-label="Previous Slide"
        >
          <Image
            src="/9525bc32609d8363148bb5a393cef1f748604915.svg"
            alt="Left"
            width={9}
            height={15}
            className="rotate-180 invert"
          />
        </button>

        {/* Slider Outer Window */}
        <div className="w-full overflow-hidden">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(${trackOffset}px)`,
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="flex gap-6 items-center w-max"
          >
            {SLIDES.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <div
                  key={slide.id}
                  ref={(element) => {
                    slideRefs.current[idx] = element;
                  }}
                  style={{ width: `${slideWidth}px` }}
                  className={`h-120 md:h-145 shrink-0 rounded-[28px] bg-[#111111] border transition-all duration-500 ease-out p-8 md:p-12 flex flex-col justify-between relative ${isActive
                    ? "scale-100 opacity-100 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                    : "scale-[0.93] opacity-40 pointer-events-none border-transparent"
                    }`}
                >
                  {/* Badge */}
                  <div className="absolute top-8 right-8 md:top-12 md:right-12 font-mono text-[14px] text-zinc-600 font-semibold">
                    {slide.badge}
                  </div>

                  {/* Canvas Container (Future Spline/R3F integration ready) */}
                  <div
                    className="w-full h-60 md:h-75 bg-[#080808] rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden mb-4 cursor-pointer"
                    onClick={() => setIsPaused((prev) => !prev)}
                  >
                    <VideoSlidePlayer
                      src={slide.videoSrc}
                      isActive={isActive}
                      isVisible={isActiveSlideVisible}
                      isPaused={isPaused}
                    />
                    {isPaused && (
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          setIsPaused(false);
                        }}
                        className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer border-none bg-transparent"
                        aria-label="Play Slideshow"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white shadow-[0_0_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
                          <svg className="h-6 w-6 fill-white translate-x-[0.5px]" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    )}
                    {/* Space reserved for R3F or Spline 3D Embed Canvas */}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <div className="text-[12px] uppercase tracking-wider font-bold text-zinc-500">
                      {slide.subtitle}
                    </div>
                    <h3 className="text-[22px] md:text-[28px] font-bold text-white tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-zinc-400 leading-relaxed font-normal line-clamp-3">
                      {slide.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow (Desktop only) */}
        <button
          onClick={() => setActiveSlide((prev) => Math.min(SLIDES.length - 1, prev + 1))}
          disabled={activeSlide === SLIDES.length - 1}
          className={`hidden md:flex absolute right-8 z-30 w-14 h-14 rounded-full bg-white text-black hover:bg-zinc-200 transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer border-none shadow-[0_4px_20px_rgba(0,0,0,0.5)] items-center justify-center`}
          aria-label="Next Slide"
        >
          <Image
            src="/9525bc32609d8363148bb5a393cef1f748604915.svg"
            alt="Right"
            width={9}
            height={15}
            className="invert"
          />
        </button>

      </div>

      {/* Navigation Pagination Dots with visual progress animation */}
      <div className="w-full flex items-center justify-center gap-3 mt-8">
        <div className="flex items-center gap-3">
          {SLIDES.map((_, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer border-none relative overflow-hidden ${isActive ? "w-10 bg-zinc-800" : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive && <div className="absolute left-0 top-0 h-full w-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
