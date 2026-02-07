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
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl">
                <img 
                  src="/me.jpg" 
                  alt="Yessin Rezgui" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Java & Angular Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a results-driven Full Stack Developer specializing in building scalable enterprise applications. 
              With deep expertise in <span className="text-white font-semibold">Java Spring Boot</span> and <span className="text-white font-semibold">Angular</span>, 
              I architect robust backend systems and create intuitive, high-performance frontend interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My technical capabilities extend to modern cloud infrastructure, leveraging <span className="text-primary">Docker</span> and <span className="text-secondary">Azure</span> for containerization 
              and seamless deployment. I am passionate about writing clean, maintainable code and optimizing application performance 
              to solve complex business challenges effectively.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Based in Urbino, Italy, I am constantly exploring new architectural patterns and cloud technologies 
              to deliver innovative software solutions that drive real value.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="glass p-4 rounded-xl text-center hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/30">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-400 font-medium">Projects</div>
              </div>
              <div className="glass p-4 rounded-xl text-center hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-secondary/30">
                <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-gray-400 font-medium">Technologies</div>
              </div>
              <div className="glass p-4 rounded-xl text-center hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-accent/30">
                <div className="text-3xl font-bold text-accent mb-1">2+</div>
                <div className="text-sm text-gray-400 font-medium">Years Exp.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
