"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
  number: string;
}

const tocItems: TocItem[] = [
  { id: "section-1", number: "1", label: "Dẫn nhập" },
  { id: "section-2", number: "2", label: "Chiều kích lịch sử & Kinh Thánh" },
  { id: "section-3", number: "3", label: "Thánh Inhaxiô Loyola" },
  { id: "section-4", number: "4", label: "Mưu chước Thiên thần sáng láng" },
  { id: "section-5", number: "5", label: "Biện chứng An ủi giả" },
  { id: "section-6", number: "6", label: "Né tránh tâm linh" },
  { id: "section-7", number: "7", label: "Triết học Hiện sinh & Ngụy tín" },
  { id: "section-8", number: "8", label: "Chẩn đoán & Thực hành" },
  { id: "section-9", number: "9", label: "Tổng luận" },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return Math.abs(aTop) - Math.abs(bTop);
          });
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="toc-sidebar hidden lg:block w-64 shrink-0" aria-label="Mục lục">
        <div className="pr-4">
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-ui)",
              color: "var(--color-cardinal)",
            }}
          >
            Mục lục
          </h2>
          <ul className="space-y-0.5">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`toc-link w-full text-left ${
                    activeId === item.id ? "active" : ""
                  }`}
                >
                  <span
                    className="inline-block w-5 text-right mr-2 opacity-50"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.number}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <button
        className="toc-mobile-toggle lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Mở mục lục"
      >
        {mobileOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h12M4 18h8" />
          </svg>
        )}
      </button>

      {/* Mobile Overlay */}
      <div
        className={`toc-mobile-overlay lg:hidden ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Panel */}
      <div className={`toc-mobile-panel lg:hidden ${mobileOpen ? "open" : ""}`}>
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{
            fontFamily: "var(--font-ui)",
            color: "var(--color-cardinal)",
          }}
        >
          Mục lục
        </h2>
        <ul className="space-y-1">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`toc-link w-full text-left ${
                  activeId === item.id ? "active" : ""
                }`}
              >
                <span
                  className="inline-block w-5 text-right mr-2 opacity-50"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.number}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
