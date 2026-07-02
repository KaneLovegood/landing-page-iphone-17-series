// ===========================
// Color Finishes
// ===========================

/** Available titanium color finish IDs */
export type ColorFinishId = "natural" | "black" | "silver" | "blue";

/** Color selector option for titanium finishes */
export type ColorFinish = {
  id: ColorFinishId;
  name: string;
  hex: string;
  filterClass: string;
  glowClass: string;
};

// ===========================
// Highlights Slideshow
// ===========================

/** Slide data structure for the Highlights Slideshow */
export interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  illustration: React.ReactNode;
}

// ===========================
// Cloudinary Video Player
// ===========================

/** Props for the CloudinarySlidePlayer component */
export interface CloudinarySlidePlayerProps {
  isActive: boolean;
  isVisible?: boolean;
  isPaused?: boolean;
  onEnded?: () => void;
}

/** Props for a native HTML video slide player */
export interface VideoSlidePlayerProps {
  src: string;
  poster?: string;
  isActive: boolean;
  isVisible?: boolean;
  isPaused?: boolean;
}

/** Cloudinary Video Player instance methods */
export interface CloudinaryPlayer {
  play: () => Promise<unknown> | unknown;
  pause: () => void;
  dispose: () => void;
}

/** Extended Window interface with Cloudinary SDK */
export interface CloudinaryWindow extends Window {
  cloudinary?: {
    player: (
      element: HTMLVideoElement,
      options: Record<string, unknown>
    ) => Promise<CloudinaryPlayer>;
  };
}
