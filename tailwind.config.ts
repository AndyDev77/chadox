// tailwind.config.ts
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Oswald",
      secondary: "Raleway",
      tertiary: "Rozha One",
    },
    container: {
      center: true,
      padding: "2rem",
      // padding: {
      //   DEFAULT: "20px",
      //   lg: "0",
      // },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: {
          500: "#111111",
          50: " #F6F8FD",
          DEFAULT: "#111111",
          foreground: "hsl(var(--primary-foreground))",
        },
        grey: {
          600: "#545454", // Subdued - color name in figma
          500: "#757575",
          400: "#AFAFAF", // Disabled - color name in figma
          50: "#F6F6F6", // White Grey - color name in figma
        },
        black: "#111111",
        white: "#FFFFFF",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        hero: "url('/img/hero/bg.jpg')",
        about: "url('/img/about/image.png')",
        interview: "url('/img/interview/bg.png')",
        "dotted-pattern": "url('/img/dotted-pattern.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
