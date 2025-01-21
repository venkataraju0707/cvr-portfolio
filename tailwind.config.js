import tailwindTypography from '@tailwindcss/typography';
import tailwindForms from '@tailwindcss/forms';
import tailwindAspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all components for classes
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
      screens: {
        sm: '640px',  // Small screens
        md: '768px',  // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra-large screens
        '2xl': '1536px', // 2X extra-large screens
      },
    },
  },
  plugins: [
    tailwindTypography,  // Adds typography utilities
    tailwindForms,       // Adds better styling for forms
    tailwindAspectRatio, // Adds aspect-ratio utilities
  ],
};
