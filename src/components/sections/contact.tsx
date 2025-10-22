"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, BookOpen } from "lucide-react";
import { useState } from "react";

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
    },
    {
      icon: Phone,
      label: "Telefono",
      value: "+39 123 456 7890",
      href: "tel:+39123456789",
    },
    {
      icon: MapPin,
      label: "Località",
      value: "Italia",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: BookOpen,
      label: "Substack",
      href: "https://substack.com/@torregrossa",
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
    hidden: { opacity: 0, y: 30 },
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
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-6xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              LET'S BUILD SOMETHING EPIC TOGETHER
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Skip the small talk. Let's dive straight into how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Contact Details */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 transition-all duration-300"
                  >
                    <div
                      className="p-3 border"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      <info.icon size={20} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg tracking-wide" style={{ color: 'var(--foreground)' }}>
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-light transition-colors duration-200 hover:underline"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-light" style={{ color: 'var(--muted-foreground)' }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  CONNECT WITH ME
                </h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 border transition-all duration-200"
                      style={{
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)',
                        color: 'var(--muted-foreground)'
                      }}
                    >
                      <social.icon size={20} strokeWidth={1.5} />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="p-6 border space-y-4"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <h3 className="font-heading text-xl tracking-wide" style={{ color: 'var(--foreground)' }}>
                  AVAILABLE FOR EPIC PROJECTS
                </h3>
                <p className="text-base font-light" style={{ color: 'var(--muted-foreground)' }}>
                  Currently accepting new collaborations, co-founder opportunities, and game-changing projects.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                        ['--tw-ring-color' as any]: 'var(--foreground)',
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)',
                        ['--tw-ring-color' as any]: 'var(--foreground)',
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's the big idea?"
                    className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      ['--tw-ring-color' as any]: 'var(--foreground)',
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your vision, your challenges, and how we can build something incredible together..."
                    className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: 'var(--background)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                      ['--tw-ring-color' as any]: 'var(--foreground)',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-3 font-sans font-medium transition-all duration-200"
                  style={{
                    backgroundColor: isSubmitting ? 'var(--muted)' : 'var(--foreground)',
                    color: isSubmitting ? 'var(--muted-foreground)' : 'var(--background)',
                    border: `1px solid ${isSubmitting ? 'var(--muted)' : 'var(--foreground)'}`,
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} strokeWidth={1.5} />
                      Launch This Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--destructive)',
                      color: 'var(--destructive)',
                    }}
                  >
                    Something went wrong. Please try again.
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