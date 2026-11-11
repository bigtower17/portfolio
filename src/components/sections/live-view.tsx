"use client";

import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface LiveViewItem {
  title: string;
  caption: string;
  url: string;
  poster: string;
}

// A live page opened full screen over the portfolio. Rendered in a portal: the project cards are
// transformed on hover, and a fixed element inside a transformed parent would move with it.
export function LiveView({ view, onClose }: { view: LiveViewItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!view) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [view, onClose]);

  if (!view) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={view.title}
      className="fixed inset-0 z-[100] flex items-stretch justify-center sm:p-6"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-7xl flex-col overflow-hidden sm:border"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-4 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
          <div className="min-w-0 flex-1">
            <div className="font-heading text-xl tracking-wide" style={{ color: "var(--foreground)" }}>
              {view.title}
            </div>
            <div className="hidden truncate text-sm font-light sm:block" style={{ color: "var(--muted-foreground)" }}>
              {view.caption}
            </div>
          </div>
          <a
            href={view.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 text-sm font-medium"
            style={{ color: "var(--foreground)" }}
          >
            <ExternalLink size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">New tab</span>
          </a>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <iframe
          src={view.url}
          title={view.title}
          className="w-full flex-1 border-0"
          style={{ backgroundColor: "#0b0d12" }}
          allow="fullscreen"
        />
      </div>
    </div>,
    document.body,
  );
}
