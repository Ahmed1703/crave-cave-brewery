import type { Metadata } from "next";
import { Permanent_Marker, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import FloatingCart from "@/components/FloatingCart";

const displayFont = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crave Cave Brewery | Lokalt laget med entusiasme",
  description:
    "Norges minste profesjonelle bryggeri. Håndbrygget øl fra Averøy med lidenskap og entusiasme siden 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}>
        <div className="grain" />
        <CartProvider>
          {children}
          <FloatingCart />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
