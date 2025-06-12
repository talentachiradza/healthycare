/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
             primaryColor: "#1D4E89",
             secondaryColor: "#B0B0B0",
             textColor: "#0A1A33",
             headingColor: "#0A1A33",
             buttonColor: "#1D4E89",
             buttonHoverColor: "##3A7BCF",
             bgColor: "#FFFFFF",
             obgColor: "#E6EDF6",
             iconColor: "#B0B0B0",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

