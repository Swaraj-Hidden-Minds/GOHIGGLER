import type { Metadata } from "next";
import { Inter, Fredoka, Cinzel, Manrope, Poppins, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppChat from '@/components/Layout/WhatsAppChat';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  display: 'swap',
  variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
  title: "GOHIGGLER PRIVATE LIMITED",
  description: "Explore the timeless world of GOHIGGLER PRIVATE LIMITED - your gateway to eternal experiences and innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fredoka.variable} ${cinzel.variable} ${manrope.variable} ${poppins.variable} ${beVietnamPro.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
