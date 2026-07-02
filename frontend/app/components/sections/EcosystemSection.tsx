"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function EcosystemSection() {
  return (
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
                  sizes="192px"
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
                  sizes="192px"
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
                  sizes="192px"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[21px] font-semibold text-white">MacBook Pro</h3>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
