/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1A1A1A",
                secondary: "#2D2D2D",
                accent: "#3B82F6",
            }
        },
    },
    plugins: [],
}
