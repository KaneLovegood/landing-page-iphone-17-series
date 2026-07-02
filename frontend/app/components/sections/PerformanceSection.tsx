"use client";

import ScrollAnimate from "../ScrollAnimate";

export default function PerformanceSection() {
  return (
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
  );
}
