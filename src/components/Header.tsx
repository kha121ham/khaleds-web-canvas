import React from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Theme } from '@/hooks/useTheme';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }: HeaderProps) => {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* حذف اللوجو */}

          {/* Desktop Navigation - اجعلها في المنتصف */}
          <nav className="hidden md:flex space-x-8 items-center mx-auto">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* CV Button */}
            <a
              href="/Khaled-Hamada-CV.pdf"
              download
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 relative group text-sm ml-2"
              style={{ minWidth: '2.5rem' }}
            >
              <Download size={16} className="inline-block" />
              <span>CV</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a
              href="/Khaled-Hamada-CV.pdf"
              download
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 relative group text-sm"
              style={{ minWidth: '2rem' }}
            >
              <Download size={15} className="inline-block" />
              <span>CV</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
