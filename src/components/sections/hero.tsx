"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Rocket, Zap, Code2, Building2, Ship, Target, Globe, Flame, Briefcase, Users } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// Temporary Button component with sober colors
function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-md hover:shadow-lg",
    outline: "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-14 px-8 rounded-lg text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating icons with corporate style */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 opacity-20"
          style={{ filter: 'drop-shadow(0 0 20px var(--primary))' }}
        >
          <Rocket size={48} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-32 opacity-25"
          style={{ filter: 'drop-shadow(0 0 15px var(--secondary))' }}
        >
          <Zap size={36} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-32 opacity-20"
          style={{ filter: 'drop-shadow(0 0 20px var(--primary))' }}
        >
          <Code2 size={40} strokeWidth={1.5} />
        </motion.div>

        {/* Sober gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--secondary)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div className="space-y-8">
            {/* Startup Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border"
              style={{
                backgroundColor: 'var(--secondary)',
                borderColor: 'var(--border)',
                color: 'var(--secondary-foreground)',
              }}
            >
              <Zap size={16} />
              <span>Building the future, one line at a time</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
              style={{
                background: `linear-gradient(135deg, var(--primary) 100%, var(--secondary) 50%, var(--accent) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'var(--primary)',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(128,174,160, 0.3))',
              }}
            >
              Torregrossa
            </motion.h1>

            {/* Animated Title */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-black h-20 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Software Architect",
                  2000,
                  "Product Engineer",
                  2000,
                  "Technical Lead",
                  2000,
                  "Digital Solutions Expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'var(--accent)' }}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed"
              style={{ color: 'var(--accent)' }}
            >
              From <strong style={{ color: 'var(--primary)' }}>EU-funded projects</strong> to
              <strong style={{ color: 'var(--secondary)' }}> startup velocity</strong>.
              I ship products that scale, break things that don't work, and build
              <strong style={{ color: 'var(--primary)' }}> systems that users actually love</strong>.
            </motion.p>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 text-sm font-black"
            >
              {[
                { icon: Zap, text: "Rapid Development", color: 'var(--primary)' },
                { icon: Target, text: "Product-Focused", color: 'var(--secondary)' },
                { icon: Globe, text: "Remote Collaboration", color: 'var(--primary)' },
                { icon: Rocket, text: "Innovation Driven", color: 'var(--secondary)' },
              ].map(({ icon: Icon, text, color }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: color,
                    color: color,
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                  <span className="font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="px-10 py-4 text-lg font-semibold shadow-lg"
                >
                  <Briefcase className="mr-2" size={20} />
                  View Portfolio
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="px-10 py-4 text-lg font-semibold border-2"
                >
                  <Users className="mr-2" size={20} />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center space-x-6 mb-22"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub", hoverColor: 'var(--accent)' },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", hoverColor: 'var(--primary)' },
                { icon: Mail, href: "mailto:hello@torregrossa.dev", label: "Email", hoverColor: 'var(--secondary)' },
              ].map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--accent)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hoverColor;
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${hoverColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <Icon size={24} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--primary)',
              }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}