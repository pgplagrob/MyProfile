"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a href="#top" aria-label="Weraphat Pankab — back to top" className="group flex items-center gap-3">
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-white">Weraphat Pankab</span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-zinc-500">Full-stack developer</span>
        </span>
      </a>

      <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <Button key={link.href} variant="ghost" size="sm" asChild><a href={link.href}>{link.label}</a></Button>
        ))}
      </nav>

      <div className="hidden md:block"><Button variant="outline" size="sm" asChild><a href="#contact">Let&apos;s talk</a></Button></div>

      <Button variant="outline" size="icon" className="md:hidden" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
        {open ? <X /> : <Menu />}
      </Button>

      {open ? (
        <div className="absolute left-5 right-5 top-[5.5rem] rounded-2xl border border-white/10 bg-[#090e0c]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-[#06100d]">Let&apos;s talk</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
