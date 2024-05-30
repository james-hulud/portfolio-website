import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Nav from "../components/Nav";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["300"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Davies | Software Developer",
  description: "Portfolio website",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${open_sans.className}`}>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
