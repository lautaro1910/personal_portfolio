"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Download, Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from "emailjs-com";

// Hook personalizado para el tema
function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark(!isDark) };
}

// Componente para el texto cambiante
function TypingEffect() {
  const titles = [
    "Desarrollador Backend",
    "Profesor Universitario",
    "Estudiante de Ingeniería en Informática",
    "Conocimiento en desarrollo de APIs"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const current = titles[currentTitle];

      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, titles, typingSpeed]);

  return (
    <span className="text-xl md:text-2xl text-muted-foreground">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="text-accent"
      >
        |
      </motion.span>
    </span>
  );
}

// Componente Hero
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Lautaro Soria
        </motion.h1>

        <motion.div
          className="mb-8 h-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypingEffect />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Descargar CV
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Componente About
function About() {
  const technologies = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Angular",
    "Javascript",
    "Bootstrap",
    "Tailwind",
    "C",
    "Apache MVC",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sobre mí</h2>

          <motion.p
            className="text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Desarrollador backend apasionado por crear sistemas robustos y escalables. Actualmente estudiante de Ingeniería en
            Informática, realizando mi proyecto final integrador. Desarrollador en Baufest aplicando Java, Spring Boot, SQL y
            APIs REST.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente Projects
function Projects() {
  const projects = [
    {
      title: "PuntoLima web page",
      description:
        "Desarrollo de página web para la empresa PuntoLima dedicada a marketing y servicios digitales",
      image: "/puntoLima_proyecto.png?height=300&width=400",
      github: "#",
      demo: "#",
      technologies: ["React", "HTML", "Vite", "Nextjs", "Tailwind"],
    },
    {
      title: "Sistema de Gestión Empresarial",
      description:
        "Backend escalable para sistema ERP con Spring Boot, JPA, autenticación JWT y arquitectura hexagonal",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      technologies: ["Java", "Spring Security", "MySQL", "JWT", "Maven"],
    },
    {
      title: "Página web para Noticiero ficticio",
      description:
        "Página web para noticiero no real, con creación y modificación de noticias",
      image: "/noticiero_proyecto.png?height=300&width=400",
      github: "#",
      demo: "#",
      technologies: ["React", "NextJS", "Postgresql", "Tailwind"],
    },
    {
      title: "Analytics Dashboard Backend",
      description:
        "Backend para dashboard de analytics con procesamiento de big data usando Apache Kafka y Elasticsearch",
      image: "/placeholder.svg?height=300&width=400",
      github: "#",
      demo: "#",
      technologies: ["Apache MVC", "Python", "Spring Boot"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-white transition-colors bg-transparent"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent hover:text-white transition-colors bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente Experience
function Experience() {
  const experiences = [
    {
      year: "Jul 2025 - Presente",
      title: "Backend Developer",
      company: "Baufest",
      description: "Desarrollo de microservicios para BBVA Arg.",
    },
    {
      year: "Ago 2022 - Sep 2025",
      title: "Profesor auxiliar",
      company: "UNSL",
      description: `Auxiliar de segunda categoría en las materias de "Programación 1" y "Resolución de Problemas y Algoritmos".
Actividades desarrolladas:
- Explicación y resolución de ejercicios frente a alumnos.
- Resolución de dudas por parte de los alumnos.
- Corrección de actividades integradoras y parciales.`,
    },
    {
      year: "Ene 2025 - Jun 2025",
      title: "Intern IT Department",
      company: "EDESAL S.A",
      description: `Actividades desarrolladas:
- Formé parte del equipo encargado de la creación del Sistema de TOTEM de la empresa.
- Participé en la renovación de la Oficina Virtual y en la creación del subsistema de envío de notificaciones.
- Realicé limpieza y mantenimiento de datos en distintas tablas, optimizando hasta en un 70%.
- Creé scripts para la obtención de datos específicos y limpios de la BD, además de métricas y gráficos para su visualización.`,
    },
    {
      year: "Sep 2024 - Dic 2024",
      title: "Software Developer Trainee",
      company: "RunaID",
      description:
        "Trabajé con diversas herramientas para la implementación de nuevas funcionalidades, la resolución de problemas y la revisión de procedimientos SQL.",
    },
  ];

  const education = [
    {
      year: "2019 - 2025",
      title: "Ingeniería en Informática",
      company: "Universidad Nacional de San Luis",
      description:
        "Especialización en desarrollo de software, arquitecturas de sistemas y gestión de proyectos informáticos.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experiencia & Educación
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiencia */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Experiencia</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="text-sm text-accent font-medium mb-1">{exp.year}</div>
                  <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                  <div className="text-primary font-medium mb-2">{exp.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Educación</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-accent/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                  <div className="text-sm text-accent font-medium mb-1">{edu.year}</div>
                  <h4 className="text-lg font-bold mb-1">{edu.title}</h4>
                  <div className="text-primary font-medium mb-2">{edu.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Componente Contact
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error enviando email:", error);
      alert("Hubo un problema al enviar el mensaje.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contacto</h2>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-8 text-center"
              >
                <p className="text-green-600 dark:text-green-400 font-medium">
                  ¡Mensaje enviado correctamente! Te responderé pronto.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <Textarea
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-primary transition-colors min-h-[120px]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Enviar Mensaje
            </Button>
          </motion.form>

          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, href: "https://github.com/lautaro1910", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lautaro-soria/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:d.lautaro.soria@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 bg-card border border-border rounded-full hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente principal
export default function Portfolio() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Header con toggle de tema */}
      <motion.header
        className="fixed top-0 right-0 z-50 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.header>

      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p className="text-sm">© 2025 Lautaro Soria. Same info with a better presentation (i used other portfolios as a guide... i am backend after all)</p>
      </footer>
    </div>
  );
}
