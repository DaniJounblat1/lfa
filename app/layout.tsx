import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { LanguageProvider } from "@/contexts/language-context"
// 1. Import the Preloader component
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Labweh Football Academy",
  description: "Local football academy in Labweh, Lebanon - Learn football skills in a fun environment",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {/* 2. Add Preloader here so it sits on top of everything */}
            <Preloader />
            
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton phoneNumber="96176988681" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
