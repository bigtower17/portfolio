"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, Rocket } from "lucide-react";

// Bold & Creative Color Palette
const colors = {
  background: '#1B1B1B',
  primary: '#F8B400', 
  secondary: '#E63946',
  accent: '#FFFFFF'
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      color: colors.accent,
      hoverColor: colors.primary
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: colors.primary,
      hoverColor: colors.secondary
    },
    { 
      icon: Mail, 
      href: "mailto:hello@torregrossa.dev", 
      label: "Email",
      color: colors.secondary,
      hoverColor: colors.primary
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: colors.background }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 
                className="text-2xl font-black"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Torregrossa.dev
              </h3>
            </motion.div>
            <p 
              className="max-w-md leading-relaxed font-bold"
              style={{ color: colors.accent }}
            >
              Full-Stack Engineer obsessed with building products that scale, 
              break barriers, and create real value. Always ready for the next big challenge! 🚀
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg transition-all duration-300 border-2 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(27, 27, 27, 0.8)',
                    borderColor: social.color,
                    color: social.color,
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.hoverColor;
                    e.currentTarget.style.color = social.hoverColor;
                    e.currentTarget.style.boxShadow = `0 10px 30px ${social.hoverColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-black"
              style={{ color: colors.primary }}
            >
              Quick Links 🔗
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="font-bold transition-colors"
                    style={{ color: colors.accent }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.accent;
                    }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-black"
              style={{ color: colors.secondary }}
            >
              Let's Connect 🌐
            </h4>
            <div 
              className="space-y-3 text-sm font-bold"
              style={{ color: colors.accent }}
            >
              <div className="flex items-center gap-2">
                <span>📧</span>
                <motion.a
                  href="mailto:hello@torregrossa.dev"
                  whileHover={{ scale: 1.05 }}
                  className="transition-colors"
                  style={{ color: colors.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.accent;
                  }}
                >
                  hello@torregrossa.dev
                </motion.a>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>Based in Italy, Working Globally</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#48BB78' }}
                />
                <span style={{ color: '#48BB78' }}>Available for Epic Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="border-t-2"
        style={{ borderColor: colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div 
              className="flex items-center gap-2 text-sm font-bold"
              style={{ color: colors.accent }}
            >
              <span>© {currentYear} Torregrossa.dev</span>
              <span>•</span>
              <span className="flex items-center gap-2">
                Built with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={14} style={{ color: colors.secondary }} />
                </motion.span>
                and lots of ☕ in Italy
              </span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black transition-all duration-300 shadow-lg border-2"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                borderColor: colors.accent,
                color: colors.background
              }}
            >
              <Rocket size={16} />
              Back to Top 🚀
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-8 right-8 text-4xl"
          style={{ filter: `drop-shadow(0 0 20px ${colors.primary})` }}
        >
          🚀
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-8 left-8 text-3xl"
          style={{ filter: `drop-shadow(0 0 15px ${colors.secondary})` }}
        >
          ⚡
        </motion.div>
      </div>
    </footer>
  );
}