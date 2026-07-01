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
    <div className={`${theme.bg} ${theme.text} min-h-screen border transition-colors duration-300`}>
      <button
  onClick={toggleTheme}
  className={`
    fixed 
    top-4 sm:top-6 md:top-8 lg:top-10
    right-4 sm:right-6 md:right-8 lg:right-10
    px-2 sm:px-4 md:px-6 lg:px-8   /* smaller padding on small screens */
    py-1.5 sm:py-3 md:py-4 lg:py-5  /* smaller height on small screens */
    ${theme.primary}
    rounded-lg
    hover:opacity-80
    transition-all duration-300 ease-in-out
    font-semibold
    text-xs sm:text-sm md:text-base lg:text-lg  /* smaller text on small screens */
    z-50
    border-2 border-black
  `}
>
  🎨 {theme.name}
</button>


      
      <div className="fixed top-4 left-4 flex flex-col gap-2 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md ">
  {themeKeys.map((key) => (
    <button
      key={key}
      onClick={() => setCurrentTheme(key)}
      className={`
        rounded 
        transition-all duration-300 ease-in-out
        text-xs sm:text-sm md:text-base lg:text-lg  /* responsive text size */
        px-2 sm:px-3 md:px-4 lg:px-5           /* responsive horizontal padding */
        py-1 sm:py-1.5 md:py-2 lg:py-2.5       /* responsive vertical padding */
        font-semibold
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


      <Quiz theme={theme} />
    </div>
  )
}

export default App
