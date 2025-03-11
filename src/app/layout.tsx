import type { Metadata } from "next";
import "./globals.css";

// COMPONENTS
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "PEAR",
  description: "pear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <NavBar />
        <main className="flex-1 flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
