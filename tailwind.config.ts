import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lighterSky: '#d8ebf2',
        lightSky: '#c1e2ef',
        darkSky: '#87ceeb',
        darkerSky: '#5bbadf',
        lighterGreen: '#c0edc0',
        lightGreen: '#afefaf',
        'light': '#ffffff',
        'dark': '#111',
        'grey-dark': '#333',
        'grey-medium': '#999',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      },
    },
  },
  plugins: [],
}
export default config
