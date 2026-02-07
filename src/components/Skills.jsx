import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, level: 90, color: "text-cyan-400" },
        { name: "Angular", icon: <FaAngular />, level: 80, color: "text-red-500" },
        { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "text-blue-500" },
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-400" },
        { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, level: 88, color: "text-teal-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot />, level: 85, color: "text-green-500" },
        { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "text-green-400" },
        { name: "Python", icon: <FaPython />, level: 82, color: "text-blue-400" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 85, color: "text-blue-500" },
        { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-500" },
        { name: "SQL", icon: <FaDatabase />, level: 88, color: "text-orange-400" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <FaDocker />, level: 80, color: "text-blue-400" },
        { name: "Azure", icon: <VscAzure />, level: 75, color: "text-blue-500" },
        { name: "AWS", icon: <FaAws />, level: 75, color: "text-orange-500" },
      ],
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
