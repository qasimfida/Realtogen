"use client";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./globals.css";
import { AuthProvider } from "../app/context/AuthContext"; 
import { Inter } from "next/font/google";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body > 
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
