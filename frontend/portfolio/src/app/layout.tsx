import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Nav from "./(components)/Nav";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["300"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jamesmdev",
  description: "Jddev portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${open_sans.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
