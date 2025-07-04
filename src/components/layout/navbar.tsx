"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Bold & Creative Color Palette
const colors = {
  background: '#1B1B1B',
  primary: '#F8B400', 
  secondary: '#E63946',
  accent: '#FFFFFF'
};

// Button component with proper TypeScript types
interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  className?: string;
  onClick?: () => void;
}

function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  onClick,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105";
  
  const variantClass = variant === "ghost" ? "bg-transparent border-2" : "";
  const sizeClass = size === "icon" ? "h-10 w-10" : "h-10 py-2 px-4";
  
  const buttonStyle = variant === "ghost" 
    ? { 
        borderColor: colors.primary, 
        color: colors.accent,
        backgroundColor: 'transparent'
      }
    : { 
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: colors.background 
      };
  
  return (
    <button 
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className}`}
      style={buttonStyle}
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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", emoji: "🏠" },
    { href: "#about", label: "About", emoji: "🧙‍♂️" },
    { href: "#projects", label: "Projects", emoji: "🚀" },
    { href: "#skills", label: "Skills", emoji: "🧠" },
    { href: "#contact", label: "Contact", emoji: "📬" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 transition-all duration-300 border-b-2"
      style={{
        backgroundColor: scrolled 
          ? 'rgba(27, 27, 27, 0.95)' 
          : 'rgba(27, 27, 27, 0.8)',
        borderColor: scrolled ? colors.primary : 'transparent',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-black transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Torregrossa.dev 🚀
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 rounded-md text-sm font-black transition-all duration-300 border-2 border-transparent hover:border-yellow-400"
                  style={{ color: colors.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary;
                    e.currentTarget.style.backgroundColor = 'rgba(248, 180, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.accent;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.emoji} {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2"
            style={{
              backgroundColor: 'rgba(27, 27, 27, 0.98)',
              borderColor: colors.primary,
              backdropFilter: 'blur(20px)'
            }}
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
                  className="block w-full text-left px-3 py-2 rounded-md transition-all duration-300 font-black border-2 border-transparent hover:border-red-500"
                  style={{ color: colors.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.secondary;
                    e.currentTarget.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.accent;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {item.emoji} {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}