"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Brain, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Button component with proper TypeScript types
interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  className?: string;
  onClick?: () => void;
}

function Button({ children, variant = "default", size = "default", className = "", onClick, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 theme-transition";
  const variantClass = variant === "ghost" ? "bg-transparent border-2 border-primary/20 hover:border-primary/40" : "bg-primary text-primary-foreground hover:bg-primary/90";
  const sizeClass = size === "icon" ? "h-10 w-10" : "h-10 py-2 px-4";

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["home", "about", "projects", "skills", "contact"];
      let currentSection = "home"; // Default to home

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More aggressive detection - if the section is in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
      console.log("Active section:", currentSection); // Debug
    };

    window.addEventListener("scroll", handleScroll);

    // Force initial detection after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Brain },
    { href: "#contact", label: "Contact", icon: MessageSquare },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };


  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b-2 border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-3xl font-heading tracking-wide text-gray-800">
                TORREGROSSA
                <span className="text-base font-sans">.dev</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <span
                    key={item.href}
                    className="px-3 py-2 rounded-md text-sm font-heading tracking-wide text-gray-600"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="md:hidden">
                <button className="h-10 w-10 bg-gray-200 rounded-lg"></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: 'hsl(0, 0%, 8%)',
        boxShadow: scrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Debug - rimuovere dopo test */}
        <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">
          Active: {activeSection || "none"}
        </div>
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="font-heading tracking-wide text-white hover:text-white/80 transition-colors duration-300 no-border"
            >
              <div className="text-2xl leading-none">TORREGROSSA</div>
              <div className="text-sm font-sans leading-none text-right -mt-1">.dev</div>
            </button>
          </motion.div>

          <div className="hidden md:block h-full">
            <div className="ml-10 flex items-center h-full space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 text-sm font-heading tracking-wide transition-all duration-300 h-full ${
                    activeSection === item.href.replace("#", "") ? 'active' : ''
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/20"
              style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 transition-all duration-300 font-heading tracking-wide ${
                      activeSection === item.href.replace("#", "") ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}