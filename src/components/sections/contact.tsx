"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  // Static export has no backend: hand the message off to the visitor's email client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 8000);
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
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bentorregrossa",
      href: site.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: site.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: site.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: site.linkedin,
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
              LET&apos;S TALK
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              CTO or head-of-engineering roles, freelance contracts or a technical conversation: tell me what you&apos;re building.
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
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                  OPEN TO NEW ROLES
                </h3>
                <p className="text-base font-light" style={{ color: 'var(--muted-foreground)' }}>
                  Looking for CTO, head of engineering or tech lead positions, in any industry.
                  Also available for freelance work on AI backends, cloud infrastructure and full-stack products.
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-3 font-sans font-medium transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--background)',
                    border: '1px solid var(--foreground)',
                  }}
                >
                  <Send size={18} strokeWidth={1.5} />
                  Send Message
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
                    Your email app should open with the message ready to send. If it doesn&apos;t, write to{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
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