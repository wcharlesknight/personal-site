const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    important: true,
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        zIndex: {
            110: 110,
            120: 120,
            130: 130,
            140: 140,
            150: 150,
            160: 160,
            170: 170,
            180: 180,
            190: 190,
            200: 200,
            250: 250,
            300: 300,
            350: 350,
        },
    },
    variants: {
        animation: ["motion-safe", "motion-reduce"],
    },
    plugins: [require("@tailwindcss/forms")],
};
