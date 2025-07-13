"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Rocket, Zap, Target } from "lucide-react";
import { useState } from "react";

// UI Components with sober styling
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border-2 shadow-xl transition-all duration-500 ${className}`}
      style={{
        backgroundColor: 'rgba(54, 54, 53, 0.95)',
        borderColor: 'var(--primary)',
        backdropFilter: 'blur(15px)',
      }}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

function Badge({ children, variant = "default", className = "", style }: {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
  style?: React.CSSProperties;
}) {
  const baseStyle = "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black transition-all duration-300 hover:scale-105";
  const defaultStyles = {
    default: {
      background: `linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)`,
      borderColor: 'var(--primary)',
      color: 'var(--background)',
    },
    secondary: {
      backgroundColor: 'rgba(128,174,160, 0.1)',
      borderColor: 'var(--primary)',
      color: 'var(--primary)',
    },
  };
  const finalStyle = style || defaultStyles[variant];

  return (
    <div className={`${baseStyle} ${className}`} style={finalStyle}>
      {children}
    </div>
  );
}

function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  style,
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105";
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-8 text-lg",
  };
  const buttonStyle = style || (variant === "ghost"
    ? {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        border: `1px solid var(--primary)`,
      }
    : {
        background: `linear-gradient(135deg, var(--primary) 0%, var(--primary) 100%)`,
        color: 'var(--background)',
        boxShadow: `0 10px 30px var(--primary)25`,
      });

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${className}`}
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "⚡ Serverless Beast",
      subtitle: "AWS Infrastructure That Scales",
      description: "Built a serverless architecture that went from 0 to 100K users without breaking a sweat. Lambda + DynamoDB + some magic ✨",
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Terraform", "CloudFormation"],
      category: "cloud",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "💰 70% cost reduction",
      emoji: "☁️",
      glowColor: 'var(--primary)',
    },
    {
      id: 2,
      title: "🚀 Deploy Machine",
      subtitle: "CI/CD Pipeline on Steroids",
      description: "Zero-downtime deployments with automated testing, Docker magic, and Kubernetes orchestration. Because manual deploys are so 2020.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "EKS", "Terraform"],
      category: "devops",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "⚡ 10x faster deploys",
      emoji: "🔄",
      glowColor: 'var(--secondary)',
    },
    {
      id: 3,
      title: "💎 Full-Stack Powerhouse",
      subtitle: "React App That Users Love",
      description: "Modern web app with buttery smooth UX, real-time features, and authentication that just works. Users actually enjoy using it!",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "WebSocket"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      impact: "📈 95% user satisfaction",
      emoji: "💻",
      glowColor: 'var(--primary)',
    },
    {
      id: 4,
      title: "🛠️ Infrastructure as Poetry",
      subtitle: "Terraform Modules That Sing",
      description: "Reusable Terraform modules that provision infrastructure faster than you can say 'vendor lock-in'. Multi-environment, zero drama.",
      technologies: ["Terraform", "AWS", "GitLab CI", "CloudWatch"],
      category: "cloud",
      github: "https://github.com",
      featured: false,
      impact: "🎯 5min deployments",
      emoji: "🏗️",
      glowColor: 'var(--secondary)',
    },
    {
      id: 5,
      title: "📱 Mobile-First MVP",
      subtitle: "React Native Done Right",
      description: "Cross-platform app that doesn't feel like a hybrid. Push notifications, offline mode, and performance that rivals native.",
      technologies: ["React Native", "Expo", "Node.js", "Firebase"],
      category: "mobile",
      github: "https://github.com",
      live: "https://demo.com",
      featured: false,
      impact: "📱 iOS + Android in 1 codebase",
      emoji: "📲",
      glowColor: 'var(--primary)',
    },
    {
      id: 6,
      title: "🧠 Data Pipeline Beast",
      subtitle: "Python + AWS = Magic",
      description: "Real-time data processing with Python, pandas, and serverless architecture. From raw data to insights in milliseconds.",
      technologies: ["Python", "Pandas", "AWS Lambda", "S3", "CloudWatch"],
      category: "backend",
      github: "https://github.com",
      featured: false,
      impact: "🔥 Real-time analytics",
      emoji: "📊",
      glowColor: 'var(--secondary)',
    },
  ];

  const categories = [
    { key: "all", label: "🎯 All Projects", color: 'var(--accent)' },
    { key: "cloud", label: "☁️ Cloud & AWS", color: 'var(--primary)' },
    { key: "devops", label: "🚀 DevOps", color: 'var(--secondary)' },
    { key: "fullstack", label: "💻 Full Stack", color: 'var(--primary)' },
    { key: "mobile", label: "📱 Mobile", color: 'var(--secondary)' },
    { key: "backend", label: "🔧 Backend", color: 'var(--primary)' },
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
    hidden: { opacity: 0, y: 50 },
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
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="text-6xl mb-4"
              style={{ filter: `drop-shadow(0 0 30px var(--primary))` }}
            >
              🚀
            </motion.div>
            <h2
              className="text-4xl md:text-6xl font-black tracking-tight"
              style={{
                background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Things I've Shipped
            </h2>
            <p
              className="text-xl md:text-2xl max-w-3xl mx-auto font-bold"
              style={{ color: 'var(--accent)' }}
            >
              From MVP to scale. Here's what happens when you mix{" "}
              <strong style={{ color: 'var(--primary)' }}>code</strong>,
              <strong style={{ color: 'var(--secondary)' }}> creativity</strong>, and{" "}
              <strong style={{ color: 'var(--primary)' }}>caffeine</strong> ☕
            </p>
            <div
              className="w-32 h-2 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)`,
              }}
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div
              className="flex flex-wrap gap-3 p-3 rounded-2xl border-2 shadow-lg"
              style={{
                backgroundColor: 'rgba(54, 54, 53, 0.9)',
                borderColor: 'var(--primary)',
                backdropFilter: 'blur(15px)',
              }}
            >
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(category.key)}
                  className={filter === category.key ? "shadow-lg" : ""}
                  style={filter !== category.key ? { color: category.color } : {}}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Project Header - FIXED LAYOUT */}
                  <div
                    className="relative p-6 min-h-[120px]"
                    style={{
                      background: `linear-gradient(135deg, rgba(128,174,160, 0.1) 0%, rgba(89,46,131, 0.1) 100%)`,
                    }}
                  >
                    {/* Floating Emoji - Top Left */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-4 left-4 text-3xl z-10"
                      style={{ filter: `drop-shadow(0 0 15px ${project.glowColor})` }}
                    >
                      {project.emoji}
                    </motion.div>

                    {/* Action Buttons - Top Right */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full shadow-lg transition-colors"
                          style={{
                            backgroundColor: 'rgba(54, 54, 53, 0.9)',
                            color: 'var(--accent)',
                            border: `2px solid var(--primary)`,
                          }}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full shadow-lg transition-colors"
                          style={{
                            backgroundColor: 'rgba(54, 54, 53, 0.9)',
                            color: 'var(--accent)',
                            border: `2px solid var(--secondary)`,
                          }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>

                    {/* Featured Badge - Top Center (only if no conflicts) */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20"
                      >
                        <Badge
                          className="shadow-lg font-black"
                          style={{
                            background: `linear-gradient(135deg, var(--secondary) 0%, var(--secondary) 100%)`,
                            color: 'var(--accent)',
                            borderColor: 'var(--accent)',
                          }}
                        >
                          ⭐ Featured
                        </Badge>
                      </motion.div>
                    )}

                    {/* Impact Badge - Bottom Right */}
                    <motion.div whileHover={{ scale: 1.05 }} className="absolute bottom-4 right-4 z-10">
                      <div
                        className="px-3 py-1 text-xs font-black rounded-full shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
                          color: 'var(--background)',
                        }}
                      >
                        {project.impact}
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3
                        className="text-xl font-black transition-all duration-300"
                        style={{ color: 'var(--accent)' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-bold"
                        style={{ color: 'var(--primary)' }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--accent)' }}
                    >
                      {project.description}
                    </p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.div key={tech} whileHover={{ scale: 1.1, y: -2 }}>
                          <Badge variant="secondary" className="text-xs transition-colors hover:shadow-lg">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 font-black text-sm group-hover:gap-3 transition-all duration-300"
                        style={{ color: 'var(--primary)' }}
                      >
                        <span>Dive Deeper</span>
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
              color: 'var(--card-foreground)',
            }}
          >
            {/* Background decorations */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-4 right-4 text-4xl opacity-20"
            >
              🚀
            </motion.div>
            <motion.div
              animate={{
                rotate: [360, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-4 text-3xl opacity-30"
            >
              ⚡
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-6 relative z-10">
              <h3 className="text-3xl md:text-4xl font-black">
                Ready to Build Something Epic? 🦄
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto font-bold">
                Got a wild idea? A problem that needs solving? Let's turn your vision into
                a product that users will love (and investors will notice) 💰
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="px-12 py-6 text-xl font-black shadow-2xl"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--background)',
                    border: `3px solid var(--background)`,
                  }}
                >
                  <Rocket className="mr-3" size={24} />
                  Let's Ship It! 🚀
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}