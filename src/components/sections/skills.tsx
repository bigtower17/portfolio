"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & frameworks",
      skills: [
        "JavaScript", "TypeScript", "Python", "Go", "React", "React Native", "Vite",
        "Node.js", "Express.js", "Django", "Laravel", "ASP.NET Core",
      ],
    },
    {
      title: "Backend & APIs",
      skills: ["REST API design", "FastAPI", "Async workers (Taskiq, Redis)", "Multi-tenant PostgreSQL with RLS"],
    },
    {
      title: "AI & LLM",
      skills: [
        "LangChain", "RAG (pgvector)", "Structured outputs", "LLM evaluation",
        "OpenAI", "Vertex AI", "Claude", "Grok", "Claude Code", "Cursor",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions",
        "GitLab CI", "AWS Code services", "Grafana", "Prometheus",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS database services"],
    },
    {
      title: "Front end",
      skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
    },
    {
      title: "Security & auth",
      skills: ["HTTPS", "CORS", "JWT", "OAuth", "bcrypt hashing & salting", "Helmet", "Joi"],
    },
    {
      title: "IoT & embedded",
      skills: [
        "Zigbee (ZHA, zigpy/bellows, Tuya)", "Bluetooth LE", "Embedded Linux (Buildroot)",
        "Protocol reverse engineering", "Microcontroller development",
      ],
    },
    {
      title: "Data",
      skills: [
        "Corpora creation", "Scraping & crawling (BeautifulSoup, Scrapy, Selenium)",
        "Dataset normalization & annotation",
      ],
    },
  ];

  const spokenLanguages = [
    { language: "Italian", level: "Native" },
    { language: "English", level: "Advanced" },
    { language: "Spanish", level: "Elementary" },
    { language: "Chinese", level: "Elementary" },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              TECHNICAL SKILLS
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              The tools behind the projects above, from product code to cloud, AI and hardware.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.02 }}
                className="space-y-4 p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <h3 className="font-heading text-lg tracking-wide" style={{ color: 'var(--foreground)' }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium border"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Spoken Languages */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="font-heading text-2xl tracking-wide text-center" style={{ color: 'var(--foreground)' }}>
              SPOKEN LANGUAGES
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {spokenLanguages.map((item) => (
                <div
                  key={item.language}
                  className="px-4 py-2 text-sm border"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  <span className="font-medium">{item.language}</span>
                  <span className="ml-2 font-light" style={{ color: 'var(--muted-foreground)' }}>
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
