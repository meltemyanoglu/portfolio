import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meltem Yanoglu — Creative Developer",
  description:
    "Creative Developer specialising in AI, Flutter mobile apps, and modern web experiences. Based in Turkey.",
  keywords: ["creative developer", "flutter developer", "AI developer", "portfolio", "Meltem Yanoglu"],
  openGraph: {
    title: "Meltem Yanoglu — Creative Developer",
    description: "Creative Developer specialising in AI, Flutter mobile apps, and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
