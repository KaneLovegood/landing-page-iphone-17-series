"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function BatterySection() {
  const [batteryCharge, setBatteryCharge] = useState(30);

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

  return (
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
  );
}
