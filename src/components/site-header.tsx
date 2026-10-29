"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#stack", label: "เครื่องมือ" },
  { href: "#work", label: "ผลงาน" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a href="#top" aria-label="Weraphat Pankab — กลับไปด้านบน" className="group flex items-center gap-3">
        <span className="leading-tight">
          <span className="block text-sm font-serif text-white">Weraphat Pankab</span>
          <span className="block text-[10px] tracking-[0.12em] text-zinc-500">นักพัฒนาเว็บ Full-stack</span>
        </span>
      </a>

      <nav aria-label="เมนูหลัก" className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <Button key={link.href} variant="ghost" size="sm" asChild><a href={link.href}>{link.label}</a></Button>
        ))}
      </nav>

      <div className="hidden md:block"><Button variant="outline" size="sm" asChild><a href="#contact">ติดต่อ</a></Button></div>

      <Button variant="outline" size="icon" className="md:hidden" type="button" aria-label={open ? "ปิดเมนู" : "เปิดเมนู"} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="absolute left-5 right-5 top-[5.5rem] rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav aria-label="เมนูสำหรับมือถือ" className="flex flex-col">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black">ติดต่อ</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
