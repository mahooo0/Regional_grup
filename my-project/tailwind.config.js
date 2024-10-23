/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            clipPath: {
                custom: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-clip-path'),
    ],
};
