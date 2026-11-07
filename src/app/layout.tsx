import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legal Representation Platform",
  description: "A platform for finding and managing legal representation in Addis Ababa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
