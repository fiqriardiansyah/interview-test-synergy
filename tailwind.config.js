/** @type {import('tailwindcss/types').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};

module.exports = config;
