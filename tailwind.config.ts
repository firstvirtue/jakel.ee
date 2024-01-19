import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontSize: {
        '10xl': '140px',
        '11xl': '10rem',
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        // 'html': { fontSize: "10px" }
      })
    })
  ],
}
export default config
