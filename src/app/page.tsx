import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  FileSpreadsheet,
  Server,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stack = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Bun",
  "MySQL",
  "Prisma",
  "shadcn/ui",
  "Tailwind CSS",
];

const capabilities = [
  {
    icon: Braces,
    number: "01",
    title: "Frontend systems",
    description:
      "Responsive interfaces built with React, Next.js, shadcn/ui and Tailwind CSS.",
  },
  {
    icon: Server,
    number: "02",
    title: "Backend foundations",
    description: "APIs and application logic powered by Node.js, Express and Bun.",
  },
  {
    icon: Database,
    number: "03",
    title: "Data that connects",
    description:
      "Practical data layers using MySQL and Prisma, shaped around the product.",
  },
];

const projectPipeline = ["Parse", "Detect", "Normalize", "Map", "Validate", "Export"];

const projectStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Node.js",
  "Python",
  "ExcelJS",
  "SheetJS",
  "openpyxl",
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-[#050807] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(circle_at_72%_16%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_18%_5%,rgba(45,212,191,0.07),transparent_24%)]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[52rem] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <SiteHeader />

      <section className="relative mx-auto grid min-h-[calc(100svh-88px)] w-full max-w-7xl items-center gap-16 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-28 lg:pt-8">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-cyan-300" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
              Available for meaningful work
            </span>
          </div>

          <p className="mb-3 font-mono text-sm text-cyan-200 sm:text-base">
            Hello, I&apos;m Weraphat Pankab.
          </p>
          <h1 className="max-w-4xl text-balance text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Full-stack
            <span className="block text-zinc-500">developer.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I create thoughtful web products from polished interfaces to dependable
            backend systems—turning ideas into software people can actually use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#work">See my work <ArrowDownRight /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#stack">Explore my stack</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-full bg-cyan-300/5 blur-3xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-[#0a100e]/90 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-300/70" />
                <span className="size-2.5 rounded-full bg-emerald-300/70" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                developer.ts
              </span>
            </div>
            <div className="space-y-5 p-5 font-mono text-[13px] leading-7 sm:p-8 sm:text-sm">
              <p><span className="text-fuchsia-300">const</span>{" "}<span className="text-cyan-200">developer</span>{" "}<span className="text-zinc-500">=</span>{" "}<span className="text-zinc-300">&#123;</span></p>
              <div className="space-y-1 pl-5 sm:pl-8">
                <p><span className="text-zinc-500">name:</span>{" "}<span className="text-amber-200">&quot;Weraphat Pankab&quot;</span>,</p>
                <p><span className="text-zinc-500">role:</span>{" "}<span className="text-amber-200">&quot;Full-stack Developer&quot;</span>,</p>
                <p><span className="text-zinc-500">focus:</span>{" "}<span className="text-amber-200">&quot;Useful products&quot;</span>,</p>
                <p><span className="text-zinc-500">status:</span>{" "}<span className="text-emerald-300">&quot;Building&quot;</span>,</p>
              </div>
              <p className="text-zinc-300">&#125;;</p>
              <div className="flex items-center gap-2 border-t border-white/8 pt-5 text-zinc-500">
                <span className="text-cyan-300">›</span><span>ship(idea)</span><span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-cyan-300" />
              </div>
            </div>
          </Card>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-cyan-300/20 bg-[#0c1512] px-4 py-3 shadow-xl sm:-left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Currently featuring</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-cyan-100"><FileSpreadsheet className="size-4 text-cyan-300" /> excel-converter</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.018] py-5" aria-label="Technology stack preview">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 sm:px-8 lg:px-10">
          {stack.map((item, index) => (
            <div key={item} className="flex items-center gap-7">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{item}</span>
              {index < stack.length - 1 ? <span className="hidden size-1 rounded-full bg-cyan-300/50 sm:block" /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-label">01 / About</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              I solve the whole problem,<span className="block text-zinc-500">not just one layer.</span>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-xl leading-9 text-zinc-300 sm:text-2xl sm:leading-10">
              I&apos;m Weraphat, a full-stack developer who enjoys connecting clean
              interfaces, solid application logic and practical data systems.
            </p>
            <p className="mt-6 max-w-xl leading-7 text-zinc-500">
              My toolkit spans the complete web stack, which helps me think beyond
              individual screens and build experiences that stay coherent from the
              first click to the database.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <Card key={capability.title} className="group rounded-2xl bg-white/[0.02] p-5 shadow-none transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/[0.035]">
                    <div className="flex items-center justify-between"><Icon className="size-5 text-cyan-300" /><span className="font-mono text-[10px] text-zinc-600">{capability.number}</span></div>
                    <h3 className="mt-7 font-semibold">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{capability.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-20 border-y border-white/8 bg-[#080d0b] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="section-label">02 / Tech stack</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Tools I build with.</h2></div>
            <p className="max-w-xl leading-7 text-zinc-500 lg:justify-self-end">A modern JavaScript and TypeScript stack for building fast interfaces, flexible APIs and maintainable data layers.</p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stack.map((item, index) => (
              <div key={item} className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045]">
                <span className="font-mono text-[10px] text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-cyan-100 sm:text-base">{item}</span>
              </div>
            ))}
            <div className="hidden min-h-28 items-end rounded-2xl border border-dashed border-cyan-300/20 p-5 lg:flex"><span className="font-mono text-xs text-cyan-300/60">always learning +</span></div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="section-label">03 / Selected work</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">One focused product.</h2></div>
            <Badge variant="outline" className="w-fit"><Sparkles className="size-3 text-cyan-300" /> Featured project</Badge>
          </div>

          <Card className="mt-12 overflow-hidden border-white/10 bg-[#0a100e]">
            <CardContent className="grid gap-0 p-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-emerald-300/10 text-emerald-300"><FileSpreadsheet /></span>
                    <Badge>Full-stack platform</Badge>
                    <Badge variant="outline">In development</Badge>
                  </div>
                  <h3 className="mt-9 max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                    Excel Data <span className="text-zinc-500">Standardization &amp; Validation</span> Platform
                  </h3>
                  <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                    A full-stack platform that transforms heterogeneous asset spreadsheets into organization-standard Excel workbooks. It detects worksheet structures, normalizes data, supports automatic and manual column mapping, validates data quality, and allows corrections before export.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      "Automatic worksheet detection and safe column mapping",
                      "In-app data correction without changing the source file",
                      "Versioned Excel templates with rollback support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-300/10 text-emerald-300"><Check className="size-3" /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <div className="flex flex-wrap gap-2">
                    {projectStack.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                  <Button className="mt-7" variant="outline" asChild>
                    <a href="https://github.com/pgplagrob/excel-converter" target="_blank" rel="noopener noreferrer">
                      <Code2 /> View source on GitHub <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[32rem] overflow-hidden border-t border-white/8 bg-[#07110d] p-5 sm:p-8 lg:min-h-[42rem] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(52,211,153,0.16),transparent_34%)]" />
                <div className="relative mx-auto flex h-full max-w-xl flex-col justify-center gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0d1512] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-lg bg-emerald-300/10"><FileSpreadsheet className="size-4 text-emerald-300" /></span>
                        <div><p className="text-xs font-medium text-zinc-300">Data pipeline</p><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">excel-converter</p></div>
                      </div>
                      <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[9px] text-emerald-300">VALIDATED</span>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {projectPipeline.map((step, index) => (
                        <div key={step} className="relative rounded-xl border border-white/8 bg-black/20 p-3.5">
                          <p className="font-mono text-[9px] text-emerald-300/60">0{index + 1}</p>
                          <p className="mt-3 text-xs font-medium text-zinc-300">{step}</p>
                          {index < projectPipeline.length - 1 ? <span className="absolute -right-1.5 top-1/2 hidden size-3 -translate-y-1/2 rotate-45 border-r border-t border-emerald-300/30 bg-[#0d1512] sm:block" /> : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["67", "Tests passing"],
                      ["2", "Excel formats"],
                      ["5", "Template versions"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.025] p-4 sm:p-5">
                        <p className="text-2xl font-semibold text-emerald-200 sm:text-3xl">{value}</p>
                        <p className="mt-2 text-[10px] leading-4 text-zinc-500 sm:text-xs">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">Validation coverage</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Required fields", "Dates", "Numbers", "Status", "Duplicates"].map((item) => (
                        <span key={item} className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-zinc-400"><Check className="size-3 text-emerald-300" />{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-5 pb-8 pt-12 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="section-label">04 / Let&apos;s connect</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Have an idea worth building?</h2><p className="mt-5 max-w-xl leading-7 text-zinc-400">I&apos;m open to full-stack opportunities and thoughtful collaborations. Let&apos;s turn the next idea into something useful.</p></div>
            <Button size="lg" asChild><a href="#top">Start from the top <ArrowUpRight /></a></Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© 2026 Weraphat Pankab</p><p className="font-mono">Designed &amp; built with Next.js</p>
      </footer>
    </main>
  );
}
