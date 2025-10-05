"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "Expo", level: 85 },
        { name: "PWA", level: 90 },
      ],
    },
  ];

  const tools = [
    "VS Code", "Git", "Figma", "Postman", "Jira", "Slack",
    "Linear", "Notion", "Adobe XD", "Chrome DevTools",
  ];

  const softSkills = [
    { skill: "Problem Solving", level: 95 },
    { skill: "Team Collaboration", level: 90 },
    { skill: "Communication", level: 85 },
    { skill: "Leadership", level: 80 },
    { skill: "Adaptability", level: 90 },
    { skill: "Time Management", level: 85 },
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

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
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
              MY ARSENAL OF SKILLS
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              A lethal combination of technical prowess and soft skills, constantly evolving with the latest tech trends.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.02 }}
                className="space-y-6 p-6 border"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
              >
                <h3 className="font-heading text-lg tracking-wide" style={{ color: 'var(--foreground)' }}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>
                          {skill.name}
                        </span>
                        <span className="text-xs font-light" style={{ color: 'var(--muted-foreground)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 w-full" style={{ backgroundColor: 'var(--muted)' }}>
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: 'var(--foreground)' }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="font-heading text-2xl tracking-wide text-center" style={{ color: 'var(--foreground)' }}>
              TOOLS & TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium border transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--muted)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="font-heading text-2xl tracking-wide text-center" style={{ color: 'var(--foreground)' }}>
              SOFT SKILLS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((item, index) => (
                <motion.div
                  key={item.skill}
                  whileHover={{ scale: 1.02 }}
                  className="space-y-3 p-4 border"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: 'var(--foreground)' }}>
                      {item.skill}
                    </span>
                    <span className="text-sm font-light" style={{ color: 'var(--muted-foreground)' }}>
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-1 w-full" style={{ backgroundColor: 'var(--muted)' }}>
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: 'var(--foreground)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Always Learning Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 p-12 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              ALWAYS LEARNING, ALWAYS GROWING
            </h3>
            <p className="text-lg font-light max-w-3xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Technology evolves at breakneck speed, and so do I. Currently diving deep into AI/ML,
              Web3, and the bleeding edge of software development.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 p-12 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h3 className="font-heading text-3xl md:text-4xl tracking-wide" style={{ color: 'var(--foreground)' }}>
              LET'S BUILD SOMETHING EPIC TOGETHER
            </h3>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Got a wild idea? Need a technical co-founder? Ready to disrupt an industry?
              Let's turn your vision into reality!
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="px-8 py-3 font-sans font-medium transition-all duration-200"
              style={{
                backgroundColor: 'var(--foreground)',
                color: 'var(--background)',
                border: '1px solid var(--foreground)',
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}