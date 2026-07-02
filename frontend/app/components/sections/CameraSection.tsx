"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

export default function CameraSection() {
  return (
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
                  sizes="(max-width: 768px) 100vw, 380px"
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
                  sizes="(max-width: 768px) 100vw, 380px"
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
                  sizes="(max-width: 768px) 100vw, 380px"
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
  );
}
