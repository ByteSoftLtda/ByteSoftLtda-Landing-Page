import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ByteSoft Ltda | Soluções de Software para negócios",
  description:
    "Serviços personalizados que se adaptam ao seu ambiente.",
  keywords: "software empresarial, sistema web, sistema mobile, soluções SaaS, conformidade LGPD, privacidade de dados, equipe qualificada, agilidade, segurança da informação, plataforma escalável, sistema seguro, desenvolvimento sob medida",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bytesoftltda.com.br/",
    title: "ByteSoft Ltda | Soluções de Software para negócios",
    description:
      "Serviços personalizados que se adaptam ao seu ambiente.",
    siteName: "ByteSoft Ltda",
    images: [
      {
        url: "https://bytesoftltda.com.br/assets/file-D28xI8xw.png",
        width: 1200,
        height: 630,
        alt: "ByteSoft Ltda",
      },
    ],
  },
  icons: {
    icon: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
