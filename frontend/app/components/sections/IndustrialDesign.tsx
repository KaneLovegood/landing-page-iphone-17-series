"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function IndustrialDesign() {
  return (
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
            <div className="relative w-full max-w-[550px] aspect-[9/10] overflow-hidden rounded-[40px] shadow-2xl border border-white/5">
              <Image
                src="/bc3c6f844e394bc7321b017429a9aafb06916faf.png"
                alt="iPhone 17 Pro chassis side"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollAnimate>
        </div>

      </div>
    </section>
  );
}
