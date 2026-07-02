"use client";

import { useEffect, useRef } from "react";
import type { VideoSlidePlayerProps } from "../types";

export default function VideoSlidePlayer({
  src,
  poster,
  isActive,
  isVisible = true,
  isPaused = false
}: VideoSlidePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && isVisible && !isPaused) {
      const playResult = video.play();
      if (playResult && typeof playResult.catch === "function") {
        playResult.catch((error: unknown) => {
          console.warn("Autoplay was blocked:", error);
        });
      }
    } else {
      video.pause();
    }
  }, [isActive, isVisible, isPaused]);

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl pointer-events-none"
        src={src}
        poster={poster}
        playsInline
        muted
        preload="auto"
      />
    </div>
  );
}