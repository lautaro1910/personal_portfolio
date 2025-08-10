import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lautaro Soria - Desarrollador Backend & Profesor Universitario",
    template: "%s | Lautaro Soria",
  },
  description:
    "Desarrollador Backend con conocimientos en arquitecturas escalables, APIs robustas y microservicios. Profesor universitario y estudiante de Ingeniería en Informática con más de 5 años de experiencia.",
  keywords: [
    "desarrollador backend",
    "java",
    "spring boot",
    "apis rest",
    "microservicios",
    "profesor universitario",
    "arquitectura software",
    "mysql",
    "nodejs",
    "angular",
    "postgresql",
    "mongodb",
    "docker",
    "c",
    "aws",
  ],
  authors: [{ name: "Lautaro Soria", url: "https://lautaro.vercel.app" }],
  creator: "Lautaro Soria",
  publisher: "Lautaro Soria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lautaro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lautaro.vercel.app",
    title: "Lautaro Soria - Desarrollador Backend & Profesor Universitario",
    description:
      "Desarrollador Backend especializado en arquitecturas escalables, APIs robustas y microservicios. Profesor universitario con más de 5 años de experiencia.",
    siteName: "Lautaro Soria Web Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lautaro Soria - Desarrollador Backend",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B1E3D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lautaro Soria",
              url: "https://lautaro.vercel.app",
              image: "https://lautaro.vercel.app/profile-image.jpg",
              sameAs: [
                "https://github.com/lautaro1910/",
                "https://www.linkedin.com/in/lautaro-soria/",
              ],
              jobTitle: [
                "Desarrollador Backend",
                "Profesor Universitario",
                "Estudiante de Ingeniería en Informática",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Baufest",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad Nacional de San Luis",
              },
              knowsAbout: [
                "Java",
                "Spring Boot",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "MySQL",
                "Angular",
                "C",
                "AWS",
                "Microservicios",
                "APIs REST",
              ],
              description:
                "Desarrollador Backend con conocimientos en arquitecturas escalables, APIs robustas y microservicios. Profesor universitario con más de 3 años de experiencia.",
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
