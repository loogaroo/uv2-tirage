import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: 'white',
}

export const metadata: Metadata = {
  title: "Tirage UV2 - France Judo",
  description: "Logiciel de tirage des techniques pour l'UV2",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["judo", "dan", "france", "tirage"],
  //themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Emmanuel FAIVRE",
      url: "https://www.linkedin.com/in/emmanuelfaivre/",
    },
  ],
  //viewport:viewport
   // "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
