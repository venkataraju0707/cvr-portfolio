import react from '@vitejs/plugin-react';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Path to your files
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 2s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
