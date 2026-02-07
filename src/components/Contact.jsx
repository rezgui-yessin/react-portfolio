import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can integrate with an email service)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
    <section id="contact" className="py-20 relative overflow-hidden">
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
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">your.email@example.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-accent">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+123 456 7890</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 glass p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-secondary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">City, Country</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4">Follow me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rezgui-yessin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/yassine-rezgui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 glass rounded-lg bg-surface/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 glass rounded-lg bg-surface/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 glass rounded-lg bg-surface/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 glass rounded-lg bg-surface/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
