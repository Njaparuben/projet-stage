import type { Config } from "tailwindcss"


const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {

        },
        screens: {
            xs: {
                min: "300px",
                max: "659px"
            },
            sm: {
                min: "700px",
                max: "949px"
            },
            md: {
                min: "950px",
                //  max: "1023px"
            },
            lg: {
                min: "1024px",
                // max: "1279px" 
            },
            xl: {
                min: "1280px",
                //  max: "1535px"
            },
            "2xl": { min: "1536px" },
        },
    }
}

export default config