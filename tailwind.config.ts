import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom dynamic colors based on user's request
        "dynamic-primary": "hsl(var(--dynamic-primary))",
        "dynamic-accent": "hsl(var(--dynamic-accent))",
        "dynamic-text-primary": "hsl(var(--dynamic-text-primary))",
        "dynamic-text-secondary": "hsl(var(--dynamic-text-secondary))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "background-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.3" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "blob-pulse": {
          "0%, 100%": { transform: "scale(1) translate(0, 0)", opacity: "0.7" },
          "33%": { transform: "scale(1.1) translate(10px, -10px)", opacity: "0.8" },
          "66%": { transform: "scale(0.9) translate(-10px, 10px)", opacity: "0.6" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 5px hsl(var(--foreground)), 0 0 10px hsl(var(--primary))" },
          "50%": {
            textShadow: "0 0 10px hsl(var(--foreground)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--accent))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-pan": "background-pan 30s linear infinite",
        "gradient-shift": "gradient-shift 15s ease infinite alternate",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "fade-in": "fade-in 2s ease-out forwards",
        "blob-pulse": "blob-pulse 12s ease-in-out infinite",
        "text-glow": "text-glow 4s ease-in-out infinite alternate",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // Revert to Oswald
        body: ["var(--font-body)", "sans-serif"], // Revert to Inter
      },
    },
  },
  plugins: [(await import("tailwindcss-animate")).default],
} satisfies Config

export default config
