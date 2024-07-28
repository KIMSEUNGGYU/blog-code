import { colorMap, typographyMap } from '@acme/ui/styles'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./stories/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colorMap
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ...typographyMap,
      };
      addUtilities(newUtilities);
    },
  ],
}

