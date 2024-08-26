import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Cadena",
  description: "Matt Cadena personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className={"container"}>{children}</div>
      </body>
    </html>
  );
}
