import type { Config } from "tailwindcss";
import inviewPlugin from "tailwind-inview";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textPrimary: "#171717",
        textSecondary: "#525252",
        textTertiary: "#737373",
        orange: "#FF7c44",
        gray100: "#f7f7f7",
        blue: "#0063F2",
        deepblue: "#001430",
        bggray: "#F9FAFB",
        textgray: "#505050",
        lightgray: "#9E9E9E",
      },
      fontSize: {
        header: "44px",
        mobileHeader: "32px",
        mobileBody: "17px",
      },
      lineHeight: {
        header: "57.2px",
        mobileHeader: "35px",
        body: "26px",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scalein: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
        scaleout: {
          "0%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein1000: "slidein 1s ease 1000ms forwards",
        scalein: "scalein 300ms ease-out forwards",
        scaleout: "scaleout 300ms ease-out forwards",
      },
      transitionProperty: {
        smooth: "transform, opacity",
      },
    },
  },
  plugins: [inviewPlugin],
};
export default config;
