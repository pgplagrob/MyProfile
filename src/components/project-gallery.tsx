"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";

const screens = [
  {
    src: "/excel-gallery/01-screen.png",
    width: 3248,
    height: 320,
    title: "ครุภัณฑ์สำนักงาน",
    eyebrow: "Worksheet 01",
  },
  {
    src: "/excel-gallery/02-screen.png",
    width: 2864,
    height: 280,
    title: "อุปกรณ์ไอที",
    eyebrow: "Worksheet 02",
  },
  {
    src: "/excel-gallery/03-screen.png",
    width: 1136,
    height: 240,
    title: "สรุปข้อมูล",
    eyebrow: "Worksheet 03",
  },
] as const;

type Screen = (typeof screens)[number];

export function ProjectGallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<Screen | null>(null);

  useEffect(() => {
    if (!activePreview) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePreview(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activePreview]);

  const scroll = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: viewport.clientWidth * 0.82 * direction,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="border-t border-white/8 bg-black/20 p-5 sm:p-8 lg:p-10">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/70">
              Real workbook preview
            </p>
            <h4 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-2xl">
              Explore the first 3 worksheets
            </h4>
            <p className="mt-2 text-sm text-zinc-500">
              เลื่อนเพื่อดูตัวอย่างข้อมูลแต่ละหน้า หรือกดที่ภาพเพื่อขยาย
            </p>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => scroll(-1)}
              aria-label="เลื่อนไปภาพก่อนหน้า"
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => scroll(1)}
              aria-label="เลื่อนไปภาพถัดไป"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-color:rgba(110,231,183,0.35)_transparent] [scrollbar-width:thin]"
          aria-label="ตัวอย่างหน้าจอ Excel Converter"
        >
          {screens.map((screen) => (
            <article
              key={screen.src}
              className="group min-w-[88%] snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#09110e] sm:min-w-[72%] lg:min-w-[58%]"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]" />
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      {screen.title}
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      {screen.eyebrow}
                    </p>
                  </div>
                </div>
                <Expand className="size-4 text-zinc-600 transition-colors group-hover:text-emerald-300" />
              </div>

              <button
                type="button"
                onClick={() => setActivePreview(screen)}
                className="block w-full cursor-zoom-in bg-white p-2 text-left"
                aria-label={`ขยายภาพ ${screen.title}`}
              >
                <Image
                  src={screen.src}
                  alt={`ตัวอย่างข้อมูลหน้า ${screen.title} ในระบบ Excel Converter`}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 72vw, 58vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
          <span>Swipe / scroll horizontally</span>
          <span>03 screens</span>
        </div>
      </section>

      {activePreview
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`ภาพขยาย ${activePreview.title}`}
              onClick={() => setActivePreview(null)}
            >
              <div
                className="relative w-full max-w-[96rem] overflow-hidden rounded-2xl border border-white/15 bg-[#080b0a] shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      {activePreview.title}
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      Excel Converter / Preview
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => setActivePreview(null)}
                    aria-label="ปิดภาพขยาย"
                  >
                    <X />
                  </Button>
                </div>
                <div className="max-h-[78vh] overflow-auto bg-white p-2">
                  <Image
                    src={activePreview.src}
                    alt={`ภาพขยายตัวอย่างข้อมูลหน้า ${activePreview.title}`}
                    width={activePreview.width}
                    height={activePreview.height}
                    sizes="96vw"
                    className="h-auto min-w-[52rem] max-w-none sm:min-w-full"
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
