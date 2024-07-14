import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phanox",
  description: "Get your Items",
  icons: {
    icon: "/public/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
