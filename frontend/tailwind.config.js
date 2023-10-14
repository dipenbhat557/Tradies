/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        containerColor: "#bfa1a1",
      },
    },
  },
  plugins: [require("daisyui")],
};
