import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lugfa: ["var(--font-lufga)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#0063F2",
        deepblue: "#001430",
        bggray: "#F9FAFB",
        textgray: "#505050",
        lightgray: "#9E9E9E",
      },
    },
  },
  plugins: [],
} satisfies Config;
