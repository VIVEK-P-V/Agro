import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                agri: {
                    dark: "#1A4D2E", // Deep Green
                    main: "#4F772D", // Fresh Green
                    light: "#90A955", // Light Green
                    accent: "#ECF39E", // Pale Yellow/Green
                    earth: "#D4A373", // Earthy Brown
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ['var(--font-inter)'], // Will set up in layout
            }
        },
    },
    plugins: [],
};
export default config;
