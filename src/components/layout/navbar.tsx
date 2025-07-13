"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { Moon, Flame, Menu, X } from "lucide-react";
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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleTheme = () => {
    if (!mounted) return;
    const newTheme = theme === "sober" ? "beast" : "sober";
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b-2 border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-black text-gray-800">Torregrossa.dev</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <span
                    key={item.href}
                    className="px-3 py-2 rounded-md text-sm font-black text-gray-600"
                  >
                    {item.emoji} {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
              <div className="md:hidden h-10 w-10 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const themeButtonVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: theme === "sober" ? 360 : -360, transition: { duration: 0.5 } },
    tap: { scale: 0.9, rotate: theme === "sober" ? -15 : 15, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 border-border theme-transition ${
        scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-black text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Torregrossa.dev {theme === "beast" ? "🤖" : ""}
            </button>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 rounded-md text-sm font-black transition-all duration-300 text-foreground hover:text-primary hover:bg-primary/10 border-2 border-transparent hover:border-primary/20"
                >
                  {item.emoji} {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div variants={themeButtonVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative"
              >
                {theme === "sober" ? (
                  <>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1 animate-pulse text-white">⚡</span>
                    <Flame size={20} />
                  </>
                ) : (
                  <Moon size={20} />
                )}
                <span className="sr-only">{theme === "sober" ? "Activate Cyber Mode" : "Super Sobra"}</span>
              </Button>
            </motion.div>

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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t-2 border-border bg-background/98 backdrop-blur-md"
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
                    className="block w-full text-left px-3 py-2 rounded-md transition-all duration-300 font-black text-foreground hover:text-primary hover:bg-primary/10 border-2 border-transparent hover:border-primary/20"
                  >
                    {item.emoji} {item.label}
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