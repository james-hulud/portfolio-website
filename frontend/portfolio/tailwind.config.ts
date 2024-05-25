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
      animation: {
        "ping-slow": "ping 3s infinite"
      },
    },
  },
  plugins: [],
  fontFace: {
    "OpenSans-Regular": {
      fontFamily: "Open-sans-regular",
      fontStyle: "normal",
      fontWeight: "normal",
      fontDisplay: "swap",
      src: ["~/fonts/OpenSans-Regular.ttf"],
    },
  },
};
export default config;
