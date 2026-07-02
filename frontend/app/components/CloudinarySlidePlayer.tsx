"use client";

import { useEffect, useRef, useState } from "react";
import type { CloudinarySlidePlayerProps, CloudinaryPlayer, CloudinaryWindow } from "../types";

export default function CloudinarySlidePlayer({ isActive, isVisible = true, isPaused, onEnded }: CloudinarySlidePlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<CloudinaryPlayer | null>(null);
  const initializingRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    const initPlayer = async () => {
      const win = typeof window !== "undefined" ? (window as unknown as CloudinaryWindow) : undefined;
      if (!win || !win.cloudinary || !videoRef.current) return false;

      // Double initialization safety
      if (playerRef.current || initializingRef.current) return true;

      initializingRef.current = true;
      try {
        // Initialize the player following user's configuration
        // In v4, cloudinary.player returns a Promise resolving to the player instance
        const playerInstance = await win.cloudinary.player(videoRef.current, {
          cloudName: "dz4zobnat",
          publicId: "materials_fh4o8z",
          controls: false,
          muted: true,
          autoplay: false,
          loop: false,
          fluid: true,
          transformation: {
            width: 1280,
            crop: "limit",
            quality: "auto:good",
            fetch_format: "auto"
          },
          posterOptions: {
            transformation: {
              width: 1280,
              crop: "limit",
              quality: "auto:good",
              fetch_format: "auto",
              startOffset: "0"
            }
          }
        });

        if (!active) {
          playerInstance.dispose();
          initializingRef.current = false;
          return true;
        }

        playerRef.current = playerInstance;
        setIsLoaded(true);
        initializingRef.current = false;

        return true;
      } catch (err) {
        console.error("Error initializing Cloudinary player:", err);
        initializingRef.current = false;
        return false;
      }
    };

    const win = typeof window !== "undefined" ? (window as unknown as CloudinaryWindow) : undefined;
    // If script is already loaded, initialize immediately
    if (win && win.cloudinary) {
      initPlayer();
    } else {
      // Poll or wait for the script to load (fallback)
      const interval = setInterval(() => {
        const currentWin = typeof window !== "undefined" ? (window as unknown as CloudinaryWindow) : undefined;
        if (currentWin && currentWin.cloudinary) {
          initPlayer().then((success) => {
            if (success) {
              clearInterval(interval);
            }
          });
        }
      }, 100);

      return () => {
        active = false;
        clearInterval(interval);
        if (playerRef.current) {
          try {
            playerRef.current.dispose();
            playerRef.current = null;
          } catch {
            // ignore
          }
        }
      };
    }

    return () => {
      active = false;
      if (playerRef.current) {
        try {
          playerRef.current.dispose();
          playerRef.current = null;
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Handle active status changes
  useEffect(() => {
    if (playerRef.current && isLoaded) {
      if (isActive && isVisible && !isPaused) {
        const playResult = playerRef.current.play();
        if (playResult && typeof (playResult as Promise<unknown>).catch === "function") {
          (playResult as Promise<unknown>).catch((err: unknown) => {
            // Auto-play might be blocked by browser policy initially, ignore
            console.warn("Autoplay was blocked:", err);
          });
        }
      } else {
        try {
          playerRef.current.pause();
        } catch {
          // ignore
        }
      }
    }
  }, [isActive, isLoaded, isPaused, isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !onEnded) return;

    const handleEnded = () => onEnded();
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onEnded]);

  return (
    <div className="w-full h-full relative">
      <video
        ref={videoRef}
        className="cld-video-player cld-fluid w-full h-full object-cover rounded-2xl pointer-events-none"
        playsInline
        muted
      />
    </div>
  );
}
