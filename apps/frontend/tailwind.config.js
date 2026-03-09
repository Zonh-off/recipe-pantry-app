const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
};