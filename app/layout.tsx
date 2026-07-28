import type { Metadata } from "next";
import { Playfair_Display, Lora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReadingControls from "@/components/ReadingControls";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F8F6" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tuananhhusc.github.io/Phan-Dinh-Hien-Tuong-Anh-Sang-Gia"),
  title: "Phân Định Và An Ủi Giả – Khảo Luận Về Những An Ủi Giả Của Sự Dữ",
  description: "Báo cáo nghiên cứu chuyên sâu về phân định tâm linh, hiện tượng 'ánh sáng giả', và mối liên hệ giữa thần học tu đức Inhaxiô, tâm lý học siêu cá nhân, và triết học hiện sinh.",
  authors: [{ name: "Tác giả Nghiên cứu" }],
  keywords: [
    "phân định",
    "an ủi giả",
    "Thánh Inhaxiô Loyola",
    "Spiritual Bypassing",
    "Mauvaise Foi",
    "thần học tu đức",
    "linh thao",
    "tâm lý học tôn giáo",
  ],
  openGraph: {
    title: "Phân Định Và An Ủi Giả – Khảo Luận Về Những An Ủi Giả Của Sự Dữ",
    description: "Báo cáo nghiên cứu chuyên sâu về phân định tâm linh và hiện tượng 'ánh sáng giả' dưới lăng kính Inhaxiô, tâm lý học và triết học hiện sinh.",
    type: "article",
    locale: "vi_VN",
    siteName: "Phân Định Tâm Linh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phân Định Và An Ủi Giả - Báo cáo Nghiên cứu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phân Định Và An Ủi Giả – Khảo Luận",
    description: "Nghiên cứu về những an ủi giả của sự dữ trong đời sống tâm linh.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${lora.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ReadingControls />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
