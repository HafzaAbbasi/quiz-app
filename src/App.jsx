import React, { useState } from 'react'
import Quiz from './components/Quiz/quiz'

const themes = {
  light: {
    name: 'Light',
    bg: 'bg-gray-400',
    text: 'text-gray-900',
    primary: 'bg-gray-400',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    container: 'bg-gray-200',
  },
  dark: {
    name: 'Dark',
    bg: 'bg-gray-700',
    text: 'text-white',
    primary: 'bg-gray-600',
    secondary: 'bg-gray-700',
    accent: 'bg-gray-600',
    container: 'bg-gray-800',
  },
  dustyRose: {
    name: 'Dusty Rose',
    bg: 'bg-[#b27f81]',
    text: 'text-white',
    primary: 'bg-[#c29697]',
    secondary: 'bg-purple-600',
    accent: 'bg-pink-500',
    container: 'bg-[#D5B9B2]',
  },
  ocean: {
    name: 'Ocean',
    bg: 'bg-blue-300',
    text: 'text-[#112A46]',
    primary: 'bg-blue-200',
    secondary: 'bg-cyan-500',
    accent: 'bg-teal-400',
    container: 'bg-[#ACC8E5]',
  },
  french: {
    name: 'French Blue',
    bg: 'bg-[#7d84b5]',
    text: 'text-white',
    primary: 'bg-[#7179AD]',
    secondary: 'bg-emerald-600',
    accent: 'bg-lime-400',
    container: 'bg-[#424874]',
  },
}

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const theme = themes[currentTheme];
  const themeKeys = Object.keys(themes);

  const toggleTheme = () => {
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextIndex]);
  };

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen border transition-colors duration-300 px-2 sm:px-4`}>
      
      {/* Theme Toggle Button (top-right) */}
      <button
        onClick={toggleTheme}
        className={`
          fixed
          top-2 sm:top-6 md:top-8 lg:top-10
          right-2 sm:right-6 md:right-8 lg:right-10
          px-2 sm:px-4 md:px-6 lg:px-8
          py-1 sm:py-3 md:py-4 lg:py-5
          ${theme.primary}
          rounded-lg
          hover:opacity-80
          transition-all duration-300 ease-in-out
          font-semibold
          text-[10px] sm:text-sm md:text-base lg:text-lg
          z-50
          border-2 border-black
          whitespace-nowrap
        `}
      >
        🎨 {theme.name}
      </button>

      {/* Theme Selector List (top-left) */}
      <div
        className="
          fixed top-2 sm:top-4 left-2 sm:left-4
          flex flex-row sm:flex-col
          flex-wrap
          gap-1 sm:gap-2
          max-w-[70%] sm:max-w-xs md:max-w-sm lg:max-w-md
          z-40
        "
      >
        {themeKeys.map((key) => (
          <button
            key={key}
            onClick={() => setCurrentTheme(key)}
            className={`
              rounded
              transition-all duration-300 ease-in-out
              text-[10px] sm:text-sm md:text-base lg:text-lg
              px-1.5 sm:px-3 md:px-4 lg:px-5
              py-0.5 sm:py-1.5 md:py-2 lg:py-2.5
              font-semibold
              whitespace-nowrap
              ${currentTheme === key
                ? `${theme.primary} text-black border-2 border-black`
                : 'bg-gray-500 text-white hover:bg-gray-600'
              }
            `}
          >
            {themes[key].name}
          </button>
        ))}
      </div>

      {/* Main Quiz Content - pushed down so fixed buttons don't overlap */}
      <div className="pt-24 sm:pt-20 md:pt-16 flex justify-center items-start min-h-screen">
        <Quiz theme={theme} />
      </div>
    </div>
  )
}

export default App