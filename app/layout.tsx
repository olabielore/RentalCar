
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

import "./globals.css";

import Header from "@/components/Header/Header";

const roboto = Roboto({
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-roboto', 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: 'RentalCar',
  description: 'A simple and efficient note-taking application',
  openGraph: {
    title: "RentalCar",
    description: 'A simple and efficient note-taking application',
    url: "https://car-rental-api.goit.global",
    images: [
      {
        url: 'https://car-rental-api.goit.global',
        width: 1200,
        height: 630,
        alt: "RentalCar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
            <Header />

              <main>
                {children}
              </main>
            
      </body>
    </html>
  );
}
