"use client";

import { Link as LinkIcon, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Phân Định Và An Ủi Giả - Báo cáo Nghiên cứu")}`, "_blank");
  };

  return (
    <div className="share-buttons flex items-center justify-center gap-4 mt-12 mb-8">
      <span className="text-sm uppercase tracking-widest text-[var(--color-charcoal-muted)] font-['var(--font-ui)']">Chia sẻ bài viết</span>
      
      <button 
        onClick={shareFacebook}
        className="p-2 rounded-full border border-[var(--color-parchment-deep)] text-[var(--color-charcoal-muted)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
        aria-label="Chia sẻ lên Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </button>
      
      <button 
        onClick={shareTwitter}
        className="p-2 rounded-full border border-[var(--color-parchment-deep)] text-[var(--color-charcoal-muted)] hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
        aria-label="Chia sẻ lên Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.68-3 .99-1.12-1.26-2.7-1.99-4.5-1.99-3.3 0-6 2.7-6 6 0 .47.05.93.16 1.37C5.17 9.87 2.65 7.43 1 5.37c-.52.88-.82 1.91-.82 3.01 0 2.08 1.06 3.92 2.67 4.99-.86-.03-1.67-.27-2.38-.66v.08c0 2.55 1.81 4.67 4.22 5.15-.5.14-1.03.21-1.58.21-.38 0-.75-.04-1.11-.11.67 2.09 2.62 3.61 4.92 3.65-1.8 1.41-4.07 2.25-6.52 2.25-.49 0-.97-.03-1.44-.08 2.33 1.49 5.09 2.36 8.04 2.36 9.64 0 14.91-7.98 14.91-14.91 0-.23 0-.45-.02-.67 1.02-.74 1.91-1.66 2.61-2.73z"/></svg>
      </button>
      
      <button 
        onClick={copyLink}
        className="p-2 rounded-full border border-[var(--color-parchment-deep)] text-[var(--color-charcoal-muted)] hover:text-[var(--color-cardinal)] hover:border-[var(--color-cardinal)] transition-colors relative"
        aria-label="Copy link"
      >
        {copied ? <Check size={18} className="text-green-600" /> : <LinkIcon size={18} />}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-[var(--color-charcoal)] text-[var(--color-parchment)] px-2 py-1 rounded whitespace-nowrap font-['var(--font-ui)']">
            Đã chép link!
          </span>
        )}
      </button>
    </div>
  );
}
