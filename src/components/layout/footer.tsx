"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Rocket, Link, Globe, Coffee, Zap } from "lucide-react";

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
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
    },
    { 
      icon: Mail, 
      href: "mailto:hello@torregrossa.dev", 
      label: "Email",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Torregrossa.dev
              </h3>
            </motion.div>
            <p className="max-w-md leading-relaxed font-bold text-accent">
              Full-Stack Engineer obsessed with building products that scale, 
              break barriers, and create real value. Always ready for the next big challenge!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg transition-all duration-300 border-2 shadow-lg bg-card border-primary text-primary hover:border-accent hover:text-accent"
                  style={{
                    backdropFilter: 'blur(10px)'
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
            <h4 className="text-lg font-black text-primary">
              <Link size={16} className="inline mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="font-bold transition-colors text-accent hover:text-primary"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-accent">
              <Globe size={16} className="inline mr-2" />
              Let&apos;s Connect
            </h4>
            <div className="space-y-3 text-sm font-bold text-accent">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <motion.a
                  href="mailto:hello@torregrossa.dev"
                  whileHover={{ scale: 1.05 }}
                  className="transition-colors text-accent hover:text-primary"
                >
                  hello@torregrossa.dev
                </motion.a>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} />
                <span>Based in Italy, Working Globally</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <span className="text-accent">Available for Epic Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm font-bold text-accent">
              <span>© {currentYear} Torregrossa.dev</span>
              <span>•</span>
              <span className="flex items-center gap-2">
                Built with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={14} className="text-red-500" />
                </motion.span>
                and lots of <Coffee size={14} className="inline mx-1" /> in Italy
              </span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black transition-all duration-300 shadow-lg border-2 bg-gradient-to-r from-primary to-accent text-primary-foreground border-accent"
            >
              <Rocket size={16} />
              Back to Top
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
          className="absolute top-8 right-8 opacity-20"
          style={{ filter: `drop-shadow(0 0 20px hsl(var(--primary)))` }}
        >
          <Rocket size={32} strokeWidth={1} />
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
          className="absolute bottom-8 left-8 opacity-20"
          style={{ filter: `drop-shadow(0 0 15px hsl(var(--accent)))` }}
        >
          <Zap size={24} strokeWidth={1} />
        </motion.div>
      </div>
    </footer>
  );
}