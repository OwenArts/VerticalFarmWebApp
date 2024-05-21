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
                'formula-login-background': "url('assets/formula-background-cropped.jpg')",
                'formula-pfp-1' : "url('assets/F1ProfilePicture1.jpg')",
                'formula-pfp-2' : "url('assets/F1ProfilePicture2.jpg')",
                'formula-pfp-3' : "url('assets/F1ProfilePicture3.jpg')",
                'formula-pfp-4' : "url('assets/F1ProfilePicture4.jpg')",
                'formula-pfp-5' : "url('assets/F1ProfilePicture5.jpg')",
                'formula-pfp-6' : "url('assets/F1ProfilePicture6.jpg')",
                //Circuits
                'Abu-Dhabi-Circuit' : "url('assets/Circuit images/Abu_Dhabi_Circuit.png')",
                'Australia-Circuit' : "url('assets/Circuit images/Australia_Circuit.png')",
                'Austria-Circuit' : "url('assets/Circuit images/Austria_Circuit.png')",
                'Bahrain-Circuit' : "url('assets/Circuit images/Bahrain_Circuit.png')",
                'Baku-Circuit' : "url('assets/Circuit images/Baku_Circuit.png')",
                'Belgium-Circuit' : "url('assets/Circuit images/Belgium_Circuit.png')",
                'Brazil-Circuit' : "url('assets/Circuit images/Brazil_Circuit.png')",
                'Canada-Circuit' : "url('assets/Circuit images/Canada_Circuit.png')",
                'China-Circuit' : "url('assets/Circuit images/China_Circuit.png')",
                'Emilia-Romagna-Circuit' : "url('assets/Circuit images/Emilia_Romagna_Circuit.png')",
                'Great-Britain-Circuit' : "url('assets/Circuit images/Great_Britain_Circuit.png')",
                'Hungary-Circuit' : "url('assets/Circuit images/Hungary_Circuit.png')",
                'Italy-Circuit' : "url('assets/Circuit images/Italy_Circuit.png')",
                'Japan-Circuit' : "url('assets/Circuit images/Japan_Circuit.png')",
                'Las-Vegas-Circuit' : "url('assets/Circuit images/Las_Vegas_Circuit.png')",
                'Mexico-Circuit' : "url('assets/Circuit images/Mexico_Circuit.png')",
                'Miami-Circuit' : "url('assets/Circuit images/Miami_Circuit.png')",
                'Monaco-Circuit' : "url('assets/Circuit images/Monaco_Circuit.png')",
                'Netherlands-Circuit' : "url('assets/Circuit images/Netherlands_Circuit.png')",
                'Qatar-Circuit' : "url('assets/Circuit images/Qatar_Circuit.png')",
                'Saudi-Arabia-Circuit' : "url('assets/Circuit images/Saudi_Arabia_Circuit.png')",
                'Singapore-Circuit' : "url('assets/Circuit images/Singapore_Circuit.png')",
                'Spain-Circuit' : "url('assets/Circuit images/Spain_Circuit.png')",
                'USA-Circuit' : "url('assets/Circuit images/USA.png')",
            },
            colors: {
                "Countdown" : "#006341",
                "Countdown-content" : "#ccd2d2",
                "Red-Bull" : "#3671c6",
                "Racing-Bulls" : "#6692ff",
                "McLaren" : "#ff8000",
                "Mercedes" : "#27f4d2",
                "Sauber" : "#52e252",
                "Williams" : "#64c4ff",
                "Ferrari" : "#e8002d",
                "Alpine" : "#ff87bc",
                "Haas" : "#b6babd",
                "Aston-Martin" : "#229971",
                "Fastest-Lap" : "#800ff1",
                "Fastest-Lap-content" : "#ccd2d2",
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
                        "primary": "#0369a1",
                        "secondary": "#0f8bd2",
                        "accent": "#38bdf8",
                        "neutral": "#02181a",
                        "base": "#d90a0a",
                        "base-100": "#fcfcfc",
                        "base-200": "#BAB9B9",
                        "base-300": "#757575",
                        "base-content": "#22223B",
                        "info": "#0072f7",
                        "info-content": "#0369a1",
                        "success": "#00df7c",
                        "success-content": "#0f8bd2",
                        "warning": "#ff9935",
                        "warning-content": "#38bdf8",
                        "error": "#ff668c",
                        "error-content": "#02181a",
                    },
                    night: {
                        ...["night"],
                        "primary": "#38bdf8",
                        "secondary": "#0369a1",
                        "accent": "#0e7490",
                        "neutral": "#181818",
                        "base": "#d90a0a",
                        "base-100": "#403d4e",
                        "base-200": "#37344a",
                        "base-300": "#22223B",
                        "base-content": "#ccd2d2",
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

