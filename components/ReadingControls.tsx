"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Type, Plus, Minus, Settings2, X } from "lucide-react";

export default function ReadingControls() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedSize = localStorage.getItem("article-font-size");
    if (savedSize) {
      const size = parseInt(savedSize, 10);
      setFontSize(size);
      document.documentElement.style.setProperty("--article-font-size", `${size}px`);
    }
  }, []);

  if (!mounted) return null;

  const increaseFont = () => {
    if (fontSize < 30) {
      const newSize = fontSize + 1;
      setFontSize(newSize);
      document.documentElement.style.setProperty("--article-font-size", `${newSize}px`);
      localStorage.setItem("article-font-size", newSize.toString());
    }
  };

  const decreaseFont = () => {
    if (fontSize > 12) {
      const newSize = fontSize - 1;
      setFontSize(newSize);
      document.documentElement.style.setProperty("--article-font-size", `${newSize}px`);
      localStorage.setItem("article-font-size", newSize.toString());
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <div className={`reading-controls fixed bottom-6 left-6 lg:right-6 lg:left-auto lg:top-24 lg:bottom-auto z-40 flex flex-row lg:flex-col gap-2 p-1.5 lg:p-2 bg-[var(--color-parchment-dark)] border border-[var(--color-parchment-deep)] rounded-xl shadow-sm transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 lg:p-2 text-[var(--color-cardinal)] hover:bg-[var(--color-parchment)] rounded-lg transition-colors flex items-center justify-center"
        aria-label="Toggle Reading Settings"
        title="Tùy chỉnh đọc"
      >
        {isOpen ? <X size={20} /> : <Settings2 size={20} />}
      </button>

      {isOpen && (
        <>
          <div className="w-px h-auto lg:w-auto lg:h-px bg-[var(--color-parchment-deep)] mx-1 my-0 lg:my-0 lg:mx-2" />

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-3 lg:p-2 text-[var(--color-charcoal-muted)] hover:text-[var(--color-cardinal)] hover:bg-[var(--color-parchment)] rounded-lg transition-colors flex items-center justify-center"
            aria-label="Toggle Dark Mode"
            title="Đổi chế độ Sáng/Tối"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={increaseFont}
            className="relative p-3 lg:p-2 text-[var(--color-charcoal-muted)] hover:text-[var(--color-cardinal)] hover:bg-[var(--color-parchment)] rounded-lg transition-colors flex items-center justify-center"
            aria-label="Increase Font Size"
            title="Phóng to cỡ chữ"
          >
            <Type size={16} />
            <Plus size={12} className="absolute top-1 right-0" />
          </button>

          <button
            onClick={decreaseFont}
            className="relative p-3 lg:p-2 text-[var(--color-charcoal-muted)] hover:text-[var(--color-cardinal)] hover:bg-[var(--color-parchment)] rounded-lg transition-colors flex items-center justify-center"
            aria-label="Decrease Font Size"
            title="Thu nhỏ cỡ chữ"
          >
            <Type size={14} />
            <Minus size={12} className="absolute top-1 right-0" />
          </button>
        </>
      )}
    </div>
  );
}
