"use client";

import ScrollAnimate from "../ScrollAnimate";

export default function CtaSection() {
  return (
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
  );
}
