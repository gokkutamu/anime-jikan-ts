const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "black-light": "#161616",
                primary: "#5179ff",
                "gray-light": "#989898",
                "gray-darken": "#3a3939",
                dark: "#1C1C1E",
                "dark-dark": "#19191b",
                "dark-light": "#333335",
                "dark-light-2": "#49494b",
            },
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                sm: "repeat(auto-fill, minmax(130px, 1fr))",
                lg: "repeat(auto-fill, minmax(160px, 1fr))",
            },
        },
    },
    plugins: [],
}