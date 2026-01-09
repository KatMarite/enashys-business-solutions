/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                ebs: {
                    purple: '#7e22ce',
                    red: '#ef4444',
                    yellow: '#f59e0b',
                    dark: '#1f2937',
                }
            }
        },
    },
    plugins: [],
}
