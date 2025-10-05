"use client";

import { motion } from "framer-motion";
import { Code, Award, Globe, Cloud, Rocket, Zap, Brain, Lightbulb, Users, Target, Flame, Sparkles, TrendingUp, Building2 } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div 
      className={`rounded-xl border-2 shadow-xl transition-all duration-300 bg-card border-border ${className}`}
      style={{ 
        backdropFilter: 'blur(10px)'
      }}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyle = "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black transition-all duration-300 hover:scale-105";
  
  if (variant === "secondary") {
    return (
      <div 
        className={`${baseStyle} ${className} bg-primary/10 border-primary text-primary`}
      >
        {children}
      </div>
    );
  }
  
  return (
    <div 
      className={`${baseStyle} ${className} bg-primary border-primary text-primary-foreground`}
    >
      {children}
    </div>
  );
}

export function About() {
  const stats = [
    { icon: Rocket, label: "Years Shipping Code", value: "6+" },
    { icon: Code, label: "Products Launched", value: "25+" },
    { icon: Globe, label: "Global Teams", value: "10+" },
    { icon: Cloud, label: "Cloud Deployments", value: "15+" },
  ];

  const technologies = [
    "Node.js", "React", "Vue", "Python", "C#", "Go", 
    "PostgreSQL", "Docker", "AWS", "Terraform", "React Native"
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header minimalista */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              THE STORY BEHIND THE CODE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-12">
              <div className="space-y-8 text-lg leading-relaxed font-light" style={{ color: 'var(--muted-foreground)' }}>
                <motion.p
                  whileHover={{ x: 10 }}
                  className="transition-all duration-300"
                >
                  Plot twist: After 6 years managing complex EU-funded projects, I had an epiphany.
                  Why manage other people's code when I could write the future myself?
                </motion.p>

                <motion.p
                  whileHover={{ x: 10 }}
                  className="transition-all duration-300"
                >
                  Now I live at the intersection of shipping fast and building right.
                  I'm AWS Certified (SAA-C03) and constantly learning the next big thing in DevOps,
                  automation, and infrastructure-as-code.
                </motion.p>

                <motion.p
                  whileHover={{ x: 10 }}
                  className="transition-all duration-300"
                >
                  Secret weapon: My background in theoretical linguistics gives me a superpower
                  for spotting patterns and building systems that actually make sense.
                </motion.p>
              </div>

              {/* Technologies */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  MY TOOLKIT
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm font-medium border transition-all duration-200"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What I Do */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  WHAT I ACTUALLY DO
                </h3>
                <div className="space-y-3">
                  {[
                    "Full-stack apps that users love",
                    "CI/CD pipelines that just work",
                    "Cloud infrastructure that scales",
                    "Infrastructure-as-Code magic",
                    "Cross-platform mobile apps",
                    "Zero-to-one product development"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="text-base font-light transition-all duration-300"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar minimalista */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* AWS Certification */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-center space-y-4 p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  AWS CERTIFIED
                </h3>
                <p className="text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                  Solutions Architect Associate
                </p>
                <div className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                  SAA-C03
                </div>
              </motion.div>

              {/* Stats minimalisti */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="text-center space-y-2 p-4 border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                      {value}
                    </div>
                    <div className="text-xs font-light" style={{ color: 'var(--muted-foreground)' }}>
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Startup Mode */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4 p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  STARTUP MODE: ON
                </h3>
                <div className="space-y-2 text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                  {[
                    "Zero-to-one mindset",
                    "Remote-first, global reach",
                    "Early-stage collaborations",
                    "Product-driven solutions",
                    "Growth hacking approach",
                    "Unicorn potential seeker"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="transition-all duration-300"
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action minimalista */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 p-12 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                READY TO BUILD THE NEXT BIG THING?
              </h3>
              <p className="text-lg font-light max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                Whether you're a startup founder with a crazy idea or an established company ready to disrupt,
                let's ship something that users will love and competitors will envy!
              </p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 font-sans font-medium transition-all duration-200"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: '1px solid var(--foreground)',
                }}
              >
                Let's Build Something Epic
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}