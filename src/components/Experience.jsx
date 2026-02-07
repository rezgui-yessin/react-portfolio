import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: "education",
      title: "Bachelor's in IoT & Software Engineering",
      organization: "University Name",
      period: "2022 - Present",
      description:
        "Focusing on IoT systems, full-stack development, embedded systems, and modern software architecture. Maintaining excellent academic performance.",
      icon: <FaGraduationCap />,
    },
    {
      type: "experience",
      title: "Full-stack Developer Internship",
      organization: "sfectoria",
      period: "Feb 2024 - Jun 2024",
      description:
        "Development of a modern e-learning platform using the MERN stack (MongoDB, Express.js, React, Node.js). Implementation of real-time chatrooms with Socket.IO to enable interactive communication between students and instructors.",
      icon: <FaBriefcase />,
    },
    {
      type: "experience",
      title: "Summer Intern",
      organization: "MasterClass",
      period: "Jun 2023 - Aug 2023",
      description:
        "Design and development of a full-stack ERP (Enterprise Resource Planning) web application using Angular and Spring Boot to manage core business operations such as employees, sales, inventory, and finance. The system integrates AI-based analytics to provide insights, performance predictions, and intelligent decision support through interactive dashboards.",
      icon: <FaBriefcase />,
    },
    {
      type: "education",
      title: "High School Diploma",
      organization: "High School Name",
      period: "2019 - 2022",
      description:
        "Graduated with honors. Focused on mathematics, physics, and computer science.",
      icon: <FaGraduationCap />,
    },
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
          Experience & <span className="text-primary">Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-8 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                <motion.div
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className={`text-2xl ${item.type === "education" ? "text-accent" : "text-primary"}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm text-gray-400">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    {item.organization}
                  </p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center my-4 md:my-0 relative z-10">
                <div className={`w-12 h-12 rounded-full ${
                  item.type === "education" ? "bg-accent" : "bg-primary"
                } flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
