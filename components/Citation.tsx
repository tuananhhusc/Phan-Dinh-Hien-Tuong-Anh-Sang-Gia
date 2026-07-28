"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

interface CitationProps {
  n: string;
  reference: { title: string; url?: string } | undefined;
}

export default function Citation({ n, reference }: CitationProps) {
  if (!reference) {
    return <sup className="citation">{n}</sup>;
  }

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href={`#ref-${n}`}
            className="citation cursor-pointer inline-flex items-center"
            onClick={(e) => {
              // Smooth scroll to references if clicked
              e.preventDefault();
              document.getElementById(`ref-${n}`)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {n}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 max-w-xs p-3 rounded-lg bg-[var(--color-parchment-deep)] border border-[var(--color-gold)] shadow-xl text-[var(--color-charcoal)] font-['var(--font-ui)'] text-xs leading-relaxed animate-in fade-in zoom-in-95 duration-200"
            sideOffset={4}
          >
            <strong className="block mb-1 text-[var(--color-cardinal)]">Nguồn [{n}]:</strong>
            {reference.title}
            <Tooltip.Arrow className="fill-[var(--color-gold)]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
