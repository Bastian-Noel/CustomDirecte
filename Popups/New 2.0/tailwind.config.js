/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: {
    relative: true,
    files: ["**.{html,js}"],
  },
  theme: {
    extend: {
      content: {
        check: 'url("svg/icons/check.svg")',
        reload: 'url("svg/icons/reload.svg")',
        calculator: 'url("svg/icons/calculator.svg")',
        chartmixed: 'url("svg/icons/chart-mixed.svg")',
        colors: 'url("svg/icons/colors.svg")',
        creditcardscan: 'url("svg/icons/credit-card-scan.svg")',
        download: 'url("svg/icons/download.svg")',
        drawsquare: 'url("svg/icons/draw-square.svg")',
        eyeslash: 'url("svg/icons/eye-slash.svg")',
        filebookmark: 'url("svg/icons/file-bookmark.svg")',
        fontcase: 'url("svg/icons/font-case.svg")',
        gear: 'url("svg/icons/gear.svg")',
        lock: 'url("svg/icons/lock.svg")',
        messagesquarearrowup: 'url("svg/icons/message-square-arrow-up.svg")',
        moon: 'url("svg/icons/moon.svg")',
        scalebalanced: 'url("svg/icons/scale-balanced.svg")',
        shapes: 'url("svg/icons/shapes.svg")',
        sidebar: 'url("svg/icons/sidebar.svg")',
        swatchbook: 'url("svg/icons/swatchbook.svg")',
        table: 'url("svg/icons/table.svg")',
      },
      colors: {
        black: {
          900: "#000000",
          "900_23": "#00000023",
          "900_26": "#00000026",
          "900_3f": "#0000003f",
          "900_54": "#00000054",
          "900_59": "#00000059",
        },
        blue: {
          500: "#2c9ceb",
        },
        gray: {
          50: "#fcfcfd",
          "50_01": "#f9fafb",
          700: "#606060",
          900: "#1e1e1e",
        },
        green: {
          400: "#54b471",
        },
        pink: {
          700: "#c8194a",
          "700_19": "#c8194a19",
        },
        white: {
          a700: "#ffffff",
        },
        colors: "#faa307ff",
        colors1: "#ccc",
      },
      boxShadow: {
        xs: "0 0 6px 0 #00000054",
        sm: "0 2px 2px 0 #00000023",
        md: "0 0 1px 0 #0000003f",
        lg: "0 1px 2px 0 #00000023",
        xl: "0 0 2px 0 #0000003f",
        "2xl": "0 0 3px 0 #00000059",
      },
      fontFamily: {
        sans: "Poppins, Arial, sans-serif",
      },
    },
  },
};
