import type { Slide } from "../types";

const materialDesignVideoSrc = "https://res.cloudinary.com/dz4zobnat/video/upload/v1782986810/materials_moumpz.mp4";
const a19ProVideoSrc = "https://res.cloudinary.com/dz4zobnat/video/upload/v1782983615/a-19-pro_gsqf7b.mp4";
const cameraVideoSrc = "https://res.cloudinary.com/dz4zobnat/video/upload/v1782987986/camera_dtifc2.mp4";
const intelligenceVideoSrc = "https://res.cloudinary.com/dz4zobnat/video/upload/v1782989083/Apple_Intelligence_and_Siri_2_bfqzc7.mp4";

export const SLIDES: Slide[] = [
  {
    id: 1,
    badge: "01",
    title: "Aerospace-Grade Titanium",
    subtitle: "Design & Materials",
    description: "Impossibly strong. Strikingly light. Precision-machined chassis finished in a micro-blasted satin texture that redefines modern durability.",
    videoSrc: materialDesignVideoSrc,
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
    videoSrc: a19ProVideoSrc,
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
    videoSrc: cameraVideoSrc,
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
    videoSrc: intelligenceVideoSrc,
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
  // {
  //   id: 5,
  //   badge: "05",
  //   title: "Power for the Long Run",
  //   subtitle: "Battery Life",
  //   description: "Up to 30 hours of continuous video playback. Highly efficient silicon coupled with advanced battery chemistry keeps you productive day and night.",
  //   videoSrc: a19ProVideoSrc,
  //   illustration: (
  //     <svg className="w-full h-full p-12 text-white opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <rect x="35" y="20" width="30" height="60" rx="8" stroke="currentColor" strokeWidth="2.5" />
  //       <rect x="42" y="14" width="16" height="6" rx="2" fill="currentColor" />
  //       <rect x="39" y="68" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
  //       <rect x="39" y="56" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
  //       <rect x="39" y="44" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
  //       <rect x="39" y="32" width="22" height="8" rx="2" fill="currentColor" opacity="0.9" />
  //       <path d="M50 35 L43 50 H51 L46 65 L57 48 H49 Z" fill="white" stroke="black" strokeWidth="1" className="animate-pulse" />
  //     </svg>
  //   )
  // },
  {
    id: 6,
    badge: "06",
    title: "iOS 26. Intelligent to the Core.",
    subtitle: "iOS 26",
    description: "Experience our most intuitive software yet. Dynamic homescreens, context-aware system widgets, and seamlessly fluid animations designed for the future.",
    videoSrc: a19ProVideoSrc,
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
    videoSrc: a19ProVideoSrc,
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
