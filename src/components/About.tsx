
import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that follows best practices"
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "Innovative problem-solving approach for complex challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm a passionate computer engineering student with a deep love for creating 
              digital experiences that make a difference. My journey in web development 
              started with curiosity and has evolved into a commitment to excellence.
            </p>
            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
              With expertise in the MERN stack, I focus on building scalable, 
              user-friendly applications that solve real-world problems. I believe 
              in the power of clean code and thoughtful design.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400">15+</div>
                <div className="text-slate-500 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400">2+</div>
                <div className="text-slate-500 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700/50 p-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-sm dark:shadow-none"
              >
                <feature.icon className="text-indigo-500 dark:text-indigo-400 mb-4" size={32} />
                <h3 className="text-slate-900 dark:text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
