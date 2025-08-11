export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person", 
        "@id": "https://lautaro-soria.vercel.app/#person",
        name: "Lautaro Soria",
        url: "https://lautaro-soria.vercel.app",
        image: {
          "@type": "ImageObject",
          url: "https://lautaro-soria.vercel.app/profile-image.jpg",
          width: 400,
          height: 400,
        },
        sameAs: [
          "https://github.com/lautaro1910",
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
          url: "https://www.baufest.com",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://lautaro-soria.vercel.app/#website",
        url: "https://lautaro-soria.vercel.app",
        name: "Lautaro Soria Portfolio",
        description:
          "Portfolio profesional de Lautaro Soria - Desarrollador Backend & Profesor Universitario",
        publisher: {
          "@id": "https://lautaro-soria.vercel.app/#person",
        },
        inLanguage: "es-ES",
      },
      {
        "@type": "WebPage",
        "@id": "https://lautaro-soria.vercel.app/#webpage",
        url: "https://lautaro-soria.vercel.app",
        name: "Lautaro Soria - Desarrollador Backend & Profesor Universitario",
        isPartOf: {
          "@id": "https://lautaro-soria.vercel.app/#website",
        },
        about: {
          "@id": "https://lautaro-soria.vercel.app/#person",
        },
        description:
          "Desarrollador Backend especializado en arquitecturas escalables, APIs robustas y microservicios.",
        inLanguage: "es-ES",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
