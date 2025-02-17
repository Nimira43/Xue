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
        darkerSky: '#5bbadf',
        darkSky: '#87ceeb',
        lighterGreen: '#c0edc0',
        lightGreen: '#afefaf',
        'sky-dashboard': '#f3f8fa',       
        'sky-light-extra': '#d8ebf2',
        'sky-light': '#c1e2ef',
        'sky-dark': '#87ceeb',
        'sky-dark-extra': '#5bbadf',
        'green-light-extra': '#c0edc0',
        'green-light': '#afefaf',
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
