import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yaco YardContainers",
  description: "Gestiona tu patio de contenedores.",
  keywords: [
    "Yaco",
    "Contenedores",
    "Gestión de patios contenedores",
    "Puerto",
    "Aduana",
    "Patio de contenedores",
    "Gestión de patios",
    "Transporte",
    "Logística",
    "Gestión de contenedores para puertos en México/Manzanillo",
    "Precio de software para gestión de patios",
    "Software para gestión de patios",
    "Cómo digitalizar un patio de contenedores",
    
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
