"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function IntelligenceSection() {
  return (
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
  );
}
