"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  const stats = [
    { label: "EU project portfolio", value: "€4.5M" },
    { label: "EU projects led as PM", value: "20" },
    { label: "Platforms built since 2024", value: "12" },
    { label: "Spoken languages", value: "4" },
  ];

  const technologies = [
    "TypeScript", "Next.js", "React", "Node.js", "Go", "Python", "FastAPI",
    "PostgreSQL", "Redis", "AWS", "GCP", "Terraform", "Docker", "Kubernetes",
    "GitHub Actions", "LangChain",
  ];

  const experience = [
    {
      company: "Monetito Payments",
      roles: ["CTO · Jan 2026 – Present", "IT Manager · Jul – Dec 2025"],
      description:
        "Technical strategy and hands-on execution for a fintech startup: architecture, cloud, backend, team and vendors. Led a 3-person product team that took dopopay and Monetito Express from zero to go-to-market in 4 months, with beta tests on selected customers; dopopay reached 200+ merchants in its first 5 months. Also built the back office running a network of ~1,000 clients and 80+ agents. As IT Manager, bridged business requirements and technical delivery across internal and external teams.",
    },
    {
      company: "Freelance",
      roles: ["Software & Cloud Engineer · Feb 2024 – Present"],
      description:
        "AI backends, cloud infrastructure and full-stack products: from an agentic IT support assistant on GCP to an on-premise Proxmox cluster.",
    },
    {
      company: "PRISM Impresa Sociale · Promimpresa",
      roles: ["Senior EU Project Manager · Nov 2018 – Dec 2024"],
      description:
        "Lead PM on 20 international projects (Erasmus+, Interreg, COSME) with a €4.5M total portfolio, and Lead PM at the Erasmus+ Knowledge Alliance Cluster Meeting.",
    },
  ];

  const education = [
    { title: "Master's in Theoretical and Applied Linguistics", detail: "Università degli Studi di Pavia · 2018" },
    { title: "Bachelor's in Modern Languages and Cultures", detail: "Università Kore di Enna · 2015" },
  ];

  const ibmCertifications = [
    "GenAI Apps with Python",
    "AI Apps with Python and Flask",
    "Python for Data Science & AI",
    "Prompt Engineering",
    "GenAI Applications",
    "Intro to AI",
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
    <section
      id="about"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
                <p>
                  After 6 years managing EU-funded digitalization and innovation projects, I made a bold shift
                  into tech, driven by curiosity and a deep love for technology.
                </p>

                <p>
                  Today I lead engineering end to end: technical strategy, architecture, team and vendors,
                  while staying hands-on in the code. My work sits at the intersection of web development,
                  cloud infrastructure and production LLM systems, with a growing focus on DevOps,
                  CI/CD automation and infrastructure as code.
                </p>

                <p>
                  My linguistics background gives me a sharp eye for structure, in syntax and in systems,
                  and a knack for connecting disciplines.
                </p>
              </div>

              {/* Experience */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  EXPERIENCE
                </h3>
                <ol className="space-y-8 border-l pl-6" style={{ borderColor: 'var(--border)' }}>
                  {experience.map((item) => (
                    <li key={item.company} className="relative space-y-2">
                      <span
                        aria-hidden
                        className="absolute -left-[29px] top-2 h-2 w-2"
                        style={{ backgroundColor: 'var(--foreground)' }}
                      />
                      <div className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                        {item.company}
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {item.roles.map((role) => (
                          <span key={role} className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>
                            {role}
                          </span>
                        ))}
                      </div>
                      <p className="text-base font-light leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Technologies */}
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  CORE STACK
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
                <Image
                  src="/saabadge.png"
                  alt="AWS Certified Solutions Architect – Associate badge"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  AWS CERTIFIED
                </h3>
                <p className="text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                  Solutions Architect – Associate
                </p>
                <div className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                  SAA-C03 · May 2025
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

              {/* Education & Certifications */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-6 p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="space-y-4">
                  <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                    EDUCATION
                  </h3>
                  {education.map((item) => (
                    <div key={item.title} className="space-y-1">
                      <div className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                        {item.title}
                      </div>
                      <div className="text-xs font-light" style={{ color: 'var(--muted-foreground)' }}>
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                    IBM CERTIFICATIONS
                  </h3>
                  <div className="space-y-1 text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                    {ibmCertifications.map((cert) => (
                      <div key={cert}>{cert}</div>
                    ))}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                    Oct – Nov 2025
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
