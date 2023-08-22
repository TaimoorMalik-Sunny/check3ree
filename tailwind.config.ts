import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
          colors:{
      primarywhite: "#ffece3",
      herotitle: "#F2F3F5",
      opacitiyDownColor: "#ffffffba",
      mainbgclr:"#EEF2F5"
     }
    },
  },
  plugins: [],
}
export default config
