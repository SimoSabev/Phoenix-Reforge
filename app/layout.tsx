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
  title: "Phoenix Reforge - Web Dev & Design",
  description: "Crafting exceptional digital experiences.",
  metadataBase: new URL("https://www.phoenixreforge.org"),
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  openGraph: {
    title: "Phoenix Reforge - Web Dev & Design",
    description: "Crafting exceptional digital experiences.",
    url: "https://www.phoenixreforge.org",
    siteName: "Phoenix Reforge",
    images: [
      {
        url: op.src, // Ideally use a larger banner image (e.g. /og-image.png)
        width: 1200,
        height: 630,
        alt: "Phoenix Reforge Logo",
      },
    ],
    type: "website",
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
