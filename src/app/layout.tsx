"use client";

import "./globals.css";
import { Flowbite } from "flowbite-react";
import { Footer } from "./Components/footer";
import { Header } from "./Components/header";
import { Inter } from "next/font/google";
import Home from "./page";
import Nosotros from "./nosotros/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flowbite>
      <html
        lang="en"
        style={{ maxWidth: "100%", overflowX: "hidden", minHeight: "100vh" }}
      >
        <head>
          <title>CreSiendo - Kinder Garden</title>
        </head>
        <body className="{inter.className} dark:bg-gray-800 dark:text-gray-100 duration-100" style={{ backgroundColor: "#fff" }}>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </Flowbite>
  );
}
