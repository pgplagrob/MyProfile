import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Building2,
  Check,
  Clock3,
  Code2,
  Database,
  FileSpreadsheet,
  Mail,
  ScanLine,
  Server,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
} from "lucide-react";
import Image from "next/image";

import { CopyLineId } from "@/components/copy-line-id";
import { ProjectGallery } from "@/components/project-gallery";
import { SiteHeader } from "@/components/site-header";
import { AmbientEffects, SiteIntro } from "@/components/ambient-effects";
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
    title: "หน้าที่คนใช้งาน",
    description:
      "ทำหน้าเว็บให้ใช้งานง่ายและแสดงผลได้ดีทั้งบนมือถือและคอมพิวเตอร์",
  },
  {
    icon: Server,
    number: "02",
    title: "ระบบเบื้องหลัง",
    description:
      "เขียน API และ logic ให้ส่วนต่าง ๆ ของเว็บทำงานเข้ากัน",
  },
  {
    icon: Database,
    number: "03",
    title: "ฐานข้อมูล",
    description:
      "จัดโครงสร้างข้อมูลด้วย MySQL และ Prisma ให้ตรงกับสิ่งที่ระบบต้องใช้",
  },
];

const projectPipeline = [
  "อ่านไฟล์",
  "ตรวจจับ",
  "จัดรูปแบบ",
  "จับคู่",
  "ตรวจสอบ",
  "ส่งออก",
];

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

const erpStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Bun",
  "Elysia",
  "Prisma",
  "MySQL",
  "Better Auth",
  "Python OCR",
];

