import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amen KAABACHI - Full-Stack Developer",
  description: "Portfolio of Amen KAABACHI, Full-Stack Developer from Gafsa, Tunisia. Specialized in web and mobile applications.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-16x16.svg',
        sizes: '16x16',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      }
    ],
    apple: {
      url: '/favicon-192x192.svg',
      sizes: '192x192',
      type: 'image/svg+xml',
    },
  },
  manifest: '/manifest.json',
  themeColor: '#4CA771',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 md:ml-64 transition-all duration-300">
                <div className="mobile-content-padding md:p-0">
                  {children}
                </div>
              </main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
