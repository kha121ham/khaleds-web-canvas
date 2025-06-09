
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 animate-fade-in">
        {/* Profile Image */}
        <div className="w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
          <span className="text-4xl font-bold text-white">K</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Khaled
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-6">
          <span className="text-indigo-400 font-semibold">MERN Stack Developer</span> & 
          <span className="text-purple-400 font-semibold"> Problem Solver</span>
        </div>
        
        <p className="max-w-2xl text-gray-300 text-lg leading-relaxed mb-8">
          I craft beautiful, responsive web applications with modern technologies. 
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
            className="px-8 py-3 border-2 border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110 transform">
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
