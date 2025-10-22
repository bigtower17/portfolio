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
      {/* Background minimalista - Solo sottile texture */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--muted-foreground) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div className="space-y-12">

            {/* Name - Stile TORREGROSSA.dev */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block font-heading text-6xl md:text-8xl lg:text-9xl tracking-wide"
              style={{ color: 'var(--foreground)' }}
            >
              <div className="leading-none">TORREGROSSA</div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-sans text-3xl md:text-4xl lg:text-5xl leading-none text-right -mt-2 md:-mt-4 lg:-mt-6"
                style={{ color: 'var(--muted-foreground)' }}
              >
                .dev
              </motion.div>
            </motion.div>

            {/* Subtitle minimalista */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-sans font-light tracking-wide"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Software Engineer
            </motion.div>

            {/* SVG Graphic Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center mt-6"
            >
              <svg
                width="280"
                height="50"
                viewBox="0 0 280 50"
                className="opacity-70"
              >
                {/* Outer border */}
                <rect
                  x="1"
                  y="1"
                  width="278"
                  height="48"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  rx="2"
                />

                {/* Three circles in first 3 spaces out of 7 */}
                <circle
                  cx="25"
                  cy="25"
                  r="15"
                  fill="var(--foreground)"
                />
                <circle
                  cx="60"
                  cy="25"
                  r="15"
                  fill="var(--muted-foreground)"
                />
                <circle
                  cx="95"
                  cy="25"
                  r="15"
                  fill="var(--muted)"
                />
                {/* Remaining 4 spaces are empty */}
              </svg>
            </motion.div>

            {/* Description minimalista */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Transforming ideas into scalable digital solutions.
              From concept to deployment, crafting software that matters.
            </motion.p>

            {/* CTA Buttons minimalisti */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="px-8 py-3 font-sans font-medium transition-all duration-200"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  border: '1px solid var(--foreground)',
                }}
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-8 py-3 font-sans font-medium transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)',
                }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links minimalisti */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center space-x-8 mt-12"
            >
              {[
                { icon: Github, href: "https://github.com/bigtower17", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bentorregrossa/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:beniamino@torregrossa.dev", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-all duration-200"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator minimalista */}
         {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="p-2 transition-all duration-200"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <ArrowDown size={20} strokeWidth={1.5} />
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}