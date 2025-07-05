import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "khaledhamada779@gmail.com",
      link: "mailto:khaledhamada779@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+20 106 204 2449",
      link: "tel:+201062042449"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kha121ham", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/khaled-hamada-6a3442273/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Get In <span className="text-indigo-500 dark:text-indigo-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
        <p className="text-slate-600 dark:text-gray-300 text-lg mb-12">
          Feel free to reach out via email or phone, or connect with me on social media!
        </p>

        {/* Email + Phone */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700/50 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group shadow-sm dark:shadow-none justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-slate-500 dark:text-gray-400 text-sm">{info.title}</div>
                  <div className="text-slate-900 dark:text-white font-medium">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Location in center */}
          <div className="flex justify-center w-full max-w-md">
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700/50 rounded-xl shadow-sm dark:shadow-none justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <div className="text-slate-500 dark:text-gray-400 text-sm">Location</div>
                <div className="text-slate-900 dark:text-white font-medium">Cairo, Egypt</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-12 h-12 bg-white dark:bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-sm dark:shadow-none group"
            >
              <social.icon className="text-slate-600 dark:text-gray-400 group-hover:text-white" size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
