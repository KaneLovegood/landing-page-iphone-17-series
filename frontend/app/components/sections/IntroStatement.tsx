"use client";

import ScrollAnimate from "../ScrollAnimate";

export default function IntroStatement() {
  return (
    <section className="py-32 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <ScrollAnimate>
          <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight text-center leading-[1.1] text-gradient">
            Forged in Grade 5 Titanium.<br />
            Impossibly strong. Strikingly light.<br />
            Undeniably Pro.
          </h2>
        </ScrollAnimate>
      </div>
    </section>
  );
}
