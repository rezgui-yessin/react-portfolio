import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-accent text-lg font-medium">👋 Hello, I'm</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Yessin Rezgui
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-4xl text-gray-300 mb-6"
            >
              Java & Angular Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8"
            >
              Specializing in building scalable enterprise applications with Java
              and Angular, and deploying robust cloud solutions using Docker and
              Azure.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                  View Projects
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Me
                </button>
              </Link>
              <a
                href="/resume.pdf"
                download="Yessin_Rezgui_Resume.pdf"
                className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <FaDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 text-2xl"
            >
              <a
                href="https://github.com/rezgui-yessin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yassine-rezgui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:yassine.rezgui@etudiant-fst.utm.tn"
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-300"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>

          {/* Lottie Animation */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <DotLottieReact
              src="/lottie/Developer.lottie"
              loop
              autoplay
              style={{ height: "400px", width: "400px" }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
