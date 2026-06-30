"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Color selector option type
type ColorFinish = {
  id: "natural" | "black" | "silver" | "blue";
  name: string;
  hex: string;
  filterClass: string;
  glowClass: string;
};

const COLOR_FINISHES: ColorFinish[] = [
  {
    id: "natural",
    name: "Natural Titanium",
    hex: "#b2aba1",
    filterClass: "filter-natural",
    glowClass: "from-amber-500/10 via-yellow-600/5 to-transparent",
  },
  {
    id: "black",
    name: "Space Black",
    hex: "#3c3c3d",
    filterClass: "filter-space-black",
    glowClass: "from-zinc-800/20 via-zinc-900/10 to-transparent",
  },
  {
    id: "silver",
    name: "White Titanium",
    hex: "#e5e6e1",
    filterClass: "filter-silver",
    glowClass: "from-slate-200/10 via-zinc-400/5 to-transparent",
  },
  {
    id: "blue",
    name: "Cobalt Titanium",
    hex: "#2f394d",
    filterClass: "filter-deep-blue",
    glowClass: "from-blue-600/15 via-indigo-900/5 to-transparent",
  },
];

// Custom Intersection Observer wrapper for fade-in animations
function ScrollAnimate({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      {children}
    </div>
  );
}

// Define Slides Data Structure for the Highlights Slideshow
interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  illustration: React.ReactNode;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: "01",
    title: "Aerospace-Grade Titanium",
    subtitle: "Design & Materials",
    description: "Impossibly strong. Strikingly light. Precision-machined chassis finished in a micro-blasted satin texture that redefines modern durability.",
    illustration: (
      <svg className="w-full h-full p-8 text-white opacity-90 transition-transform duration-500 hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="10" width="50" height="80" rx="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        <rect x="23" y="8" width="54" height="84" rx="14" stroke="currentColor" strokeWidth="2" />
        <path d="M23 20H77" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="38" cy="28" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="48" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="38" r="1.5" fill="currentColor" />
        <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <line x1="23" y1="50" x2="77" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      </svg>
    )
  },
  {
    id: 2,
    badge: "02",
    title: "A Colossal Leap in Power",
    subtitle: "A19 Pro Chip",
    description: "Built on a pioneering 3nm node, the A19 Pro delivers unmatched processing speeds and sets a new industry standard for power efficiency.",
    illustration: (
      <svg className="w-full h-full p-12 text-white opacity-90 transition-transform duration-500 hover:rotate-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="60" height="60" rx="10" fill="url(#chipBg)" stroke="currentColor" strokeWidth="2.5" />
        <rect x="28" y="28" width="44" height="44" rx="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.7" />
        <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="monospace">A19 PRO</text>
        <path d="M15 30H20M15 40H20M15 50H20M15 60H20M15 70H20" stroke="currentColor" strokeWidth="2" />
        <path d="M80 30H85M80 40H85M80 50H85M80 60H85M80 70H85" stroke="currentColor" strokeWidth="2" />
        <path d="M30 15V20M40 15V20M50 15V20M60 15V20M70 15V20" stroke="currentColor" strokeWidth="2" />
        <path d="M30 80V85M40 80V85M50 80V85M60 80V85M70 80V85" stroke="currentColor" strokeWidth="2" />
        <defs>
          <radialGradient id="chipBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 3,
    badge: "03",
    title: "Pro Camera. Ultra Vision.",
    subtitle: "Camera System",
    description: "A new triple-lens array optimized for spatial recording. Capture stunning high-resolution details and relive them in immersive 3D.",
    illustration: (
      <svg className="w-full h-full p-8 text-white opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="38" cy="38" r="14" stroke="currentColor" strokeWidth="2.5" fill="#111" />
        <circle cx="38" cy="38" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="35" cy="35" r="3" fill="white" opacity="0.3" />
        <circle cx="62" cy="50" r="14" stroke="currentColor" strokeWidth="2.5" fill="#111" />
        <circle cx="62" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="59" cy="47" r="3" fill="white" opacity="0.3" />
        <circle cx="38" cy="62" r="14" stroke="currentColor" strokeWidth="2.5" fill="#111" />
        <circle cx="38" cy="62" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="35" cy="59" r="3" fill="white" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 4,
    badge: "04",
    title: "Intelligence, Personified.",
    subtitle: "Apple Intelligence",
    description: "Context-aware AI deeply integrated into your daily flow. Helps you write, edit, and search effortlessly while preserving absolute privacy.",
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50 C 30 20, 40 80, 50 50 C 60 20, 70 80, 90 50" stroke="url(#intelWave1)" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <path d="M10 50 C 25 70, 45 30, 55 50 C 65 70, 75 30, 90 50" stroke="url(#intelWave2)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M10 50 C 35 40, 40 60, 50 50 C 60 40, 65 60, 90 50" stroke="url(#intelWave3)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <defs>
          <linearGradient id="intelWave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4500" />
            <stop offset="50%" stopColor="#9b59b6" />
            <stop offset="100%" stopColor="#3498db" />
          </linearGradient>
          <linearGradient id="intelWave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff007f" />
            <stop offset="50%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#2ecc71" />
          </linearGradient>
          <linearGradient id="intelWave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#9b59b6" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 5,
    badge: "05",
    title: "Power for the Long Run",
    subtitle: "Battery Life",
    description: "Up to 30 hours of continuous video playback. Highly efficient silicon coupled with advanced battery chemistry keeps you productive day and night.",
    illustration: (
      <svg className="w-full h-full p-12 text-white opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="20" width="30" height="60" rx="8" stroke="currentColor" strokeWidth="2.5" />
        <rect x="42" y="14" width="16" height="6" rx="2" fill="currentColor" />
        <rect x="39" y="68" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="39" y="56" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="39" y="44" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="39" y="32" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <path d="M50 35 L43 50 H51 L46 65 L57 48 H49 Z" fill="white" stroke="black" strokeWidth="1" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: 6,
    badge: "06",
    title: "iOS 26. Intelligent to the Core.",
    subtitle: "iOS 26",
    description: "Experience our most intuitive software yet. Dynamic homescreens, context-aware system widgets, and seamlessly fluid animations designed for the future.",
    illustration: (
      <svg className="w-full h-full p-10 text-white opacity-90 transition-transform duration-500 hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="10" width="50" height="80" rx="12" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <rect x="35" y="15" width="30" height="6" rx="3" fill="currentColor" opacity="0.9" />
        <rect x="32" y="28" width="16" height="16" rx="4" fill="url(#iosGrad1)" stroke="currentColor" strokeWidth="0.5" />
        <rect x="52" y="28" width="16" height="16" rx="4" fill="url(#iosGrad2)" stroke="currentColor" strokeWidth="0.5" />
        <rect x="32" y="48" width="36" height="18" rx="5" fill="#151515" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="57" r="4" fill="#ff4500" />
        <path d="M46 57 H60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="38" cy="74" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="48" cy="74" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="58" cy="74" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="62" cy="74" r="3" fill="currentColor" opacity="0.7" />
        <defs>
          <linearGradient id="iosGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5e62" />
            <stop offset="100%" stopColor="#ff9966" />
          </linearGradient>
          <linearGradient id="iosGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36d1dc" />
            <stop offset="100%" stopColor="#5b86e5" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 7,
    badge: "07",
    title: "Four Distinct Finishes",
    subtitle: "Available Colors",
    description: "Natural Titanium, Space Black, White Titanium, and Cobalt Titanium. Selected colors glow dynamically to match your personal standard.",
    illustration: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
        <circle cx="36" cy="38" r="14" fill="url(#s_gradNatural)" stroke="white" strokeWidth="0.5" />
        <circle cx="64" cy="38" r="14" fill="url(#s_gradBlack)" stroke="white" strokeWidth="0.5" />
        <circle cx="36" cy="62" r="14" fill="url(#s_gradSilver)" stroke="white" strokeWidth="0.5" />
        <circle cx="64" cy="62" r="14" fill="url(#s_gradBlue)" stroke="white" strokeWidth="0.5" />
        <defs>
          <radialGradient id="s_gradNatural" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e5ded4" />
            <stop offset="45%" stopColor="#b2aba1" />
            <stop offset="100%" stopColor="#4c473f" />
          </radialGradient>
          <radialGradient id="s_gradBlack" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#666667" />
            <stop offset="45%" stopColor="#3c3c3d" />
            <stop offset="100%" stopColor="#1a1a1b" />
          </radialGradient>
          <radialGradient id="s_gradSilver" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#e5e6e1" />
            <stop offset="100%" stopColor="#a8a9a4" />
          </radialGradient>
          <radialGradient id="s_gradBlue" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#5d729a" />
            <stop offset="45%" stopColor="#2f394d" />
            <stop offset="100%" stopColor="#111621" />
          </radialGradient>
        </defs>
      </svg>
    )
  }
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<ColorFinish>(COLOR_FINISHES[0]);
  const [batteryCharge, setBatteryCharge] = useState(30);

  // Highlights Slideshow States
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isMounted, setIsMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Setup window width on mount
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset progress when activeSlide changes
  useEffect(() => {
    setSlideProgress(0);
  }, [activeSlide]);

  // Slideshow auto-run timer (resets on activeSlide change, pauses if isPaused is true)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1; // 1% every 50ms = 5 seconds total
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, activeSlide]);

  // Handle slide transition when progress reaches 100%
  useEffect(() => {
    if (slideProgress >= 100) {
      setActiveSlide((prev) => (prev >= SLIDES.length - 1 ? 0 : prev + 1));
    }
  }, [slideProgress]);

  // Pulse battery charging simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryCharge((prev) => {
        if (prev >= 100) return 30; // reset
        return prev + 10;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Calculations for carousel translation
  const slideWidth = windowWidth < 768 ? windowWidth * 0.85 : 650;
  const gap = 24;
  const trackOffset = isMounted ? (windowWidth / 2) - (slideWidth / 2) - (activeSlide * (slideWidth + gap)) : 0;

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* 1. Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/75 border-b border-white/5 py-3 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg md:text-xl font-semibold tracking-tight text-white cursor-pointer hover:text-zinc-300 transition-colors"
          >
            iPhone 17 Pro
          </div>

          <div className="hidden md:flex items-center gap-8 text-[14px] text-zinc-400 font-medium">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Store</button>
            <button onClick={() => scrollToSection("industrial-design")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Mac</button>
            <button onClick={() => scrollToSection("performance")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">iPad</button>
            <button onClick={() => scrollToSection("camera")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">iPhone</button>
            <button onClick={() => scrollToSection("colors")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Watch</button>
            <button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">AirPods</button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("colors")}
              className="text-[13px] font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer border-none"
            >
              Store
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="text-[13px] font-semibold bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 transition-colors cursor-pointer border-none"
            >
              Buy
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-between py-12 md:py-20 overflow-hidden">
        {/* Dynamic Glow Behind Hero Image based on selected titanium color */}
        <div className={`absolute inset-0 bg-gradient-to-b ${selectedColor.glowClass} transition-all duration-700 ease-in-out pointer-events-none -z-10`} />

        <div className="w-full max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center pt-8">
          <span className="text-[14px] uppercase tracking-[0.25em] font-semibold text-zinc-400 mb-2 animate-fade-in-up">
            iPhone 17 Pro
          </span>
          <h1 className="text-[56px] md:text-[80px] font-bold tracking-tight leading-tight text-gradient mb-6 animate-fade-in-up">
            Hello, Future.
          </h1>
        </div>

        {/* 3D phone model render with filters applied */}
        <div className="relative w-full max-w-4xl px-6 flex items-center justify-center min-h-[400px] md:min-h-[500px] z-10 my-4">
          <div className="relative w-full max-w-[800px] aspect-[1.6/1] animate-float">
            <Image
              src="/ac5baebfc16889e064f30602d6c5327eaa9896ba.png"
              alt="iPhone 17 Pro"
              fill
              priority
              className={`object-contain transition-all duration-700 ease-in-out ${selectedColor.filterClass}`}
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

      {/* 2.5 Discover the Highlights Slideshow Section */}
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
        <div className="w-full relative min-h-[520px] md:min-h-[620px] flex items-center">

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
                    style={{ width: `${slideWidth}px` }}
                    className={`h-[480px] md:h-[580px] shrink-0 rounded-[28px] bg-[#111111] border transition-all duration-500 ease-out p-8 md:p-12 flex flex-col justify-between relative ${isActive
                      ? "scale-100 opacity-100 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                      : "scale-[0.93] opacity-40 pointer-events-none border-transparent"
                      }`}
                  >
                    {/* Badge */}
                    <div className="absolute top-8 right-8 md:top-12 md:right-12 font-mono text-[14px] text-zinc-600 font-semibold">
                      {slide.badge}
                    </div>

                    {/* Canvas Container (Future Spline/R3F integration ready) */}
                    <div className="w-full h-[240px] md:h-[300px] bg-[#080808] rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden mb-4">
                      {slide.illustration}
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
                  {isActive && (
                    <div
                      style={{ width: `${slideProgress}%` }}
                      className="absolute left-0 top-0 h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pause / Play Control Button */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-12 h-12 rounded-full border border-white/10 hover:border-white/20 bg-zinc-900/60 hover:bg-zinc-800/80 flex items-center justify-center cursor-pointer transition-all ml-2 text-white"
            aria-label={isPaused ? "Play Slideshow" : "Pause Slideshow"}
          >
            {isPaused ? (
              <svg className="w-6 h-6 fill-white translate-x-[0.5px]" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* 3. Intro Statement */}
      <section className="py-32 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <ScrollAnimate>
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight text-center leading-[1.1] text-gradient">
              Forged in Grade 5 Titanium.<br />
              Impossibly strong. Strikingly light.<br />
              Undeniably Pro.
            </h2>
          </ScrollAnimate>
        </div>
      </section>

      {/* 4. Industrial Design */}
      <section id="industrial-design" className="py-24 md:py-32 bg-zinc-950 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollAnimate>
              <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight mb-4">
                Masterpiece of Materials.
              </h2>
              <p className="text-[18px] md:text-[21px] text-zinc-400 leading-relaxed font-normal mb-8">
                The aerospace-grade titanium design is both durable and lightweight. A precision-machined chassis that redefines what a Pro device feels like.
              </p>
            </ScrollAnimate>

            <ScrollAnimate>
              <div className="flex flex-col gap-6">
                <div className="p-6 md:p-8 bg-zinc-900/60 rounded-3xl border border-white/5 backdrop-blur-md hover:border-white/10 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-[17px] font-semibold text-white mb-2">Grade 5 Titanium</h3>
                  <p className="text-[15px] text-zinc-400">The same alloy used in spacecraft.</p>
                </div>

                <div className="p-6 md:p-8 bg-zinc-900/60 rounded-3xl border border-white/5 backdrop-blur-md hover:border-white/10 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-[17px] font-semibold text-white mb-2">New Action Button</h3>
                  <p className="text-[15px] text-zinc-400">Fast track to your favorite feature.</p>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <ScrollAnimate>
              <div className="relative w-full max-w-[550px] aspect-[0.9/1] overflow-hidden rounded-[40px] shadow-2xl border border-white/5">
                <Image
                  src="/bc3c6f844e394bc7321b017429a9aafb06916faf.png"
                  alt="iPhone 17 Pro chassis side"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollAnimate>
          </div>

        </div>
      </section>

      {/* 5. Performance: A19 Pro */}
      <section id="performance" className="py-24 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollAnimate>
              <h2 className="text-[48px] md:text-[80px] font-bold tracking-tight text-white mb-4">
                A19 Pro chip.
              </h2>
              <p className="text-[20px] md:text-[28px] text-zinc-400 font-semibold tracking-wide">
                A colossal win for performance.
              </p>
            </ScrollAnimate>
          </div>

          <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-zinc-900/40 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center backdrop-blur-xl hover:border-white/10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] hover:scale-[1.01] transition-all duration-300 min-h-[300px]">
                <span className="text-[56px] md:text-[72px] font-bold text-white tracking-tight leading-none mb-4">
                  30%
                </span>
                <span className="text-[18px] md:text-[21px] text-zinc-400 font-medium">
                  Faster CPU performance.
                </span>
              </div>

              <div className="p-12 bg-zinc-900/40 rounded-[40px] border border-white/5 flex flex-col items-center justify-center text-center backdrop-blur-xl hover:border-white/10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] hover:scale-[1.01] transition-all duration-300 min-h-[300px]">
                <span className="text-[56px] md:text-[72px] font-bold text-white tracking-tight leading-none mb-4">
                  20%
                </span>
                <span className="text-[18px] md:text-[21px] text-zinc-400 font-medium">
                  Faster GPU performance.
                </span>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* 6. Camera System */}
      <section id="camera" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="max-w-3xl">
            <ScrollAnimate>
              <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-white leading-tight">
                A camera that captures<br />your wildest imagination.
              </h2>
            </ScrollAnimate>
          </div>

          <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: 48MP Ultra Wide */}
              <div className="bg-zinc-900/50 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all duration-500 flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/fed6929fed8cbf42d64af844690d998544a60f6a.png"
                    alt="48MP Ultra Wide camera example"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col gap-2">
                  <h3 className="text-[21px] font-semibold text-white">48MP Ultra Wide</h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed font-normal">
                    More detail in every macro and landscape.
                  </p>
                </div>
              </div>

              {/* Card 2: 5x Telephoto */}
              <div className="bg-zinc-900/50 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all duration-500 flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/3c854f73e1e36dfe6fc575887be7cd1e5a6af9af.png"
                    alt="5x Telephoto lens details"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col gap-2">
                  <h3 className="text-[21px] font-semibold text-white">5x Telephoto</h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed font-normal">
                    Get closer from further away.
                  </p>
                </div>
              </div>

              {/* Card 3: Spatial Video */}
              <div className="bg-zinc-900/50 rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all duration-500 flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/ca7c342785b45eeaac4492d44c99389825bf9290.png"
                    alt="Spatial video illustration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col gap-2">
                  <h3 className="text-[21px] font-semibold text-white">Spatial Video</h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed font-normal">
                    Relive memories in 3D on Apple Vision Pro.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* 7. Apple Intelligence */}
      <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Glow animated background overlay */}
        <div className="absolute inset-0 bg-mesh-gradient apple-intelligence-glow pointer-events-none opacity-40 z-0" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-16">
          <div className="flex flex-col items-center text-center gap-4">
            <ScrollAnimate>
              <div className="w-[44px] h-[44px] relative mb-2 flex items-center justify-center animate-float">
                <Image
                  src="/92fb14e2a14a16522034c1116e13662828d7fee9.svg"
                  alt="Apple Intelligence Icon"
                  width={44}
                  height={44}
                  className="object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                />
              </div>
              <h2 className="text-[48px] md:text-[80px] font-bold tracking-tight text-white leading-none mb-3">
                Apple Intelligence.
              </h2>
              <p className="text-[20px] md:text-[28px] text-zinc-400 font-semibold">
                AI like you&apos;ve never seen.
              </p>
            </ScrollAnimate>
          </div>

          <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Generative Siri */}
              <div className="relative overflow-hidden bg-zinc-900/40 rounded-[40px] border border-white/5 hover:border-white/10 p-10 backdrop-blur-xl h-[450px] flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white">Smarter Siri</h3>
                  <p className="text-[17px] md:text-[20px] text-zinc-400 leading-relaxed font-normal">
                    More natural, more capable, and deeply integrated into your personal context.
                  </p>
                </div>
                <div className="w-full flex justify-end items-end h-[100px] relative">
                  <Image
                    src="/d08a6de48981dfd55774b6abd520726dc80b1ce8.svg"
                    alt="Siri sound waves"
                    width={90}
                    height={100}
                    className="object-contain opacity-70 animate-pulse"
                  />
                </div>
              </div>

              {/* Card 2: Private Cloud Compute */}
              <div className="relative overflow-hidden bg-zinc-900/40 rounded-[40px] border border-white/5 hover:border-white/10 p-10 backdrop-blur-xl h-[450px] flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[24px] md:text-[28px] font-bold text-white">Private Cloud Compute</h3>
                  <p className="text-[17px] md:text-[20px] text-zinc-400 leading-relaxed font-normal">
                    Complex requests are processed securely on Apple silicon servers, ensuring your data is never stored or shared.
                  </p>
                </div>
                <div className="w-full flex justify-end items-end h-[100px] relative">
                  <Image
                    src="/e5d532b941a082ecfd2ab7f7a95dc188348fcc25.svg"
                    alt="Private compute lock"
                    width={80}
                    height={100}
                    className="object-contain opacity-70"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* 8. Battery Life */}
      <section className="py-24 md:py-32 bg-zinc-950 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-6 flex flex-col gap-6">
              <ScrollAnimate>
                <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-white leading-[1.1] mb-2">
                  All-day battery life.<br />Even with all this Pro.
                </h2>
                <p className="text-[17px] md:text-[21px] text-zinc-400 leading-relaxed mb-8">
                  The A19 Pro chip is so efficient, it delivers a massive leap in battery life, giving you up to 30 hours video playback of creative power.
                </p>
                <button className="flex items-center gap-2 text-[17px] font-semibold text-white hover:text-zinc-300 transition-colors group cursor-pointer bg-transparent border-none">
                  See battery details
                  <Image
                    src="/9525bc32609d8363148bb5a393cef1f748604915.svg"
                    alt="Arrow"
                    width={9}
                    height={15}
                    className="invert group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </ScrollAnimate>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <ScrollAnimate>
                {/* Large high tech Battery Visualizer */}
                <div className="relative w-[180px] h-[360px] md:w-[200px] md:h-[400px] rounded-[48px] border-4 border-white/20 p-2 flex flex-col items-center justify-end">
                  {/* Top Notch of Battery */}
                  <div className="absolute top-[-16px] w-[64px] h-[16px] bg-white/20 rounded-t-[10px] left-1/2 -translate-x-1/2" />

                  {/* Inner Charging Glow Block */}
                  <div
                    style={{ height: `${batteryCharge}%` }}
                    className="w-full bg-gradient-to-t from-emerald-600 via-green-500 to-green-300 rounded-[38px] shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all duration-1000 ease-out flex items-center justify-center"
                  >
                    <span className="text-[28px] font-bold text-black drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)] select-none animate-pulse">
                      {batteryCharge}%
                    </span>
                  </div>
                </div>
              </ScrollAnimate>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 iOS 26 Section */}
      <section id="ios-26" className="py-24 md:py-32 bg-black border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16 items-center">
          
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
            <ScrollAnimate>
              <span className="text-[14px] uppercase tracking-[0.25em] font-semibold text-zinc-400 mb-2">
                All-New Software
              </span>
              <h2 className="text-[36px] md:text-[56px] lg:text-[80px] font-bold tracking-tight text-white leading-tight mb-4">
                iOS 26. Intelligent to the core.
              </h2>
              <p className="text-[16px] md:text-[20px] text-zinc-400 max-w-3xl leading-relaxed font-normal">
                Our most personal and capable OS yet. Designed to take full advantage of the A19 Pro chip and Apple Intelligence, with an all-new interface that feels like it's living in your world.
              </p>
            </ScrollAnimate>
          </div>

          <div className="w-full max-w-4xl aspect-[1.6/1] md:aspect-[16/9] bg-[#0c0c0e] rounded-[32px] md:rounded-[40px] border border-white/5 overflow-hidden relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] group hover:border-white/15 transition-all duration-700">
            <ScrollAnimate>
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src="/a0184940f9adabbfac2f449793b082d581ca94ce.png" 
                  alt="iOS 26 Interface Visualization"
                  fill
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
                />
              </div>
            </ScrollAnimate>
          </div>

        </div>
      </section>

      {/* 9. Colors Selection */}
      <section id="colors" className="py-24 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-12">

          <ScrollAnimate>
            <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-white">
              Four striking finishes.
            </h2>
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="flex flex-col items-center gap-6">
              {/* Finish Selection Name */}
              <div className="text-[21px] text-zinc-300 font-medium transition-all duration-300">
                {selectedColor.name}
              </div>

              {/* Finishing Dots Selector */}
              <div className="flex gap-6 p-2 bg-zinc-900/80 rounded-full border border-white/5">
                {COLOR_FINISHES.map((finish) => {
                  const isSelected = selectedColor.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedColor(finish)}
                      style={{ backgroundColor: finish.hex }}
                      className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 border-2 ${isSelected
                        ? "scale-110 shadow-[0_0_0_4px_rgba(0,0,0,1),0_0_0_6px_#ffffff]"
                        : "opacity-80 hover:opacity-100 hover:scale-105"
                        }`}
                      aria-label={finish.name}
                    />
                  );
                })}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* 10. Ecosystem */}
      <section id="ecosystem" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="text-center">
            <ScrollAnimate>
              <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-white mb-4">
                Works seamlessly with
              </h2>
            </ScrollAnimate>
          </div>

          <ScrollAnimate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AirPods Pro */}
              <div className="p-8 bg-zinc-900/40 rounded-[32px] border border-white/5 flex flex-col items-center justify-between text-center backdrop-blur-md h-[400px] hover:border-white/10 hover:scale-[1.02] transition-all duration-500 group">
                <div className="relative w-[192px] h-[192px] flex items-center justify-center">
                  <Image
                    src="/d94f1d14181e75df2b1e447656057e0552178139.png"
                    alt="AirPods Pro"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[21px] font-semibold text-white">AirPods Pro</h3>
              </div>

              {/* Apple Watch Ultra 2 */}
              <div className="p-8 bg-zinc-900/40 rounded-[32px] border border-white/5 flex flex-col items-center justify-between text-center backdrop-blur-md h-[400px] hover:border-white/10 hover:scale-[1.02] transition-all duration-500 group">
                <div className="relative w-[192px] h-[192px] flex items-center justify-center">
                  <Image
                    src="/dbe20c0ad488f66acc3e86fe175c153614e149e1.png"
                    alt="Apple Watch Ultra 2"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[21px] font-semibold text-white">Apple Watch Ultra 2</h3>
              </div>

              {/* MacBook Pro */}
              <div className="p-8 bg-zinc-900/40 rounded-[32px] border border-white/5 flex flex-col items-center justify-between text-center backdrop-blur-md h-[400px] hover:border-white/10 hover:scale-[1.02] transition-all duration-500 group">
                <div className="relative w-[192px] h-[192px] flex items-center justify-center">
                  <Image
                    src="/93573060b9ec1db41357bb2f51f15b518612ace2.png"
                    alt="MacBook Pro"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[21px] font-semibold text-white">MacBook Pro</h3>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section id="cta" className="py-32 bg-black relative overflow-hidden">
        {/* Subtle Backdrop Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative flex flex-col items-center gap-8">
          <ScrollAnimate>
            <h2 className="text-[48px] md:text-[80px] font-bold tracking-tight text-white leading-tight">
              Pre-order starting 9.13
            </h2>
          </ScrollAnimate>

          <ScrollAnimate>
            <button className="px-10 py-4 bg-white text-black font-semibold text-[20px] rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-none">
              Pre-order Now
            </button>
          </ScrollAnimate>
        </div>
      </section>

      {/* 12. Footer Component */}
      <footer className="bg-zinc-950 border-t border-zinc-900 text-[12px] text-zinc-400 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-8">

          <div className="font-bold text-[14px] text-zinc-200 tracking-wider">
            Apple
          </div>

          <hr className="border-zinc-900" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:underline hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:underline hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:underline hover:text-white transition-colors">Sales and Refunds</a>
              <a href="#" className="hover:underline hover:text-white transition-colors">Legal</a>
              <a href="#" className="hover:underline hover:text-white transition-colors">Site Map</a>
            </div>

            <div>
              Copyright © 2024 Apple Inc. All rights reserved.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
