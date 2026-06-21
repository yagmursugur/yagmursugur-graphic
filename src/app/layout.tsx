import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://yagmursugur.github.io/yagmursugur-graphic/";
const title = "Yağmur Sügür - Grafik Tasarımcı";
const description =
  "Yağmur Sügür'ün grafik tasarım portfolyosu: marka kimliği, sosyal medya, afiş ve baskı tasarımları.";
const ogImage = `${siteUrl}images/projects/noirel/cover.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Yağmur Sügür",
    type: "website",
    locale: "tr_TR",
    images: [{ url: ogImage, width: 1600, height: 1132 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
