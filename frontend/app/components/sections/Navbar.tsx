"use client";

import { scrollToSection } from "../../utils/scroll";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/75 border-b border-white/5 py-3 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg md:text-xl font-semibold tracking-tight text-white cursor-pointer hover:text-zinc-300 transition-colors"
        >
          iPhone 17 Pro
        </div>

        {/* <div className="hidden md:flex items-center gap-8 text-[14px] text-zinc-400 font-medium">
          <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Store</button>
          <button onClick={() => scrollToSection("industrial-design")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Mac</button>
          <button onClick={() => scrollToSection("performance")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">iPad</button>
          <button onClick={() => scrollToSection("camera")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">iPhone</button>
          <button onClick={() => scrollToSection("colors")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Watch</button>
          <button onClick={() => scrollToSection("ecosystem")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">AirPods</button>
        </div> */}

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
  );
}
