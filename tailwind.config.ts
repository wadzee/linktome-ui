import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: {
      navy: '#23285A',
      'light-navy': '#B4B4C8',
      'light-tan': '#F6EBD7',
    },
    extend: {
      colors: {
        'primary-dark': '#23285A',
        'secondary-dark': '#FBFF27',
        'primary-light': '#F6EBD7',
        'secondary-light': '#002FFF',
      },
    },
  },
  plugins: [],
}
export default config
