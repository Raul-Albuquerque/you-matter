import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        shizuru: ['Shizuru'],
        maven: ['Maven_Pro'],
        whisper: ['whisper'],
      },
    },
  },
  plugins: [],
}
export default config
