
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 animate-fade-in">
        {/* Profile Image */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Khaled
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-6">
          <span className="text-indigo-500 dark:text-indigo-400 font-semibold">MERN Stack Developer</span> &
          <span className="text-purple-500 dark:text-purple-400 font-semibold"> Problem Solver</span>
        </div>

        <p className="max-w-2xl text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
          I build fast, reliable, and modern web applications from front to back.
          Passionate about clean code, user experience, and turning ideas into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-500 dark:text-indigo-400 rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/kha121ham" target='blank' className="text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/khaled-hamada-6a3442273/" target='blank' className="text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
};

export default Hero;
