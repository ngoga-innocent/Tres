/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {

    extend: {
      colors: {
        golden: '#FFD700',
        darkblue: '#00008B',
        accent: '#ffce56',
        white: '#ffffff',
        black: '#000000',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['roboto', 'sans-serif'],
        subheading:['roboto','sans-serif']
      },
      animation: {
        'bounce-custom': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

