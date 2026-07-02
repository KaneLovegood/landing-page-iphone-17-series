"use client";

/** Smooth scroll helper — scrolls to an element by its DOM id */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
