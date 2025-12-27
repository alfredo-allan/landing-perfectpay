import { Montserrat, Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/sections/Header"; // Importando o Header que criamos
import "./globals.css";

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
    <html lang="pt-br" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">
        <AuthProvider>
          <ThemeProvider>
            {/* O Header fica aqui, acima do children */}
            <Header />

            {/* O 'children' é onde o conteúdo de cada página será renderizado */}
            <main>{children}</main>

            {/* Se você criar um Footer depois, ele entraria aqui embaixo */}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
