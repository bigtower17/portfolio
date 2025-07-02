"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Smartphone, Globe, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-orange-500 to-red-500",
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Le mie competenze
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un mix equilibrato di competenze tecniche e soft skills, 
              sempre in costante evoluzione con le tecnologie più moderne.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="text-center space-y-3">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color}`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.1 }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
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
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Strumenti e Tecnologie
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 font-medium transition-all duration-200"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.skill}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning & Growth */}
          <motion.div 
            variants={itemVariants} 
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <Zap size={48} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Sempre in apprendimento</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              La tecnologia evolve rapidamente e io con lei. Attualmente sto approfondendo 
              l'AI, Web3 e le nuove frontiere dello sviluppo software.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}