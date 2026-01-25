import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Gabriel Santos',
  description: 'Software Developer Trainee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="scroll-smooth antialiased">
        <nav className="border-b border-neutral-200">
          <Navbar />
        </nav>

        <main className="app-container pt-10 md:pt-14">
          {children}
        </main>
      </body>
    </html>
  )
}