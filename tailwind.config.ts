import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-robin": {
          "50": "#fef6ee",
          "100": "#fcead8",
          "200": "#f8d1b0",
          "300": "#f3b17e",
          "400": "#ed864a",
          "500": "#e86727",
          "600": "#d94e1d",
          "700": "#b43b1a",
          "800": "#842c1a",
          "900": "#742a1a",
          "950": "#3e130c",
        },
        skeleton: "#E2E8F0",
      },
      transitionProperty: {
        overlay: "opacity",
      },
      transitionDuration: {
        overlay: "300ms",
      },
      transitionTimingFunction: {
        overlay: "cubic-bezier(0.075, 0, 0.165, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
