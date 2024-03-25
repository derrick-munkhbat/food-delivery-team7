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
        "footer-texture": "url('/images/bg-image.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "split-background": 
          "linear-gradient(to right,  #FFFFFF 0%,#FFFFFF 50%,#F7F7F8 50%,#F7F7F8 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
