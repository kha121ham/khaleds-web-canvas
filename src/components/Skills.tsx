
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "REST APIs" }
      ]
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            My <span className="text-indigo-500 dark:text-indigo-400 dark:drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8 dark:shadow-[0_0_20px_rgba(129,140,248,0.5)]"></div>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-sm dark:shadow-none dark:shadow-[0_0_30px_rgba(129,140,248,0.2)] backdrop-blur-sm border border-transparent dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-indigo-500 dark:text-indigo-400 mb-6 text-center dark:drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600/30 border border-slate-200 dark:border-slate-600/30 dark:shadow-[0_0_15px_rgba(129,140,248,0.1)]"
                  >
                    <span className="text-slate-700 dark:text-gray-200 font-medium dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
