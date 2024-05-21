import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
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
            }
        },
    }, plugins: [
        daisyui,
    ], daisyui: {
        themes:
            [
                {
                    day: {
                        ...["day"],
                        "primary": "#38bdf8",
                        "secondary": "#0369a1",
                        "accent": "#0e7490",
                        "neutral": "#181818",
                        "base": "#A3B18A",
                        "base-100": "#588157",
                        "base-200": "#344E41",
                        "base-300": "#3A5A40",
                        "base-content": "#DAD7CD",
                        "info": "#009cff",
                        "info-content": "#025e90",
                        "success": "#00a400",
                        "success-content": "#0369a1",
                        "warning": "#d77e00",
                        "warning-content": "#0e7490",
                        "error": "#ff004f",
                        "error-content": "#181818",
                    },
                    night: {
                        ...["night"],
                        "primary": "#38bdf8",
                        "secondary": "#0369a1",
                        "accent": "#0e7490",
                        "neutral": "#181818",
                        "base": "#A3B18A",
                        "base-100": "#588157",
                        "base-200": "#344E41",
                        "base-300": "#3A5A40",
                        "base-content": "#DAD7CD",
                        "info": "#009cff",
                        "info-content": "#025e90",
                        "success": "#00a400",
                        "success-content": "#0369a1",
                        "warning": "#d77e00",
                        "warning-content": "#0e7490",
                        "error": "#ff004f",
                        "error-content": "#181818",
                    }
                }
            ],
    }
}

