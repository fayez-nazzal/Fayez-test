module.exports = {
  important: true,
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        greedy: ["/safe$/"],
      },
    },
  },
  theme: {
    extend: {
      colors: {
        custom_crimson: "#d70d25",
        custom_blue: "#4948d4",
        custom_indigo: "#6400ae",
        custom_aqua: "#05b3b6",
        custom_black: "#222222",
        custom_grey: "#555555",
      },
      height: {
        158: "39.5rem",
        110: "27.5rem",
        nav_menu: "20rem",
        msg: "9rem",
        14: "3.5rem",
      },
      maxHeight: {
        110: "27.5rem",
      },
      boxShadow: {
        md: "0px 0px 7px 1px rgba(0, 0, 0, 0.15)",
      },
      borderWidth: {
        2.5: "2.5px",
      },
    },
  },
  variants: {
    margin: ["responsive", "hover"],
    negativeMargin: ["responsive", "hover"],
    textColor: ["hover", "focus", "group-hover"],
  },
  plugins: [],
};
