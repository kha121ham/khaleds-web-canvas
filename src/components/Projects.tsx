
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DevConnector",
      description: "A comprehensive social platform for developers to connect, share knowledge, and collaborate on projects. Features include user profiles, posts, comments, and real-time notifications.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "eCommerce Website",
      description: "Full-featured online store with shopping cart, payment integration, admin panel, and inventory management. Built with modern e-commerce best practices.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "JWT"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "eLearning Platform",
      description: "Complete learning management system with course creation, video streaming, progress tracking, quizzes, and student-instructor interaction.",
      technologies: ["React", "Express", "MongoDB", "Video.js", "Chart.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations, contact forms, and admin panel for content management.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-indigo-500 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700/50 rounded-xl p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 group relative overflow-hidden shadow-sm dark:shadow-none"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Featured
                </div>
              )}
              
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl text-indigo-500 dark:text-indigo-400 opacity-50">💻</div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-500 dark:text-indigo-400 rounded-full hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
