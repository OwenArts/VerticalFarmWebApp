import {useEffect, useState} from "react";
import moment from "moment/moment";
import LastRace from "../../DataType/Race/LastRace.tsx";
import Flag from "react-country-flag";
import Driver from "../../DataType/Driver/Driver.tsx";
import DriverResult from "../../DataType/Driver/DriverResult.tsx";
import DriverResultListItem from "./DriverResultListItem.tsx";
import Team from "../../DataType/Constructor/Constructor.tsx";


export default function RaceResults() {
    const [duration, setDuration] = useState(moment.duration());
    const [race, setRace] = useState(getRaceFromLocalStorage());
    const [initialized, setInitialized] = useState(false); // Track if theme has been initialized

    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem('lastRace'));
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
                    FetchLastRace().then(data => {
                        console.log(data[0])
                        const drivers = data[0].drivers.map(driver => (
                            new DriverResult(
                                driver.driverId,
                                driver.firstName,
                                driver.lastName,
                                null, // Assuming RacingNumber is not provided in your data
                                new Team(
                                    driver.team.constructorId,
                                    driver.team.name,
                                    driver.team.nationality
                                ),
                                driver.hasFastestLap,
                                driver.raceTime
                            )
                        ));
                        const lastRace = new LastRace(data[0].season, data[0].round, data[0].circuitName, data[0].raceName, data[0].country, data[0].date, data[0].circuitId, drivers);
                        localStorage.setItem('lastRace', JSON.stringify(lastRace));
                        console.log(`Last race from local storage: {${lastRace.raceName}, ${lastRace.raceStart}, ${lastRace.circuitId}}, ${lastRace.drivers}}`)
                        setRace(lastRace);
                    }).catch(error => console.error('Error fetching next race:', error));
                }
            }, 1000);

            // Clean up the interval on component unmount
            return () => clearInterval(intervalId);
        } else {
            const lastRace = new LastRace("", "", "", "", "", new Date, "", []);
            localStorage.setItem('lastRace', JSON.stringify(lastRace));
        }
    }, [race, initialized]); // Run effect whenever raceDate changes

    function getRaceFromLocalStorage() {
        const raceString = localStorage.getItem('lastRace');
        // console.log("Race string from localStorage:", raceString); // Log the race string to inspect its value
        if (raceString) {
            try {
                const raceData = JSON.parse(raceString);
                return new LastRace(raceData.season, raceData.round, raceData.circuitName, raceData.raceName, raceData.country, raceData.raceStart, raceData.circuitId, raceData.drivers);
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
                    className="rounded-box bg-base-300 max-w-full mx-4 p-4 m-4 flex flex-wrap items-center justify-between">
                    <div
                        className="items-center grid-flow-col justify-self-start md:justify-self-center md:order-1 w-full md:w-auto md:flex-grow">
                        <p className="text-2xl font-bold text-base-content text-center md-5">{formatDate(new Date(race.raceStart))}</p>
                        <p className="text-3xl font-black text-base-content text-center md-5">{race.raceName}</p>
                        {race && Array.isArray(race.drivers) && race.drivers.map((driver, index) => (
                            <DriverResultListItem key={index} driverResult={driver} index={index}/>
                        ))}
                    </div>
                    {/*TODO: REMOVE IF API DOENST COME BACK ONLINE*/}
                    <div className="md:order-2 md:justify-self-center w-full md:w-1/4 lg:w-1/4 ">
                        <div className="w-full h-full bg-Fastest-Lap-content p-1 ">
                            <div className={`flex flex-col justify-center items-center w-96 h-96 rounded-sm bg-contain bg-no-repeat ${getImagePath(race.circuitId)}`} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function padZero(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}

function formatDate(date: Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${padZero(date.getDate())} ${monthNames[date.getMonth()]}`;
}

function getImagePath(circuitId: string) {
    switch (circuitId){
        case 'yas_marina' :
            return 'bg-Abu-Dhabi-Circuit'
        case 'albert_park' :
            return 'bg-Australia-Circuit'
        case 'red_bull_ring' :
            return 'bg-Austria-Circuit'
        case 'bahrain' :
            return 'bg-Bahrain-Circuit'
        case 'baku' :
            return 'bg-Baku-Circuit'
        case 'spa' :
            return 'bg-Belgium-Circuit'
        case 'interlagos' :
            return 'bg-Brazil-Circuit'
        case 'villeneuve' :
            return 'bg-Canada-Circuit'
        case 'shanghai' :
            return 'bg-China-Circuit'
        case 'imola' :
            return 'bg-Emilia-Romagna-Circuit'
        case 'silverstone' :
            return 'bg-Great-Britain-Circuit'
        case 'hungaroring' :
            return 'bg-Hungary-Circuit'
        case 'monza' :
            return 'bg-Italy-Circuit'
        case 'suzuka' :
            return 'bg-Japan-Circuit'
        case 'vegas' :
            return 'bg-Las-Vegas-Circuit'
        case 'rodriguez' :
            return 'bg-Mexico-Circuit'
        case 'miami' :
            return 'bg-Miami-Circuit'
        case 'monaco' :
            return 'bg-Monaco-Circuit'
        case 'zandvoort' :
            return 'bg-Netherlands--Circuit'
        case 'losail' :
            return 'bg-Qatar-Circuit'
        case 'jeddah' :
            return 'bg-Saudi-Arabia-Circuit'
        case 'marina_bay' :
            return 'bg-Singapore-Circuit'
        case 'catalunya' :
            return 'bg-Spain-Circuit'
        case 'americas' :
            return 'bg-USA-Circuit'
    };
    return "";
}

function FetchLastRace() {
    return fetch('https://localhost:7002/lastrace')
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