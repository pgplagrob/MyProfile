"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle } from "lucide-react";

const lineId = "weraphat2003";

export function CopyLineId() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyId() {
    try {
      await navigator.clipboard.writeText(lineId);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 p-4 sm:gap-4 sm:p-5">
        <span className="hidden size-11 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-zinc-200 min-[360px]:grid">
          <MessageCircle className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-zinc-400">ไลน์ไอดี</span>
          <span className="block break-all font-medium text-white">{lineId}</span>
        </span>
        <button
          type="button"
          onClick={copyId}
          className="flex min-h-11 shrink-0 items-center gap-2 rounded-full px-2 text-xs text-zinc-300 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`คัดลอกไลน์ไอดี ${lineId}`}
        >
          {copyState === "copied" ? <Check className="size-4" /> : <Copy className="size-4" />}
          <span className={copyState === "idle" ? "hidden sm:inline" : ""}>
            {copyState === "copied" ? "คัดลอกแล้ว" : "คัดลอก"}
          </span>
        </button>
      </div>
      {copyState === "failed" ? (
        <p className="mt-2 text-xs text-amber-200" role="status">
          คัดลอกไม่สำเร็จ ลองเลือกไลน์ไอดีด้านบนแล้วคัดลอกด้วยตัวเองได้เลย
        </p>
      ) : null}
    </div>
  );
}
