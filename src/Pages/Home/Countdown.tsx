import {useEffect, useState} from "react";
import moment from "moment";
import NextRace from "../../DataType/Race/NextRace.tsx";

function CountDown() {
    const [duration, setDuration] = useState(moment.duration());
    const [race, setRace] = useState(getRaceFromLocalStorage());
    const [initialized, setInitialized] = useState(false); // Track if theme has been initialized

    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem('nextRace'));
        if (savedTheme) {
            setRace(savedTheme);
            setInitialized(true); // Theme has been initialized
        }
    }, []); // Empty dependency array to run only once on mount

    useEffect(() => {
        if (initialized && race) { // Only update localStorage if theme is initialized and not null
            const intervalId = setInterval(() => {
                const startDate = moment(); // Current time
                const endDate = moment(race.raceStart); // Count down end date
                const diff = endDate.diff(startDate); // Difference in milliseconds
                const duration = moment.duration(diff); // Convert difference to duration object
                setDuration(duration); // Update duration state
                if (duration.asSeconds() <= 0) {
                    FetchNextRace().then(data => {
                        const nextRace = new NextRace(data[0].season, data[0].round, data[0].circuitName, data[0].raceName, data[0].country, data[0].raceStart);
                        localStorage.setItem('nextRace', JSON.stringify(nextRace));
                        console.log(`Next race from local storage: {${nextRace.season}, ${nextRace.round}, ${nextRace.circuitName}, ${nextRace.raceName}, ${nextRace.country}, ${nextRace.raceStart}}`)
                        setRace(nextRace);
                    }).catch(error => console.error('Error fetching next race:', error));
                }
            }, 1000);

            // Clean up the interval on component unmount
            return () => clearInterval(intervalId);
        } else {
            const nextRace = new NextRace("", "", "", "", "", new Date);
            localStorage.setItem('nextRace', JSON.stringify(nextRace));
        }
    }, [race, initialized]); // Run effect whenever raceDate changes

    function getRaceFromLocalStorage() {
        const raceString = localStorage.getItem('nextRace');
        // console.log("Race string from localStorage:", raceString); // Log the race string to inspect its value
        if (raceString) {
            try {
                const raceData = JSON.parse(raceString);
                return new NextRace(raceData.season, raceData.round, raceData.circuitName, raceData.raceName, raceData.country, raceData.raceStart);
            } catch (error) {
                console.error("Error parsing JSON:", error); // Log any errors that occur during parsing
                return null;
            }
        } else {
            return null; // If race data is not available in localStorage
        }
    }

    // Render the component with the updated duration values
    return (
        <div className="overflow-x-auto">
            {race && (
                <div
                    className="rounded-box bg-base-300 max-w-full mx-4 p-4 m-4 grid grid-rows-2 gap-4 text-center items-center md:flex md:flex-wrap md:justify-between">
                    <div className="items-center grid-flow-col justify-self-start md:justify-self-center md:order-1">
                        <p className="text-2xl font-bold text-base-content text-center md-5">{formatDate(new Date(race.raceStart))}</p>
                        <p className="text-3xl font-black text-base-content text-center md-5">{race.raceName}</p>
                    </div>
                    <div className="md:order-2 md:justify-self-center">
                        <div
                            className="grid grid-flow-row gap-5 text-center auto-cols-max rounded-box bg-Countdown w-fit p-3">
                            <div className="text-3xl font-black text-countdown-content text-center md-5">
                                <span>Race</span>
                            </div>
                            <div className="inline-block w-full min-w-[1em] h-0.5 self-stretch bg-base-content/70"/>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                <div className="flex flex-col p-2 rounded-box text-neutral-content">
                                <span
                                    className="countdown font-black text-3xl text-countdown-content">{padZero(duration.days())}</span>
                                    <p className="font-bold text-countdown-content text-lg text-center">days</p>
                                </div>
                                <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-base-content/70"/>
                                <div className="flex flex-col p-2 rounded-box text-neutral-content">
                                <span
                                    className="countdown font-black text-3xl text-countdown-content">{padZero(duration.hours())}</span>
                                    <p className="font-bold text-countdown-content text-lg text-center">hours</p>
                                </div>
                                <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-base-content/70"/>
                                <div className="flex flex-col p-2 rounded-box text-neutral-content">
                                <span
                                    className="countdown font-black text-3xl text-countdown-content">{padZero(duration.minutes())}</span>
                                    <p className="font-bold text-countdown-content text-lg text-center">min</p>
                                </div>
                                <div className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-base-content/70"/>
                                <div className="flex flex-col p-2 rounded-box text-neutral-content">
                                <span
                                    className="countdown font-black text-3xl text-countdown-content">{padZero(duration.seconds())}</span>
                                    <p className="font-bold text-countdown-content text-lg text-center">sec</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Function to pad single digit numbers with a leading zero
function padZero(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}

// Function to pad single digit numbers with a leading zero
function formatDate(date: Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${padZero(date.getDate())} ${monthNames[date.getMonth()]}`;
}

function FetchNextRace() {
    return fetch('https://localhost:7002/nextrace')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .catch(error => {
            throw new Error(error.message);
        });
}

export default CountDown;
