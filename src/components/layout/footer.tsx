"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { site } from "@/lib/site";

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
      href: site.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: site.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${site.email}`,
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
    <footer style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.02 }}
              className="font-heading tracking-wide"
              style={{ color: 'var(--background)' }}
            >
              <div className="text-3xl leading-none">TORREGROSSA</div>
              <div className="text-lg font-sans leading-none text-right -mt-1" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                .dev
              </div>
            </motion.button>
            <p className="text-base font-light leading-relaxed max-w-md" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {site.role}. Production LLM systems, cloud infrastructure on AWS and GCP and full-stack platforms.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-all duration-200"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg tracking-wide" style={{ color: 'var(--background)' }}>
              QUICK LINKS
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="block text-base font-light transition-all duration-200"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg tracking-wide" style={{ color: 'var(--background)' }}>
              LET'S CONNECT
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="block text-base font-light hover:underline"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {site.email}
              </a>
              <p className="text-base font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Based in Sicily, Italy · Working remotely
              </p>
              <p className="text-base font-light" style={{ color: 'var(--background)' }}>
                Open to CTO & engineering lead roles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              © {currentYear} Torregrossa.dev
            </p>
            <div className="flex items-center space-x-2 text-sm font-light" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" style={{ color: 'var(--background)' }} />
              </motion.div>
              
              <span>in Italy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}