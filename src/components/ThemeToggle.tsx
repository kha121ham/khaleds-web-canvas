
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
          size={24}
        />
        <Moon 
          className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
          size={24}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
