
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DevConnector",
      description: `A full-stack MERN social platform for developers to connect, share, and showcase their profiles.
                    Users can create accounts, set up personal developer profiles, and make posts to engage with others in the community.
                    It includes full authentication, profile management, and post interactions like creating, liking, and commenting.`,
      technologies: ["React", "BootStrap", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/kha121ham/Dev-Connector",
      live: "https://dev-connector-4apz.onrender.com/",
      featured: false,
      image: "/Screenshot 2025-07-05 164959.png"
    },
    {
      title: "eCommerce Website",
      description: "A full-stack MERN e-commerce application that allows users to browse products, add them to cart, and place orders. The platform includes user authentication, product filtering, and a dynamic shopping cart system. Admins can manage products through a secure dashboard, while customers enjoy a clean and responsive UI.",
      technologies: ["React", "BootStrap", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/kha121ham/E-Commerce",
      live: "https://proshop-sc3x.onrender.com/",
      featured: true,
      image: "/Screenshot 2025-07-05 150628.png"
    },
    {
      title: "eLearning Platform",
      description: `A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to browse and purchase online courses.
The platform includes user authentication using JWT, protected routes, and role-based access for admins and students.
Users can only access course content after payment, ensuring a secure and personalized learning experience.`,
      technologies: ["React", "Tailwind CSS", "node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/kha121ham/ElearningPlatForm",
      live: "https://elearningplatform-ym9x.onrender.com/",
      featured: true,
      image: "/Screenshot 2025-07-05 145941.png"
    },
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

              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-600/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="text-4xl text-indigo-500 dark:text-indigo-400 opacity-50 hidden">
                  💻
                </div>
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
                  href={project.github} target='_blank'
                  className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target='_blank'
                  className="flex items-center gap-2 text-slate-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
