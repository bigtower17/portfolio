"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Piattaforma e-commerce completa con gestione inventario, pagamenti e dashboard admin.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Applicazione per la gestione dei task con drag & drop, notifiche real-time e collaborazione team.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard meteo con previsioni dettagliate, grafici interattivi e geolocalizzazione.",
      technologies: ["React", "Chart.js", "Weather API"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "API RESTful",
      description: "API robusta per gestione contenuti con autenticazione JWT, rate limiting e documentazione.",
      technologies: ["Node.js", "Express", "JWT", "Swagger"],
      category: "backend",
      github: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Sito portfolio responsive con CMS headless per la gestione dei contenuti.",
      technologies: ["Next.js", "Tailwind", "Strapi"],
      category: "frontend",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Applicazione di chat real-time con stanze, messaggi privati e condivisione file.",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "Tutti" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              I miei progetti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selezione dei progetti più significativi che ho realizzato, 
              dalle applicazioni web complete alle API backend.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-muted p-2 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(category.key)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300">
                  {/* Project Header */}
                  <div className="relative p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-t-lg">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-background/90 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-background/90 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-yellow-900">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-200"
                      >
                        Vedi dettagli
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground mb-6">
              Interessato ai miei progetti? Vediamo cosa possiamo creare insieme!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-6 text-lg"
              >
                Iniziamo a collaborare
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}