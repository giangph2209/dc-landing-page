import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DC Software - Dịch vụ triển khai Phần mềm tín cậy",
  description:
    "Chúng tôi cung cấp giải pháp phần mềm toàn diện với 800+ developers và 150+ dự án thành công",
  keywords: [
    "DC Software",
    "dịch vụ triển khai phần mềm",
    "phần mềm tín cậy",
    "outsourcing",
    "digital century software",
    "dc software",
    "dc software company",
    "dc software solutions",
    "dc software development",
    "thiết kế website",
    "thiết kế ứng dụng",
    "thiết kế ứng dụng di động",
    "thiết kế ứng dụng web",
    "thiết kế ứng dụng mobile",
    "thiết kế ứng dụng desktop",
    "thiết kế ứng dụng backend",
    "thiết kế ứng dụng frontend",
    "thiết kế ứng dụng fullstack",
    "thiết kế ứng dụng AI",
    "thiết kế ứng dụng blockchain",
    "thiết kế ứng dụng IoT",
    "thiết kế ứng dụng blockchain",
  ],
  authors: [{ name: "DC Software" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "DC Software - Dịch vụ triển khai Phần mềm tín cậy",
    description:
      "Chúng tôi cung cấp giải pháp phần mềm toàn diện với 800+ developers và 150+ dự án thành công",
    url: "https://example.com",
    siteName: "DC Software",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "DC Software - Đối tác triển khai phần mềm tin cậy",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://example.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${ibmPlexSans.className} antialiased bg-white`}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        <Analytics />
      </body>
    </html>
  );
}
