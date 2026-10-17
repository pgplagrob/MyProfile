import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weraphat Pankab — Full-stack Developer",
  description:
    "Portfolio of Weraphat Pankab, a full-stack developer building modern web products with Next.js, React, Node.js and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
