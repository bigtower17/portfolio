"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Serverless Beast",
      subtitle: "AWS Infrastructure That Scales",
      description: "Built a serverless architecture that went from 0 to 100K users without breaking a sweat. Lambda + DynamoDB + some magic.",
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Terraform", "CloudFormation"],
      category: "cloud",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "70% cost reduction",
    },
    {
      id: 2,
      title: "Deploy Machine",
      subtitle: "CI/CD Pipeline on Steroids",
      description: "Zero-downtime deployments with automated testing, Docker magic, and Kubernetes orchestration. Because manual deploys are so 2020.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "EKS", "Terraform"],
      category: "devops",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "10x faster deploys",
    },
    {
      id: 3,
      title: "Full-Stack Powerhouse",
      subtitle: "React App That Users Love",
      description: "Modern web app with buttery smooth UX, real-time features, and authentication that just works. Users actually enjoy using it!",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "WebSocket"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "95% user satisfaction",
    },
    {
      id: 4,
      title: "Infrastructure as Poetry",
      subtitle: "Terraform Modules That Sing",
      description: "Reusable Terraform modules that provision infrastructure faster than you can say 'vendor lock-in'. Multi-environment, zero drama.",
      technologies: ["Terraform", "AWS", "GitLab CI", "CloudWatch"],
      category: "cloud",
      github: "https://github.com",
      featured: false,
      impact: "5min deployments",
    },
    {
      id: 5,
      title: "Mobile-First MVP",
      subtitle: "React Native Done Right",
      description: "Cross-platform app that doesn't feel like a hybrid. Push notifications, offline mode, and performance that rivals native.",
      technologies: ["React Native", "Expo", "Node.js", "Firebase"],
      category: "mobile",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      impact: "iOS + Android in 1 codebase",
    },
    {
      id: 6,
      title: "Data Pipeline Beast",
      subtitle: "Python + AWS = Magic",
      description: "Real-time data processing with Python, pandas, and serverless architecture. From raw data to insights in milliseconds.",
      technologies: ["Python", "Pandas", "AWS Lambda", "S3", "CloudWatch"],
      category: "backend",
      github: "https://github.com",
      featured: false,
      impact: "Real-time analytics",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "cloud", label: "Cloud & AWS" },
    { key: "devops", label: "DevOps" },
    { key: "fullstack", label: "Full Stack" },
    { key: "mobile", label: "Mobile" },
    { key: "backend", label: "Backend" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);

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

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              THINGS I'VE SHIPPED
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              From MVP to scale. Here's what happens when you mix code, creativity, and caffeine.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                  filter === category.key
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-foreground border-border hover:border-foreground'
                }`}
                style={{
                  backgroundColor: filter === category.key ? 'var(--foreground)' : 'var(--background)',
                  color: filter === category.key ? 'var(--background)' : 'var(--foreground)',
                  borderColor: filter === category.key ? 'var(--foreground)' : 'var(--border)',
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group space-y-6 p-8 border transition-all duration-300"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                {/* Project Header */}
                <div className="space-y-3">
                  {project.featured && (
                    <div className="inline-block">
                      <span className="px-2 py-1 text-xs font-medium border" style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}>
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading text-2xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="text-xs font-medium" style={{ color: 'var(--foreground)' }}>
                        {project.impact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base font-light leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium border"
                      style={{
                        backgroundColor: 'var(--muted)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      <Github size={16} strokeWidth={1.5} />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                      Live Demo
                    </motion.a>
                  )}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowRight size={16} strokeWidth={1.5} style={{ color: 'var(--muted-foreground)' }} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 p-12 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              READY TO BUILD SOMETHING EPIC?
            </h3>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Got a wild idea? Need a technical co-founder? Ready to disrupt an industry?
              Let's turn your vision into reality!
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="px-8 py-3 font-sans font-medium transition-all duration-200"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                border: '1px solid var(--foreground)',
              }}
            >
              Let's Ship It
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}