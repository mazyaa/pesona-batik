import type { Config } from "tailwindcss";
import { heroui } from "@heroui/theme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.7rem",
      },
      colors: {
        // Primary: Deep Sogan Brown - Traditional Javanese batik color
        primary: {
          DEFAULT: "#6B4423",
          50: "#F7F3EF",
          100: "#EDE5DC",
          200: "#D9C7B5",
          300: "#C4A88D",
          400: "#A07B52",
          500: "#6B4423",
          600: "#5A391D",
          700: "#482E17",
          800: "#372311",
          900: "#25180C",
        },
        // Secondary: Warm Gold - Elegance and royalty
        secondary: {
          DEFAULT: "#C9A227",
          50: "#FDF9E9",
          100: "#F9F0C8",
          200: "#F2E08F",
          300: "#E8CC4D",
          400: "#D4B42C",
          500: "#C9A227",
          600: "#A68320",
          700: "#836619",
          800: "#614C13",
          900: "#3E310C",
        },
        // Accent: Deep Maroon - Cultural warmth
        accent: {
          DEFAULT: "#8B2635",
          50: "#FCF2F3",
          100: "#F7E1E4",
          200: "#EEC3C9",
          300: "#E19AA3",
          400: "#C75566",
          500: "#8B2635",
          600: "#74202C",
          700: "#5D1A24",
          800: "#46131B",
          900: "#2F0D12",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#6B4423",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#C9A227",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;