import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Opsional: gunakan jika ingin menggunakan CSS variable
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Sesuaikan bobot yang dibutuhkan
});

export const metadata: Metadata = {
  title: "Project Management App",
  description: "Dashboard for Project Management App by Ruri Pelinandang",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
