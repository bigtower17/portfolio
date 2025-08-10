"use client";

import { motion } from "framer-motion";
import { Code, Award, Globe, Cloud, Rocket, Zap, Brain, Lightbulb, Users, Target, Flame, Sparkles, TrendingUp, Building2 } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div 
      className={`rounded-xl border-2 shadow-xl transition-all duration-300 bg-card border-border ${className}`}
      style={{ 
        backdropFilter: 'blur(10px)'
      }}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyle = "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black transition-all duration-300 hover:scale-105";
  
  if (variant === "secondary") {
    return (
      <div 
        className={`${baseStyle} ${className} bg-primary/10 border-primary text-primary`}
      >
        {children}
      </div>
    );
  }
  
  return (
    <div 
      className={`${baseStyle} ${className} bg-primary border-primary text-primary-foreground`}
    >
      {children}
    </div>
  );
}

export function About() {
  const stats = [
    { icon: Rocket, label: "Years Shipping Code", value: "6+" },
    { icon: Code, label: "Products Launched", value: "25+" },
    { icon: Globe, label: "Global Teams", value: "10+" },
    { icon: Cloud, label: "Cloud Deployments", value: "15+" },
  ];

  const technologies = [
    "Node.js", "React", "Vue", "Python", "C#", "Go", 
    "PostgreSQL", "Docker", "AWS", "Terraform", "React Native"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-6xl mb-4"
              style={{ filter: `drop-shadow(0 0 20px hsl(var(--primary)))` }}
            >
              <Users size={48} strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-primary via-accent to-border bg-clip-text text-transparent">
              The Story Behind the Code
            </h2>
            <div className="w-32 h-2 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 text-accent transition-all duration-300"
                >
                  <p>
                    <strong className="text-primary">Plot twist:</strong> After{" "}
                    <strong className="text-accent">6 years managing complex EU-funded projects</strong>, 
                    I had an epiphany. Why manage other people's code when I could write the future myself?
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl border-2 border-accent/20 bg-accent/5 text-foreground transition-all duration-300"
                >
                  <p>
                    Now I live at the intersection of <strong className="text-primary">shipping fast</strong> and{" "}
                    <strong className="text-accent">building right</strong>. I'm{" "}
                    <strong className="text-accent">AWS Certified (SAA-C03)</strong> 
                    and constantly learning the next big thing in DevOps, automation, and infrastructure-as-code.
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-2xl border-2 border-border bg-gradient-to-br from-primary/10 to-accent/10 text-foreground transition-all duration-300"
                >
                  <p>
                    <strong className="text-accent">Secret weapon:</strong> My background in{" "}
                    <strong className="text-primary">theoretical linguistics </strong> 
                    gives me a superpower for spotting patterns and building systems that actually make sense.
                  </p>
                </motion.div>
              </div>

              {/* Technologies */}
              <motion.div 
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-3xl"
                    style={{ filter: `drop-shadow(0 0 15px hsl(var(--primary)))` }}
                  >
                    <Brain size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-accent">
                    My Toolkit
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Badge variant="secondary" className="text-sm px-4 py-2 shadow-md hover:shadow-lg">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What I Do */}
              <motion.div 
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-3xl"
                    style={{ filter: `drop-shadow(0 0 15px hsl(var(--accent)))` }}
                  >
                    <Rocket size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-accent">
                    What I Actually Do
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Flame, text: "Full-stack apps that users love" },
                    { icon: Zap, text: "CI/CD pipelines that just work" }, 
                    { icon: Cloud, text: "Cloud infrastructure that scales" },
                    { icon: Building2, text: "Infrastructure-as-Code magic" },
                    { icon: Code, text: "Cross-platform mobile apps" },
                    { icon: Target, text: "Zero-to-one product development" }
                  ].map(({ icon: Icon, text }, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 font-bold shadow-md hover:shadow-lg transition-all duration-300 bg-card text-card-foreground ${
                        index % 2 === 0 ? 'border-primary' : 'border-accent'
                      }`}
                      style={{
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <Icon size={20} className={index % 2 === 0 ? 'text-primary' : 'text-accent'} strokeWidth={2} />
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* AWS Certification */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="shadow-2xl overflow-hidden">
                  <CardContent className="text-center relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute inset-0 rounded-xl bg-primary/20"
                    />
                    <div className="relative z-10">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="mb-3 flex justify-center"
                      >
                        <img 
                          src="/saabadge.png" 
                          alt="AWS Solutions Architect Associate Badge"
                          className="w-25 h-25 object-contain"
                          style={{ filter: `drop-shadow(0 0 20px hsl(var(--primary)))` }}
                        />
                      </motion.div>
                      <h3 className="font-black text-lg mb-2 text-accent">
                        AWS Certified
                      </h3>
                      <p className="text-sm font-bold mb-3 text-primary">
                        Solutions Architect Associate
                      </p>
                      <Badge className="shadow-lg flex items-center gap-2">
                        <Award size={14} strokeWidth={2} />
                        SAA-C03
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value }, index) => (
                  <motion.div 
                    key={label} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="text-center hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="mb-3 flex justify-center">
                          <div className="p-3 rounded-full shadow-lg bg-gradient-to-br from-primary to-accent">
                            <Icon size={20} className="text-primary-foreground" />
                          </div>
                        </div>
                        <div className="text-2xl font-black mb-1 text-accent">
                          {value}
                        </div>
                        <div className="text-xs font-bold text-primary">
                          {label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Startup Mode Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-dashed shadow-2xl">
                  <CardContent className="space-y-4 relative">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute top-2 right-2 text-2xl opacity-30"
                      style={{ filter: `drop-shadow(0 0 10px hsl(var(--primary)))` }}
                    >
                      <Sparkles size={24} strokeWidth={1.5} />
                    </motion.div>
                    
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl"
                        style={{ filter: `drop-shadow(0 0 10px hsl(var(--accent)))` }}
                      >
                        <Rocket size={24} strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="font-black text-accent">
                        Startup Mode: ON
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm font-bold">
                      {[
                        { icon: Zap, text: "Zero-to-one mindset" },
                        { icon: Globe, text: "Remote-first, global reach" },
                        { icon: Flame, text: "Early-stage collaborations" },
                        { icon: Lightbulb, text: "Product-driven solutions" },
                        { icon: TrendingUp, text: "Growth hacking approach" },
                        { icon: Sparkles, text: "Unicorn potential seeker" }
                      ].map(({ icon: Icon, text }, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5, scale: 1.05 }}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            index % 2 === 0 ? 'text-primary' : 'text-accent'
                          }`}
                        >
                          <Icon size={16} strokeWidth={2} />
                          <span>{text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants} 
            className="text-center rounded-3xl p-12 relative overflow-hidden bg-gradient-to-br from-primary to-accent text-primary-foreground"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-8 opacity-20"
            >
              <Building2 size={48} strokeWidth={1} />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-4 left-8 opacity-30"
            >
              <Zap size={36} strokeWidth={1} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-6 relative z-10"
            >
              <h3 className="text-3xl md:text-4xl font-black">
                Ready to Build the Next Big Thing?
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto font-bold">
                Whether you're a startup founder with a crazy idea or an established company ready to disrupt, 
                let's ship something that users will love and competitors will envy!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="px-12 py-6 text-xl font-black shadow-2xl rounded-lg border-3 transition-all duration-300 transform hover:scale-105 bg-accent text-accent-foreground border-accent-foreground"
                >
                  <Rocket className="inline mr-3" size={24} />
                  Let's Build Something Epic
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}