import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
      colors: {
      lama: "#F53C7A"
    },
   
    // keyframes: {
    //   typewriter: {
    //     to: {
    //       left: '100%',
    //     },
    //   },
   
    // }
    keyframes: {
      typewriter: {
        '0%': { left: '0%' },
        '100%': { left: '100%' },
      },
      // blink: {
      //   '0%': { opacity: '0' },
      //   '0.1%': { opacity: '1' },
      //   '50%': { opacity: '1' },
      //   '50.1%': { opacity: '0' },
      //   '100%': { opacity: '0' },
      // }, 
        blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
       },
    },
    animation: {
      typewriter: 'typewriter 7s steps(100) infinite',
      // typewriter: 'typewriter 2s steps(11) infinite',
      // caret: 'blink 1s step-end infinite',
    },
  },
  plugins: [],
}
};
export default config;
