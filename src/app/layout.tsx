import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tribble — Conversor de archivos",
  description: "Aplicación para convertir archivos de un formato a otro de forma totalmente gratuita e ilimitada.",
  creator: "@santvaz en GitHub",
  keywords: "image converter, conversor de archivos, pasar un archivo de un formato a otro, convertidor de archivos, file converter, tribble, unlimited file converter, conversión de archivos gratis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
