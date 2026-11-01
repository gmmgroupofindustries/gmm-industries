import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMM Group of Industries | Sovereign Conglomerate & Industrial Ecosystem",
  description:
    "The apex corporate portal of GMM Group of Industries. Anchoring manufacturing excellence, heavy engineering, global logistics, and sustainable industrial growth.",
  icons: {
    icon: "/favicon.svg",
    apple: "/brand/gmm-logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF9F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[#FAF9F6] text-[#181D20]">
        {children}
      </body>
    </html>
  );
}
