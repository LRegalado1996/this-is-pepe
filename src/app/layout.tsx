import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components";

import "./globals.css";

const textFont = DM_Sans();

export const metadata: Metadata = {
  title: {
    template: "%s | Lucas Regalado",
    default: `This is Pepe | Lucas Regalado`,
  },
  description: `Lucas "Pepe" Regalado is a full stack developer specialized in React, Node.js, and TypeScript. Discover his work, experience, and how to get in touch.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${textFont.className} antialiased flex flex-col items-center justify-center min-w-svw min-h-dvh bg-light-primary`}
      >
        <Header />

        {/* max-w-[1280px] */}
        <main className="flex-1 w-full">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
