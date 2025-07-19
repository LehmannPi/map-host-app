/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom palette based on the ethereal canyon image
        canyon: {
          50: '#F0F8FF', // Bright light (core) - almost white with hint of blue
          100: '#C8D8F0', // Pale lavender/blue (light halo)
          200: '#9BB8E6', // Light teal/cyan blend
          300: '#6E98DC', // Medium teal/cyan
          400: '#4AD9E6', // Vibrant teal/cyan (accent/highlight)
          500: '#5C4B8D', // Mid-tone purple (illuminated areas)
          600: '#4A3A7A', // Medium purple
          700: '#3F2E5C', // Deep purple (dominant base)
          800: '#2E1F45', // Darker purple
          900: '#1F152E', // Deepest purple
        },
        // Additional accent colors
        ethereal: {
          light: '#F0F8FF', // Bright central light
          glow: '#C8D8F0', // Light halo
          teal: '#4AD9E6', // Vibrant teal accent
          purple: '#5C4B8D', // Mid-tone purple
          deep: '#3F2E5C', // Deep purple base
        },
      },
      backgroundImage: {
        'canyon-gradient':
          'linear-gradient(135deg, #3F2E5C 0%, #5C4B8D 50%, #4AD9E6 100%)',
        'ethereal-glow':
          'radial-gradient(circle at center, #F0F8FF 0%, #C8D8F0 50%, #5C4B8D 100%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(74, 217, 230, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(74, 217, 230, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
