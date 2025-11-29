import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";

// Harmond - Display font
const harmond = localFont({
  src: [
    {
      path: "../Harmond-Free-For-Personal-Use/Harmond - Free For Personal Use/Harmond-ExtraBoldExpanded.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font
const nohemi = localFont({
  src: [
    {
      path: "../Nohemi/Nohemi/Web-TT/Nohemi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Nohemi/Nohemi/Web-TT/Nohemi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Nohemi/Nohemi/Web-TT/Nohemi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Nohemi/Nohemi/Web-TT/Nohemi-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Nohemi/Nohemi/Web-TT/Nohemi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Creative Developer | Digital Noir Portfolio",
  description:
    "Award-winning creative developer specializing in interactive digital experiences, high-end UI, and 3D web development.",
  keywords: [
    "Creative Developer",
    "Web Developer",
    "UI/UX",
    "Three.js",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Creative Developer" }],
  openGraph: {
    title: "Creative Developer | Digital Noir Portfolio",
    description:
      "Award-winning creative developer specializing in interactive digital experiences.",
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
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
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
