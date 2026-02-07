import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with admin dashboard, payment integration, and real-time inventory management.",
      image: "🛒",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Food Delivery App",
      description:
        "Full-featured food ordering platform with real-time order tracking, restaurant management, and secure payment integration.",
      image: "🍔",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Hospital Management",
      description:
        "Comprehensive system for managing patient records, doctor appointments, and hospital resources efficiently.",
      image: "🏥",
      technologies: ["Spring Boot", "Angular", "MySQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, role-based access, and analytics dashboard.",
      image: "✓",
      technologies: ["Angular", "Django", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Modern weather application with beautiful UI, forecasts, and location-based weather alerts.",
      image: "⛅",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Tours & Travels Booking",
      description:
        "Comprehensive booking platform for travel packages, featuring destination management, secure payments, and user itinerary planning.",
      image: "✈️",
      technologies: ["Angular", "Spring Boot", "MySQL", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
      gradient: "from-sky-500 to-indigo-500",
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent"></div>
      
      <motion.div
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                <span className="text-8xl z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-surface px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group/link"
                  >
                    <FaGithub className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors group/link"
                  >
                    <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/rezgui-yessin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <FaGithub className="text-xl" />
            View Full Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
