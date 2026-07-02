"use client";

import ScrollAnimate from "../ScrollAnimate";
import { COLOR_FINISHES } from "../../constants/colors";
import type { ColorFinish } from "../../types";

interface ColorsSectionProps {
  selectedColor: ColorFinish;
  onSelectColor: (color: ColorFinish) => void;
}

export default function ColorsSection({ selectedColor, onSelectColor }: ColorsSectionProps) {
  return (
    <section id="colors" className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-12">

        <ScrollAnimate>
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-white">
            Four striking finishes.
          </h2>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="flex flex-col items-center gap-6">
            {/* Finish Selection Name */}
            <div className="text-[21px] text-zinc-300 font-medium transition-all duration-300">
              {selectedColor.name}
            </div>

            {/* Finishing Dots Selector */}
            <div className="flex gap-6 p-2 bg-zinc-900/80 rounded-full border border-white/5">
              {COLOR_FINISHES.map((finish) => {
                const isSelected = selectedColor.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => onSelectColor(finish)}
                    style={{ backgroundColor: finish.hex }}
                    className={`w-12 h-12 rounded-full cursor-pointer transition-all duration-300 border-2 ${isSelected
                      ? "scale-110 shadow-[0_0_0_4px_rgba(0,0,0,1),0_0_0_6px_#ffffff]"
                      : "opacity-80 hover:opacity-100 hover:scale-105"
                      }`}
                    aria-label={finish.name}
                  />
                );
              })}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
