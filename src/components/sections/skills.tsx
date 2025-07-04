"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Bold & Creative Color Palette
const colors = {
  background: '#1B1B1B',
  primary: '#F8B400', 
  secondary: '#E63946',
  accent: '#FFFFFF'
};

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      gradient: `linear-gradient(135deg, ${colors.primary} 0%, #FFC107 100%)`,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      gradient: `linear-gradient(135deg, ${colors.secondary} 0%, #FF6B6B 100%)`,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      gradient: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      gradient: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
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
    "Linear", "Notion", "Adobe XD", "Chrome DevTools"
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="skills" 
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
              🧠
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
              My Arsenal of Skills
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto font-bold"
              style={{ color: colors.accent }}
            >
              A lethal combination of technical prowess and soft skills, 
              constantly evolving with the latest tech trends.
            </p>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
              }}
            />
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2"
                style={{
                  backgroundColor: 'rgba(27, 27, 27, 0.95)',
                  borderColor: colors.primary,
                  backdropFilter: 'blur(15px)'
                }}
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="text-center space-y-3">
                    <div 
                      className="inline-flex p-4 rounded-full shadow-lg"
                      style={{ background: category.gradient }}
                    >
                      <category.icon size={24} style={{ color: colors.background }} />
                    </div>
                    <h3 
                      className="text-lg font-black"
                      style={{ color: colors.accent }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span 
                            className="font-bold"
                            style={{ color: colors.accent }}
                          >
                            {skill.name}
                          </span>
                          <span 
                            className="font-black"
                            style={{ color: colors.primary }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div 
                          className="w-full rounded-full h-2"
                          style={{ backgroundColor: 'rgba(248, 180, 0, 0.2)' }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.1 }}
                            className="h-2 rounded-full"
                            style={{ background: category.gradient }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 
              className="text-2xl font-black text-center"
              style={{ color: colors.accent }}
            >
              Tools & Technologies 🛠️
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-full shadow-lg font-bold transition-all duration-200 border-2"
                  style={{
                    backgroundColor: 'rgba(27, 27, 27, 0.9)',
                    borderColor: index % 2 === 0 ? colors.primary : colors.secondary,
                    color: colors.accent,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 
              className="text-2xl font-black text-center"
              style={{ color: colors.accent }}
            >
              Soft Skills 🎯
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="space-y-3 p-4 rounded-xl border-2 shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(27, 27, 27, 0.9)',
                    borderColor: index % 2 === 0 ? colors.primary : colors.secondary,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span 
                      className="font-bold"
                      style={{ color: colors.accent }}
                    >
                      {skill.skill}
                    </span>
                    <span 
                      className="text-sm font-black"
                      style={{ color: colors.primary }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div 
                    className="w-full rounded-full h-2"
                    style={{ backgroundColor: 'rgba(248, 180, 0, 0.2)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning & Growth */}
          <motion.div 
            variants={itemVariants} 
            className="text-center rounded-2xl p-8 relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: colors.background
            }}
          >
            {/* Background decorations */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 text-4xl opacity-20"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-4 left-4 text-3xl opacity-30"
            >
              🚀
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <Zap size={48} />
            </motion.div>
            <h3 className="text-2xl font-black mb-4">Always Learning, Always Growing 📈</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto font-bold">
              Technology evolves at breakneck speed, and so do I. Currently diving deep into 
              AI/ML, Web3, and the bleeding edge of software development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}