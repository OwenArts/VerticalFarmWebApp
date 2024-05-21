import {useEffect, useState} from 'react';
import driver from '../../DataType/Driver/DriverStanding.tsx'
import Team from "../../DataType/Constructor/Constructor.tsx";

function DriverStandingList() {
    const [standing, setStanding] = useState(getStandingFromLocalStorage());
    const updateTimeout = 0.3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            FetchDriverStandings().then(data => {
                let driverStanding = [];
                data.forEach(driverData => {
                    driverStanding.push(new driver(
                        driverData.driverId,
                        driverData.firstName,
                        driverData.lastName,
                        driverData.permanentNumber,
                        new Team(
                            driverData.team.constructorId,
                            driverData.team.name,
                            driverData.team.nationality
                        ),
                        driverData.points,
                        driverData.position
                    ));
                });

                const serializedStanding = JSON.stringify(driverStanding);
                const savedStanding = localStorage.getItem('DriverStanding');
                if (!savedStanding || serializedStanding != savedStanding) {
                    localStorage.setItem('DriverStanding', JSON.stringify(driverStanding));
                    console.log(`Driver standing from local storage: ${driverStanding}`);
                }

                setStanding(driverStanding);
            }).catch(error => console.error('Error fetching next race:', error));
        }, 1000 * updateTimeout);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [standing]);

    function getStandingFromLocalStorage() {
        const driverStanding = localStorage.getItem('DriverStanding');
        if (driverStanding) {
            try {
                const standingData = JSON.parse(driverStanding);
                let result = [];
                for (const d in standingData) {
                    const driverData = standingData[d];
                    if (driverData.Team) { // Check if team property exists
                        result.push(new driver(
                            driverData.driverId,
                            driverData.firstName,
                            driverData.lastName,
                            driverData.permanentNumber,
                            new Team(
                                driverData.Team.constructorId,
                                driverData.Team.name,
                                driverData.Team.nationality
                            ),
                            driverData.points,
                            driverData.position
                        ));
                    } else {
                        console.error("Team data is undefined:", driverData);
                    }
                }
                return result;
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
        } else {
            localStorage.setItem('DriverStanding', '');
            return [];
        }
    }


    return (
        <div className={"p-4"}>
            <div className="overflow-x-auto w-full md:flex md:flex-wrap md:justify-between bg-base-300 rounded-box p-4">
                <span className={"text-base-content text-3xl font-bold font-Standard m-4"}>Driver Standings</span>
                {standing.length <= 0 ? (
                    <div className={"skeleton w-full h-64"}/>
                ) : (
                    <ul className="md:flex md:flex-wrap md:justify-between">
                        {standing.map((data, index) => (
                            <li key={index}
                                className="md:w-1/2 lg:w-1/2 py-4 flex items-center justify-between my-2 mx-auto px-8">
                                <div className="flex items-center justify-self-start">
                                    <span className="font-Standard text-base-content font-bold mr-8">
                                        {index + 1}
                                    </span>
                                    <div className={"border-l-4 pl-8 rounded-l-sm"}
                                         style={{borderColor: data.Team.teamColor}}>
                                        <div className="font-Standard text-base-content">
                                        <span className={"font-medium"}>
                                            {data.FirstName}
                                        </span>
                                            <span>
                                            {" "}
                                        </span>
                                            <span className={"font-extrabold"}>
                                            {data.SecondName}
                                        </span>
                                        </div>
                                        <div className="font-Standard text-base-content font-medium">
                                            {data.Team.teamName}
                                        </div>
                                    </div>
                                </div>
                                <span className="font-Standard text-info-content font-bold bg-info rounded-badge px-2">
                                {data.points} PTS
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


function FetchDriverStandings() {
    return fetch('https://localhost:7002/driver/standing')
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

export default DriverStandingList;
