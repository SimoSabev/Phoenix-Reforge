import favicon from "@/public/phoenixfavicon.png"
import op from "@/public/op.png"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Phoenix Reforge - Уеб разработка и дизайн в България",
  description:
      "Агенция за уеб разработка и дизайн. Изграждаме модерни, бързи и впечатляващи уеб сайтове за бизнеси и креативни проекти в България и Европа.",
  metadataBase: new URL("https://www.phoenixreforge.org"),
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  openGraph: {
    title: "Phoenix Reforge - Уеб разработка и дизайн",
    description:
        "Модерни уеб сайтове и дигитални решения за бизнеси в България и чужбина.",
    url: "https://www.phoenixreforge.org",
    siteName: "Phoenix Reforge",
    images: [
      {
        url: op.src,
        width: 1200,
        height: 630,
        alt: "Phoenix Reforge - Уеб агенция",
      },
    ],
    type: "website",
    locale: "bg_BG", // 🇧🇬 важно за таргетиране в България
  },
}


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon.src} />
        <meta property="og:image" content={favicon.src} />
        <meta name="twitter:image" content={favicon.src} />
      </head>
      <body>{children}</body>
      </html>
  )
}
