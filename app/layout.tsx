import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Isab Sk | Creative Developer",
  description:
    "Creative developer based in India, specializing in high-performance web applications, clean architecture, and immersive digital experiences.",
  keywords: [
    "Isab Sk",
    "Creative Developer",
    "Web Developer",
    "Full Stack",
    "Java",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Isab Sk" }],
  openGraph: {
    title: "Isab Sk | Creative Developer",
    description:
      "Creative developer specializing in high-performance web applications and immersive digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-poppins antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />

          {/* Custom cursor - Desktop only */}
          <CustomCursor />

          {/* Main content */}
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
