/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        400: "#94a3b8",
        500: "#64748b",
        900: "#0f172a",
      },
      blue: {
        50: "#eff6ff",
        700: "#1d4ed8",
      },
      orange: {
        500: "#f97316",
        600: "#ea580c",
      },
    },
  },
};
export const plugins = [];
