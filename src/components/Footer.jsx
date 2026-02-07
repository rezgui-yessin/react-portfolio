import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Yessin Rezgui
            </h3>
            <p className="text-gray-400 text-sm">
              Java & Angular Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/rezgui-yessin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yassine-rezgui/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Made with <FaHeart className="text-red-500" /> © {currentYear}
            </p>
            <p className="text-xs mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
