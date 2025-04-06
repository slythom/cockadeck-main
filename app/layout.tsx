import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CockaDeck",
  description: "Work in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-10">
        {children}
      </body>
    </html>
  );
}
