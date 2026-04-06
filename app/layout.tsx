import type { Metadata } from "next";
import { Manrope, Nunito } from "next/font/google";
import { Header, NavigationBar, Footer } from "@/app/components/layout";
import { CartProvider } from "@/app/context/CartContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Catus - Móveis e Decoração",
  description: "Encontre os melhores móveis e itens de decoração para sua casa. Qualidade, design e conforto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <NavigationBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
