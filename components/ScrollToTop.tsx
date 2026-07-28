"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top fixed bottom-24 right-6 lg:bottom-8 lg:right-8 z-40">
      <button
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-[var(--color-cardinal)] text-[var(--color-parchment)] shadow-lg hover:bg-[var(--color-cardinal-dark)] hover:-translate-y-1 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Cuộn lên đầu trang"
        title="Trở lên đầu trang"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
