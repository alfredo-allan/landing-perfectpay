import { Montserrat, Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { AdModal } from "@/components/AdModal";
import Script from "next/script"; // Importação necessária para o AdSense
import "./globals.css";

export const metadata = {
  title: "Perfect Check | Marketplace de Produtos Verificados",
  description:
    "Curadoria especializada de produtos digitais. Inspeção técnica, segurança e transparência em cada oferta.",
  metadataBase: new URL("https://landing-perfectpay.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inserção do Código de Verificação do AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9286177086047133"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <AdModal />
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