const erpModules = [
  {
    icon: UsersRound,
    code: "PEOPLE",
    title: "ข้อมูลพนักงาน",
    description: "ประวัติพนักงาน การเริ่มงาน และข้อมูลทีม",
  },
  {
    icon: Clock3,
    code: "TIME",
    title: "เวลาเข้างานและกำลังคน",
    description: "เช็กชื่อ การลา และจัดคนทำงานแทน",
  },
  {
    icon: Building2,
    code: "CONTRACTS",
    title: "สัญญาลูกค้า",
    description: "จัดการองค์กร สาขา และติดตามข้อตกลง",
  },
  {
    icon: WalletCards,
    code: "PAYROLL",
    title: "จัดการเงินเดือน",
    description: "คำนวณเงินเดือนรายวันหรือรายเดือน พร้อมออกสลิป",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative isolate overflow-hidden bg-[#020304] text-white">
      <SiteIntro />
      <AmbientEffects />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52rem] bg-[radial-gradient(circle_at_72%_16%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_18%_5%,rgba(45,212,191,0.07),transparent_24%)]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[52rem] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <SiteHeader />

      <section data-reveal className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-8">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3 sm:mb-7">
            {/* <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-cyan-300" />
            </span> */}
            {/* <span className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
              พร้อมรับฟังโอกาสและโปรเจกต์ที่น่าสนใจ
            </span> */}
          </div>

          <p className="mb-3 font-serif text-sm text-cyan-200 sm:text-base">
            สวัสดีครับ ผม Weraphat
          </p>
          <h1 className="max-w-4xl text-balance text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.92] tracking-normal sm:leading-[0.88]">
            Full-stack
            <span className="block text-zinc-500">developer</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            ผมทำเว็บด้วย Next.js, React และ Node.js ตอนนี้กำลังทำระบบจัดการไฟล์ Excel
            กับระบบ ERP อยู่ ลองเลื่อนลงไปดูผลงานได้เลยครับ
          </p>

          {/* <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#work">
                ดูโปรเจกต์ <ArrowDownRight />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#stack">เครื่องมือที่ใช้</a>
            </Button>
          </div> */}
        </div>

        <div className="group relative mx-auto mb-12 w-full max-w-[31rem] lg:mx-0 lg:mb-10 lg:justify-self-end">
          <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/12 bg-[#080b0b] shadow-[0_45px_120px_rgba(0,0,0,0.58)]">
            <Image
              src="/weraphat-portrait.jpg"
              alt="ภาพถ่ายของ Weraphat Pankab"
              width={758}
              height={1024}
              priority
              sizes="(max-width: 1024px) 92vw, 496px"
              className="h-full w-full object-cover object-[center_38%] saturate-[0.82] transition duration-1000 ease-out group-hover:scale-[1.025] group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,3,4,0.82),transparent_38%),linear-gradient(to_right,rgba(2,3,4,0.22),transparent_42%)]" />
            {/* <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
              <span className="rounded-full border border-white/12 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
                Weraphat / 2026
              </span>
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-100/70">
                <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                นักพัฒนาเว็บ
              </span>
            </div> */}
          </div>

          <Card className="absolute -bottom-10 left-3 right-3 overflow-hidden rounded-2xl border-white/12 bg-[#07100e]/92 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:-left-10 sm:right-auto sm:w-[21rem]">
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-red-400/70" />
                <span className="size-2 rounded-full bg-amber-300/70" />
                <span className="size-2 rounded-full bg-emerald-300/70" />
              </div>
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-zinc-600">
                developer.ts
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-4 px-4 py-3.5 font-mono text-[10px] leading-5 sm:text-[11px]">
              <div>
                <p><span className="text-fuchsia-300">const</span>{" "}<span className="text-cyan-200">developer</span>{" "}<span className="text-zinc-500">=</span>{" "}<span className="text-zinc-300">&#123;</span></p>
                <p className="pl-4"><span className="text-zinc-500">role:</span>{" "}<span className="text-amber-200">&quot;Full-stack&quot;</span>,</p>
                <p className="pl-4"><span className="text-zinc-500">status:</span>{" "}<span className="text-emerald-300">&quot;Building&quot;</span></p>
                <p className="text-zinc-300">&#125;;</p>
              </div>
              <div className="mb-1 flex items-center gap-1.5 text-zinc-500">
                <Braces className="size-3.5 text-cyan-300" />
                <span className="whitespace-nowrap">2 โปรเจกต์</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* <section className="border-y border-white/8 bg-white/[0.018] py-5" aria-label="Technology stack preview">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 sm:px-8 lg:px-10">
          {stack.map((item, index) => (
            <div key={item} className="flex items-center gap-7">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{item}</span>
              {index < stack.length - 1 ? <span className="hidden size-1 rounded-full bg-cyan-300/50 sm:block" /> : null}
            </div>
          ))}
        </div>
      </section> */}

      <section
        data-reveal
        id="about"
        className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              I work across
              <span className="block text-zinc-500">frontend and backend.</span>
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-2xl sm:leading-10">
              ผมชื่อ Weraphat ทำงานได้ตั้งแต่หน้าเว็บที่คนเห็น ไปจนถึง API และฐานข้อมูลที่อยู่ข้างหลัง
            </p>
            <p className="mt-6 max-w-xl leading-7 text-zinc-500">
              เวลาทำเว็บ ผมอยากรู้ด้วยว่าข้อมูลมาจากไหนและถูกเอาไปใช้อย่างไร จะได้แก้ปัญหาได้ตรงจุด
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <Card
                    key={capability.title}
                    className="group rounded-2xl bg-white/[0.02] p-4 shadow-none transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/[0.035] sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="size-5 text-cyan-300" />
                      <span className="font-mono text-[10px] text-zinc-600">
                        {capability.number}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold sm:mt-7">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {capability.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        id="stack"
        className="relative scroll-mt-20 border-y border-white/8 bg-black/20 px-5 py-16 backdrop-blur-[1px] sm:px-8 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Teach Stack
              </h2>
            </div>
            {/* <p className="max-w-xl leading-7 text-zinc-500 lg:justify-self-end">
              หลัก ๆ ใช้ JavaScript กับ TypeScript และเลือกเครื่องมืออื่นตามลักษณะของแต่ละโปรเจกต์
            </p> */}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-14 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {stack.map((item, index) => (
              <div
                key={item}
                className="group flex min-h-20 flex-col justify-between rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045] sm:min-h-28 sm:p-5"
              >
                <span className="font-mono text-[10px] text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-cyan-100 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
            <div className="hidden min-h-28 items-end rounded-2xl border border-dashed border-cyan-300/20 p-5 lg:flex">
              <span className="font-mono text-xs text-cyan-300/60">
                ยังมีอีกหลายอย่างให้ลอง +
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        id="work"
        className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                โปรเจกต์ที่กำลังทำ
              </h2>
            </div>
            <Badge variant="outline" className="w-fit">
              <Sparkles className="size-3 text-cyan-300" /> ดูรายละเอียด
            </Badge>
          </div>

          <Card className="mt-8 overflow-hidden border-white/10 bg-[#0a100e] sm:mt-12">
            <CardContent className="grid min-w-0 gap-0 p-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex min-w-0 flex-col justify-between p-5 sm:p-10 lg:p-12">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-emerald-300/10 text-emerald-300">
                      <FileSpreadsheet />
                    </span>
                    <Badge>เครื่องมือจัดการไฟล์</Badge>
                    <Badge variant="outline">กำลังทำอยู่</Badge>
                  </div>
                  <h3 className="mt-7 max-w-xl break-words text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:mt-9 sm:text-5xl">
                    จัดไฟล์ Excel{" "}
                    <span className="text-zinc-500">
                      ให้เป็นแบบเดียวกัน
                    </span>
                  </h3>
                  <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                    ไฟล์ทะเบียนทรัพย์สินที่ได้มามักจัดคอลัมน์ไม่เหมือนกัน ผมเลยทำเครื่องมือที่อ่านไฟล์
                    จับคู่ข้อมูลกับเทมเพลต แล้วให้ตรวจและแก้รายการก่อนดาวน์โหลดไฟล์ที่จัดเรียบร้อยแล้ว
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      "จับคู่คอลัมน์ให้อัตโนมัติ หรือเลือกจับคู่เอง",
                      "แก้ข้อมูลก่อนส่งออก โดยไม่เปลี่ยนไฟล์ต้นฉบับ",
                      "เก็บเทมเพลตเป็นเวอร์ชันและย้อนกลับได้",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-300/10 text-emerald-300">
                          <Check className="size-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <div className="flex flex-wrap gap-2">
                    {projectStack.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button className="mt-7" variant="outline" asChild>
                    <a
                      href="https://github.com/pgplagrob/excel-converter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 /> ดูโค้ดใน GitHub <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative min-w-0 overflow-hidden border-t border-white/8 bg-[#07110d] p-4 sm:p-8 lg:min-h-[42rem] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(52,211,153,0.16),transparent_34%)]" />
                <div className="relative mx-auto flex h-full min-w-0 max-w-xl flex-col justify-center gap-4">
                  <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0d1512] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-lg bg-emerald-300/10">
                          <FileSpreadsheet className="size-4 text-emerald-300" />
                        </span>
                        <div>
                          <p className="text-xs font-medium text-zinc-300">
                            ขั้นตอนในระบบ
                          </p>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                            excel-converter
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[9px] text-emerald-300">
                        ตรวจสอบแล้ว
                      </span>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {projectPipeline.map((step, index) => (
                        <div
                          key={step}
                          className="relative rounded-xl border border-white/8 bg-black/20 p-3.5"
                        >
                          <p className="font-mono text-[9px] text-emerald-300/60">
                            0{index + 1}
                          </p>
                          <p className="mt-3 text-xs font-medium text-zinc-300">
                            {step}
                          </p>
                          {index < projectPipeline.length - 1 ? (
                            <span className="absolute -right-1.5 top-1/2 hidden size-3 -translate-y-1/2 rotate-45 border-r border-t border-emerald-300/30 bg-[#0d1512] sm:block" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
                    {[
                      ["67", "เทสต์ผ่าน"],
                      ["2", "ชนิดไฟล์"],
                      ["5", "เทมเพลต"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="min-w-0 rounded-xl border border-white/8 bg-white/[0.025] p-3 sm:rounded-2xl sm:p-5"
                      >
                        <p className="text-2xl font-semibold text-emerald-200 sm:text-3xl">
                          {value}
                        </p>
                        <p className="mt-2 text-[10px] leading-4 text-zinc-500 sm:text-xs">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div> */}

                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                      เช็กข้อมูล
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "ช่องที่จำเป็น",
                        "วันที่",
                        "ตัวเลข",
                        "สถานะ",
                        "ข้อมูลซ้ำ",
                      ].map((item) => (
                        <span
                          key={item}
                          className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-zinc-400"
                        >
                          <Check className="size-3 text-emerald-300" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-w-0 overflow-hidden lg:col-span-2">
                <ProjectGallery />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 overflow-hidden border-white/10 bg-[#0a0f12]">
            <CardContent className="grid min-w-0 gap-0 p-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex min-w-0 flex-col justify-between p-5 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><Building2 /></span>
                    <Badge>ระบบจัดการงานและพนักงาน</Badge>
                    <Badge variant="outline">กำลังทำอยู่</Badge>
                  </div>
                  <h3 className="mt-8 max-w-xl break-words text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:mt-9 sm:text-5xl">
                    Pocky ERP <span className="text-zinc-500">จัดการพนักงานและงานบริการ</span>
                  </h3>
                  <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                    โปรเจกต์นี้รวมงานที่ปกติกระจายอยู่หลายที่ ตั้งแต่ข้อมูลพนักงานกับเวลาเข้างาน
                    ไปจนถึงสัญญาลูกค้าและเงินเดือน โดยมีหน้าทำงานแยกสำหรับผู้ดูแล ฝ่ายบุคคล
                    ฝ่ายการเงิน และพนักงาน
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      "แต่ละบทบาทเห็นหน้าทำงานของตัวเอง และล็อกอินด้วย OTP",
                      "บันทึกเวลา ลางาน และจัดคนมาทำงานแทน",
                      "เก็บข้อมูลสัญญา เงินเดือน และเอกสารพนักงาน",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-cyan-300"><Check className="size-3" /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <div className="flex flex-wrap gap-2">
                    {erpStack.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                  <div className="mt-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    <ShieldCheck className="size-4 text-cyan-300" /> ระบบสำหรับใช้งานภายใน
                  </div>
                </div>
              </div>

              <div className="relative min-h-[32rem] min-w-0 overflow-hidden border-t border-white/8 bg-[#071014] p-4 sm:p-8 lg:min-h-[42rem] lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.17),transparent_34%)]" />
                <div className="relative mx-auto flex h-full max-w-xl flex-col justify-center gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0b1418] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-lg bg-cyan-300/10"><Building2 className="size-4 text-cyan-300" /></span>
                        <div><p className="text-xs font-medium text-zinc-300">ภาพรวม</p><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">pocky-erp / ตัวอย่าง</p></div>
                      </div>
                      <span className="rounded-full bg-cyan-300/10 px-2.5 py-1 font-mono text-[9px] text-cyan-300">พร้อมใช้งาน</span>
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {erpModules.map((module) => {
                        const Icon = module.icon;
                        return (
                          <div key={module.code} className="rounded-xl border border-white/8 bg-black/20 p-4">
                            <div className="flex items-center justify-between">
                              <Icon className="size-4 text-cyan-300" />
                              <span className="font-mono text-[8px] tracking-[0.16em] text-cyan-300/50">{module.code}</span>
                            </div>
                            <p className="mt-5 text-sm font-medium text-zinc-300">{module.title}</p>
                            <p className="mt-1 text-[11px] leading-5 text-zinc-600">{module.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                    <div className="flex items-center gap-2">
                      <ScanLine className="size-4 text-cyan-300" />
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">ฟังก์ชันอื่น ๆ</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["อ่านบัตรประชาชนด้วย OCR", "ขั้นตอนอนุมัติ", "เข้าสู่ระบบด้วย OTP", "สลิปเงินเดือน PDF"].map((item) => (
                        <span key={item} className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-zinc-400"><Check className="size-3 text-cyan-300" />{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        data-reveal
        id="contact"
        className="scroll-mt-20 px-5 pb-8 pt-12 sm:px-8 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.055] px-5 py-10 sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Interested in working together?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                ถ้าสนใจงานที่ผมทำ หรือมีโปรเจกต์เว็บที่อยากคุยกัน ส่งอีเมลหรือทัก LINE มาได้เลยครับ
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href="mailto:pgplagrob@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a100e]/70 p-4 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:gap-4 sm:p-5"
              >
                <span className="hidden size-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200 min-[360px]:grid">
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-zinc-400">อีเมล</span>
                  <span className="block break-all text-sm font-medium text-white sm:text-base">pgplagrob@gmail.com</span>
                </span>
                <ArrowUpRight className="hidden size-4 shrink-0 text-cyan-200 sm:block" />
              </a>
              <CopyLineId />
            </div>
          </div>
        </div>
      </section>

      <footer data-reveal className="relative mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="font-mono">ออกแบบและพัฒนาด้วย Next.js</p>
      </footer>
    </main>
  );
}
