const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        primaryold: {
          ...colors.indigo,
        },
      },
      typography: () => ({
        "secondary-edit": {
          css: {
            "--tw-prose-body": colors.slate[700],
            "--tw-prose-headings": colors.slate[900],
            "--tw-prose-bold": colors.slate[900],
            "--tw-prose-counters": colors.slate[500],
            "--tw-prose-bullets": colors.slate[300],
            "--tw-prose-hr": colors.slate[200],
            "--tw-prose-quotes": colors.slate[900],
            "--tw-prose-quote-borders": colors.slate[200],
            "--tw-prose-captions": colors.slate[500],
            "--tw-prose-code": colors.slate[900],
            "--tw-prose-pre-code": colors.slate[200],
            "--tw-prose-pre-bg": colors.slate[800],
          },
        },
        "secondary-view": {
          css: {
            "--tw-prose-body": colors.slate[500],
            "--tw-prose-headings": colors.slate[600],
            "--tw-prose-bold": colors.slate[600],
            "--tw-prose-counters": colors.slate[300],
            "--tw-prose-bullets": colors.slate[100],
            "--tw-prose-hr": colors.slate[50],
            "--tw-prose-quotes": colors.slate[600],
            "--tw-prose-quote-borders": colors.slate[50],
            "--tw-prose-captions": colors.slate[300],
            "--tw-prose-code": colors.slate[600],
            "--tw-prose-pre-code": colors.slate[50],
            "--tw-prose-pre-bg": colors.slate[500],
          },
        },
      }),
    },
  },
  plugins: [typography],
};
