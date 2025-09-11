/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "ui-sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#6366f1", // Indigo (like 21st.dev)
          light: "#a5b4fc",
          dark: "#4338ca",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(99, 102, 241, 0.6)",
      },
    },
  },
  plugins: [],
}
