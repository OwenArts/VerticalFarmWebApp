import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'italy-background': "url('assets/background.jpg')",
                'leaves-background': "url('assets/background_leaves.png')",
            },
            colors: {
                "Countdown": "#006341",
                "Countdown-content": "#ccd2d2",
                "Red-Bull": "#3671c6",
                "Racing-Bulls": "#6692ff",
                "McLaren": "#ff8000",
                "Mercedes": "#27f4d2",
                "Sauber": "#52e252",
                "Williams": "#64c4ff",
                "Ferrari": "#e8002d",
                "Alpine": "#ff87bc",
                "Haas": "#b6babd",
                "Aston-Martin": "#229971",
                "Fastest-Lap": "#800ff1",
                "Fastest-Lap-content": "#ccd2d2",
            },
            fontFamily: {
                'Standard': "QuickSand"
            },
        },
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes:
            [
                {
                    day: {
                        ...["day"],
                        "primary": "#588157",
                        "secondary": "#A3B18A",
                        "accent": "#0E7490",
                        "neutral": "#588157",
                        "base": "#A3B18A",
                        "base-100": "#588157",
                        "base-200": "#3A5A40",
                        "base-300": "#344E41",
                        "base-content": "#DAD7CD",
                        "info": "#6394C2",
                        "info-content": "#07070D",
                        "success": "#07B374",
                        "success-content": "#07070D",
                        "warning": "#DB7A30",
                        "warning-content": "#07070D",
                        "error": "#E64764",
                        "error-content": "#07070D",
                    },
                    night: {
                        ...["night"],
                        "primary": "#588157",
                        "secondary": "#A3B18A",
                        "accent": "#0E7490",
                        "neutral": "#588157",
                        "base": "#A3B18A",
                        "base-100": "#588157",
                        "base-200": "#3A5A40",
                        "base-300": "#344E41",
                        "base-content": "#DAD7CD",
                        "info": "#6394C2",
                        "info-content": "#07070D",
                        "success": "#07B374",
                        "success-content": "#07070D",
                        "warning": "#DB7A30",
                        "warning-content": "#07070D",
                        "error": "#E64764",
                        "error-content": "#07070D",
                    }
                }
            ],
    }
}
