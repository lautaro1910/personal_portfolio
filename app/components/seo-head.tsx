import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export function SEOHead({
  title = "Lautaro Soria - Desarrollador Backend & Profesor Universitario",
  description = "Desarrollador Backend especializado en arquitecturas escalables, APIs robustas y microservicios. Profesor universitario con más de 3 años de experiencia.",
  canonical = "https://lautaro.vercel.app",
  ogImage = "https://lautaro.vercel.app/og-image.jpg",
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Additional SEO */}
      <meta name="author" content="Lautaro Soria" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  )
}
