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
