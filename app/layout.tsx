import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SEO Friendly - AI-Driven SEO & Page Analytics",
  description:
    "Transform your website performance with AI-powered SEO analysis, real-time insights, and comprehensive page analytics.",
  generator: "v0.app",
  keywords: ["SEO", "Analytics", "AI", "Page Speed", "Web Performance", "Search Engine Optimization"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
