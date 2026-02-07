import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent"></div>
      
      <motion.div
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              IoT & Software Engineering Student
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate technology enthusiast currently pursuing my degree
              in IoT and Software Engineering. With a strong foundation in both
              hardware and software, I thrive on creating innovative solutions
              that make a real-world impact.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech has equipped me with expertise in full-stack
              development, IoT systems, and modern web technologies. I'm
              constantly learning and adapting to new challenges, always seeking
              to push the boundaries of what's possible.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring emerging technologies,
              contributing to open-source projects, or brainstorming the next big
              idea.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass p-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="glass p-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="glass p-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-gray-400">Years Exp.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
