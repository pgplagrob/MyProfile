import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weraphat Pankab — นักพัฒนาเว็บ Full-stack",
  description:
    "พื้นที่รวบรวมผลงานของ Weraphat Pankab นักพัฒนาเว็บที่ชอบเปลี่ยนไอเดียให้เป็นผลิตภัณฑ์ที่ใช้งานได้จริง ด้วย Next.js, React, Node.js และ TypeScript",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
