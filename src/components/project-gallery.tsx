"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";

const screens = [
  {
    src: "/excel-gallery/01-upload-empty.png",
    width: 1600,
    height: 1000,
    title: "อัปโหลดไฟล์",
    eyebrow: "ขั้นที่ 01 / อัปโหลด",
  },
  {
    src: "/excel-gallery/02-file-selected.png",
    width: 1600,
    height: 1000,
    title: "เลือกไฟล์แล้ว",
    eyebrow: "ขั้นที่ 02 / เลือกไฟล์",
  },
  {
    src: "/excel-gallery/03-review-overview.png",
    width: 1600,
    height: 1000,
    title: "ตรวจสอบภาพรวม",
    eyebrow: "ขั้นที่ 03 / ตรวจสอบ",
  },
  {
    src: "/excel-gallery/04-advanced-mapping.png",
    width: 1600,
    height: 1000,
    title: "จับคู่คอลัมน์",
    eyebrow: "ขั้นที่ 04 / จับคู่ข้อมูล",
  },
  {
    src: "/excel-gallery/05-download-ready.png",
    width: 1600,
    height: 1000,
    title: "ดาวน์โหลดไฟล์",
    eyebrow: "ขั้นที่ 05 / ส่งออก",
  },
  {
    src: "/excel-gallery/06-template-settings.png",
    width: 1600,
    height: 1000,
    title: "ตั้งค่าเทมเพลต",
  },
] as const;

type Screen = (typeof screens)[number];

export function ProjectGallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<Screen | null>(null);

  useEffect(() => {
    if (!activePreview) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePreview(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
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
      <section className="min-w-0 border-t border-white/8 bg-black/20 p-4 sm:p-8 lg:p-10">
        <div className="mb-5 flex min-w-0 flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-5">
          <div className="min-w-0">
            {/* <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/70">
              Excel Converter
            </p> */}
            <h4 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-2xl">
              หน้าจอของระบบ
            </h4>
            {/* <p className="mt-2 text-sm text-zinc-500">
              เลื่อนดูหน้าจออื่นได้ครับ แตะที่ภาพเพื่อดูขนาดใหญ่ขึ้น
            </p> */}
          </div>

          <div className="flex shrink-0 gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="size-9 sm:size-10"
              onClick={() => scroll(-1)}
              aria-label="เลื่อนไปภาพก่อนหน้า"
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="size-9 sm:size-10"
              onClick={() => scroll(1)}
              aria-label="เลื่อนไปภาพถัดไป"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="flex w-full max-w-full touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 sm:gap-4 [scrollbar-color:rgba(110,231,183,0.35)_transparent] [scrollbar-width:thin]"
          aria-label="ตัวอย่างหน้าจอ Excel Converter"
        >
          {screens.map((screen) => (
            <article
              key={screen.src}
              className="group w-[90%] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-[#09110e] sm:w-[62%] sm:rounded-2xl lg:w-[31.5%]"
            >
              <div className="flex min-w-0 items-center justify-between gap-3 border-b border-white/8 px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2.5">
                  {/* <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.7)]" /> */}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-200">
                      {screen.title}
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
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 30vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </button>
            </article>
          ))}
        </div>

        {/* <div className="mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
          <span>เลื่อนดูหน้าจอเพิ่มเติม</span>
          <span>ทั้งหมด 6 หน้าจอ</span>
        </div> */}
      </section>

      {activePreview
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/90 p-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md sm:grid sm:place-items-center sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`ภาพขยาย ${activePreview.title}`}
              onClick={() => setActivePreview(null)}
            >
              <div
                className="relative flex max-h-[calc(100dvh-1rem)] w-full max-w-[96rem] flex-col overflow-hidden rounded-xl border border-white/15 bg-[#080b0a] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      {activePreview.title}
                    </p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      Excel Converter / ตัวอย่าง
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
                <div className="min-h-0 flex-1 overflow-auto bg-white p-1 sm:p-2">
                  <Image
                    src={activePreview.src}
                    alt={`ภาพขยายตัวอย่างข้อมูลหน้า ${activePreview.title}`}
                    width={activePreview.width}
                    height={activePreview.height}
                    sizes="96vw"
                    className="h-auto w-full"
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
