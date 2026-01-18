module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6D28D9',
          600: '#5b21b6',
          dark: '#19006c'
        },
        // Custom theme colors
        primary: '#6D28D9',
        secondary: '#EC4899',
        accent: '#10B981',
        background: '#F9FAFB',
        text: '#1F2937'
      },
      backgroundColor: {
        light: '#FFFFFF',
        dark: '#111827'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      },
      spacing: {
        '128': '32rem'
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem']
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
