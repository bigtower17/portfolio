"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function About() {
  const stats = [
    { icon: Code, label: "Progetti completati", value: "50+" },
    { icon: Coffee, label: "Caffè bevuti", value: "∞" },
    { icon: Lightbulb, label: "Idee innovative", value: "100+" },
    { icon: Users, label: "Clienti soddisfatti", value: "25+" },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Docker", "AWS", "PostgreSQL", "MongoDB"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Chi sono
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sono un <strong className="text-foreground">Software Engineer</strong> con 
                  una passione profonda per la creazione di soluzioni digitali innovative e scalabili.
                </p>
                <p>
                  La mia esperienza spazia dal <strong className="text-foreground">frontend moderno</strong> con 
                  React e Next.js, al <strong className="text-foreground">backend robusto</strong> con 
                  Node.js e database relazionali e NoSQL.
                </p>
                <p>
                  Credo fermamente nell'importanza del <strong className="text-foreground">clean code</strong>, 
                  delle architetture ben progettate e dell'apprendimento continuo. Ogni progetto è un'opportunità 
                  per crescere e innovare.
                </p>
              </div>

              {/* Technologies */}
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  Tecnologie principali
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} whileHover={{ scale: 1.05, y: -5 }}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-primary rounded-full">
                          <Icon size={24} className="text-primary-foreground" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-2">
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-6 text-lg"
              >
                Lavoriamo insieme
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}