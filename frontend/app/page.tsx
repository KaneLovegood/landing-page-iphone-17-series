"use client";

import { useState } from "react";
import { COLOR_FINISHES } from "./constants/colors";
import type { ColorFinish } from "./types";

// Section Components
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import HighlightsSection from "./components/sections/HighlightsSection";
import IntroStatement from "./components/sections/IntroStatement";
import IndustrialDesign from "./components/sections/IndustrialDesign";
import PerformanceSection from "./components/sections/PerformanceSection";
import CameraSection from "./components/sections/CameraSection";
import IntelligenceSection from "./components/sections/IntelligenceSection";
import BatterySection from "./components/sections/BatterySection";
import IosSection from "./components/sections/IosSection";
import ColorsSection from "./components/sections/ColorsSection";
import EcosystemSection from "./components/sections/EcosystemSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/sections/Footer";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<ColorFinish>(COLOR_FINISHES[0]);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection selectedColor={selectedColor} />
      <HighlightsSection />
      <IntroStatement />
      <IndustrialDesign />
      <PerformanceSection />
      <CameraSection />
      <IntelligenceSection />
      <BatterySection />
      <IosSection />
      <ColorsSection selectedColor={selectedColor} onSelectColor={setSelectedColor} />
      <EcosystemSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
