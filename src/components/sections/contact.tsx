"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

// Bold & Creative Color Palette
const colors = {
  background: '#1B1B1B',
  primary: '#F8B400', 
  secondary: '#E63946',
  accent: '#FFFFFF'
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio form
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@torregrossa.dev",
      href: "mailto:hello@torregrossa.dev",
      color: colors.primary
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 123 456 7890",
      href: "tel:+391234567890",
      color: colors.secondary
    },
    {
      icon: MapPin,
      label: "Località",
      value: "Italia 🇮🇹",
      href: "#",
      color: colors.primary
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: colors.accent,
      hoverBg: colors.background
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: colors.primary,
      hoverBg: colors.primary
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: colors.secondary,
      hoverBg: colors.secondary
    },
  ];

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

  return (
    <section 
      id="contact" 
      className="py-20"
      style={{ backgroundColor: colors.background }}
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
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-6xl mb-4"
              style={{ filter: `drop-shadow(0 0 20px ${colors.primary})` }}
            >
              🚀
            </motion.div>
            <h2 
              className="text-3xl md:text-4xl font-black"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Let's Build Something Epic Together
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto font-bold"
              style={{ color: colors.accent }}
            >
              Got a wild idea? Need a technical co-founder? Ready to disrupt an industry? 
              Let's turn your vision into reality! 💡
            </p>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
              }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 
                  className="text-2xl font-black"
                  style={{ color: colors.accent }}
                >
                  Get In Touch 📬
                </h3>
                <p 
                  className="font-bold"
                  style={{ color: colors.accent }}
                >
                  Skip the small talk. Let's dive straight into how we can create something amazing together.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group border-2 shadow-lg"
                    style={{
                      backgroundColor: 'rgba(27, 27, 27, 0.9)',
                      borderColor: info.color,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-full"
                      style={{ 
                        background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}CC 100%)`
                      }}
                    >
                      <info.icon size={20} style={{ color: colors.background }} />
                    </div>
                    <div>
                      <p 
                        className="font-black transition-colors"
                        style={{ color: colors.accent }}
                      >
                        {info.label}
                      </p>
                      <p 
                        className="font-bold"
                        style={{ color: info.color }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 
                  className="text-lg font-black"
                  style={{ color: colors.accent }}
                >
                  Connect With Me 🌐
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full transition-all duration-200 shadow-lg border-2"
                      style={{
                        backgroundColor: 'rgba(27, 27, 27, 0.9)',
                        borderColor: social.color,
                        color: social.color,
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.hoverBg;
                        e.currentTarget.style.color = social.hoverBg === colors.background ? colors.accent : colors.background;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(27, 27, 27, 0.9)';
                        e.currentTarget.style.color = social.color;
                      }}
                    >
                      <social.icon size={24} />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border-2 shadow-lg"
                style={{
                  backgroundColor: 'rgba(72, 187, 120, 0.1)',
                  borderColor: '#48BB78'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: '#48BB78' }}
                  />
                  <span 
                    className="font-black"
                    style={{ color: '#48BB78' }}
                  >
                    Available for Epic Projects 🔥
                  </span>
                </div>
                <p 
                  className="text-sm font-bold"
                  style={{ color: colors.accent }}
                >
                  Currently accepting new collaborations, co-founder opportunities, and game-changing projects.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-black mb-2"
                      style={{ color: colors.accent }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors font-bold"
                      style={{
                        backgroundColor: 'rgba(27, 27, 27, 0.9)',
                        borderColor: colors.primary,
                        color: colors.accent
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-black mb-2"
                      style={{ color: colors.accent }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors font-bold"
                      style={{
                        backgroundColor: 'rgba(27, 27, 27, 0.9)',
                        borderColor: colors.primary,
                        color: colors.accent
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-black mb-2"
                    style={{ color: colors.accent }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors font-bold"
                    style={{
                      backgroundColor: 'rgba(27, 27, 27, 0.9)',
                      borderColor: colors.primary,
                      color: colors.accent
                    }}
                    placeholder="What's the big idea?"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-black mb-2"
                    style={{ color: colors.accent }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors resize-none font-bold"
                    style={{
                      backgroundColor: 'rgba(27, 27, 27, 0.9)',
                      borderColor: colors.primary,
                      color: colors.accent
                    }}
                    placeholder="Tell me about your vision, your challenges, and how we can build something incredible together..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-black text-lg transition-all duration-300 shadow-2xl"
                  style={{
                    background: isSubmitting 
                      ? 'rgba(107, 114, 128, 0.5)' 
                      : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    color: colors.background,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-t-transparent rounded-full"
                      style={{ borderColor: colors.background }}
                    />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? "Launching Message..." : "Launch This Message 🚀"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-2 rounded-lg font-black"
                    style={{
                      backgroundColor: 'rgba(72, 187, 120, 0.1)',
                      borderColor: '#48BB78',
                      color: '#48BB78'
                    }}
                  >
                    ✅ Message launched successfully! I'll get back to you faster than a SpaceX rocket.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-2 rounded-lg font-black"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      borderColor: colors.secondary,
                      color: colors.secondary
                    }}
                  >
                    ❌ Houston, we have a problem! Try again or hit me up directly via email.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}