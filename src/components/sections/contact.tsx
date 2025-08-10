"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Rocket, MessageSquare, Globe, Flame, CheckCircle, XCircle, Lightbulb } from "lucide-react";
import { useState } from "react";

// Sober Color Palette
const colors = {
  background: 'var(--background)',
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  accent: 'var(--accent)',
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
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@torregrossa.dev",
      href: "mailto:hello@torregrossa.dev",
      color: 'var(--primary)',
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 123 456 7890",
      href: "tel:+391234567890",
      color: 'var(--secondary)',
    },
    {
      icon: MapPin,
      label: "Località",
      value: "Italia",
      href: "#",
      color: 'var(--primary)',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: 'var(--accent)',
      hoverBg: 'var(--background)',
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: 'var(--primary)',
      hoverBg: 'var(--primary)',
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: 'var(--secondary)',
      hoverBg: 'var(--secondary)',
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
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="mb-4"
              style={{ filter: `drop-shadow(0 0 20px var(--primary))` }}
            >
              <Rocket size={48} strokeWidth={1.5} />
            </motion.div>
            <h2
              className="text-3xl md:text-4xl font-black"
              style={{
                background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's Build Something Epic Together
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto font-bold"
              style={{ color: 'var(--accent)' }}
            >
              Got a wild idea? Need a technical co-founder? Ready to disrupt an industry?
              Let's turn your vision into reality!
            </p>
            <div
              className="w-24 h-1 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)`,
              }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3
                  className="text-2xl font-black"
                  style={{ color: 'var(--accent)' }}
                >
                  <MessageSquare size={24} className="inline mr-2" />
                  Get In Touch
                </h3>
                <p
                  className="font-bold"
                  style={{ color: 'var(--accent)' }}
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
                      backgroundColor: 'var(--card)',
                      borderColor: info.color,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 p-3 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}CC 100%)`,
                      }}
                    >
                      <info.icon size={20} style={{ color: 'var(--background)' }} />
                    </div>
                    <div>
                      <p
                        className="font-black transition-colors"
                        style={{ color: 'var(--accent)' }}
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
                  style={{ color: 'var(--accent)' }}
                >
                  <Globe size={20} className="inline mr-2" />
                  Connect With Me
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
                        backgroundColor: 'var(--card)',
                        borderColor: social.color,
                        color: social.color,
                        backdropFilter: 'blur(10px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.hoverBg;
                        e.currentTarget.style.color = social.hoverBg === 'var(--background)' ? 'var(--accent)' : 'var(--background)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--card)';
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
                  backgroundColor: 'rgba(138,234,146, 0.1)',
                  borderColor: 'var(--accent)',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  <span
                    className="font-black"
                    style={{ color: 'var(--accent)' }}
                  >
                    <Flame size={16} className="inline" />
                    Available for Epic Projects
                  </span>
                </div>
                <p
                  className="text-sm font-bold"
                  style={{ color: 'var(--accent)' }}
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
                      style={{ color: 'var(--accent)' }}
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
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--primary)',
                        color: 'var(--accent)',
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black mb-2"
                      style={{ color: 'var(--accent)' }}
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
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--primary)',
                        color: 'var(--accent)',
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-black mb-2"
                    style={{ color: 'var(--accent)' }}
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
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--primary)',
                      color: 'var(--accent)',
                    }}
                    placeholder="What's the big idea?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-black mb-2"
                    style={{ color: 'var(--accent)' }}
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
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--primary)',
                      color: 'var(--accent)',
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
                      : `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
                    color: 'var(--background)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-t-transparent rounded-full"
                      style={{ borderColor: 'var(--background)' }}
                    />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? "Launching Message..." : "Launch This Message"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-2 rounded-lg font-black"
                    style={{
                      backgroundColor: 'rgba(138,234,146, 0.1)',
                      borderColor: 'var(--accent)',
                      color: 'var(--accent)',
                    }}
                  >
                    <CheckCircle size={20} className="inline mr-2" />
                    Message launched successfully! I'll get back to you faster than a SpaceX rocket.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-2 rounded-lg font-black"
                    style={{
                      backgroundColor: 'rgba(89,46,131, 0.1)',
                      borderColor: 'var(--secondary)',
                      color: 'var(--secondary)',
                    }}
                  >
                    <XCircle size={20} className="inline mr-2" />
                    Houston, we have a problem! Try again or hit me up directly via email.
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