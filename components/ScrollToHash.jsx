"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToHash Component
 * Automatically scrolls to hash anchor when page loads
 * Usage: Add to any page that needs hash anchor scrolling
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Get hash from URL
    const hash = window.location.hash;

    if (hash) {
      // Wait for page to fully load
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
