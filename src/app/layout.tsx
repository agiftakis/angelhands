// src/app/layout.tsx

import "./globals.css"; // Keep this import for Tailwind and other global styles

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Import Geist directly from next/font/google
import { Montserrat } from "next/font/google"; // <-- NEW: Import Montserrat here!
// src/app/layout.tsx
import {connectMongoDB} from "../config/mongodb.ts";
import ThemeProvider from "@/theme";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

// Define Montserrat using next/font/google
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", // Important for preventing FOUT/FOUC, ensures text is visible while loading
  variable: "--font-montserrat", // Define a CSS variable for Montserrat
});

// Define Geist as you already have
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Good practice for all fonts
});

//Assuming Geist_Mono is also handled similarly
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angel-Hands",
  description: "NextJS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   await connectMongoDB();
  return (
    <ClerkProvider>
    <html lang="en">
      {/* Apply ALL your desired font variables to the html or body element.
          The order here matters for Tailwind defaults.
          We'll set Montserrat as the default 'sans' font in tailwind.config.js
          and put its class here. */}
      <body
        className={`${montserrat.className} ${geistSans.variable} antialiased ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
