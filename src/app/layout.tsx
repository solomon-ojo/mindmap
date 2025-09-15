import type { Metadata } from "next";
import { Lato} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Add more weights if needed
});


export const metadata: Metadata = {
  title: "MindMap",
  description: "MindMap Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
