"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function IosSection() {
  return (
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
              Our most personal and capable OS yet. Designed to take full advantage of the A19 Pro chip and Apple Intelligence, with an all-new interface that feels like it&apos;s living in your world.
            </p>
          </ScrollAnimate>
        </div>

          <div className="w-full max-w-4xl aspect-[8/5] md:aspect-[16/9] bg-[#0c0c0e] rounded-[32px] md:rounded-[40px] border border-white/5 overflow-hidden relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] group hover:border-white/15 transition-all duration-700">
            <ScrollAnimate className="w-full h-full">
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src="/a0184940f9adabbfac2f449793b082d581ca94ce.png" 
                  alt="iOS 26 Interface Visualization"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
                />
              </div>
            </ScrollAnimate>
          </div>

      </div>
    </section>
  );
}
