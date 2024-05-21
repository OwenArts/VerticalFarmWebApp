import {useEffect, useState} from 'react';
import Team from "../../DataType/Constructor/Constructor.tsx";


function TeamStandingList() {
    const [standing, setStanding] = useState(getStandingFromLocalStorage());
    const updateTimeout = 0.3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            FetchConstructorStandings().then(data => {
                let constructorStanding = [];
                data.forEach(driverData => {
                    constructorStanding.push(new Team(
                        driverData.constructorId,
                        driverData.name,
                        driverData.nationality,
                        driverData.points,
                        driverData.position
                    ));
                });

                const serializedStanding = JSON.stringify(constructorStanding);
                const savedStanding = localStorage.getItem('ConstructorStanding');
                if (!savedStanding || serializedStanding != savedStanding)
                {
                    localStorage.setItem('ConstructorStanding', JSON.stringify(constructorStanding));
                    console.log(`Driver standing from local storage: ${constructorStanding}`);
                }

                setStanding(constructorStanding);
            }).catch(error => console.error('Error fetching next race:', error));
        }, 1000 * updateTimeout);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [standing]);

    function getStandingFromLocalStorage() {
        const driverStanding = localStorage.getItem('ConstructorStanding');
        if (driverStanding) {
            try {
                const standingData = JSON.parse(driverStanding);
                let result = [];
                for (const c in standingData) {
                    const constructorData = standingData[c];
                    result.push(new Team(
                        constructorData.constructorId,
                        constructorData.name,
                        constructorData.nationality,
                        constructorData.points,
                        constructorData.position
                    ));
                }
                return result;
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
        } else {
            localStorage.setItem('ConstructorStanding', '');
            return [];
        }
    }


    return (
        <div className={"p-4"}>
            <div className="overflow-x-auto w-full md:flex md:flex-wrap md:justify-between bg-base-300 rounded-box p-4">
                <span className={"text-base-content text-3xl font-bold font-Standard m-4"}>Constructor Standings</span>
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
                                         style={{borderColor: data.teamColor}}>
                                        <div className="font-Standard text-base-content">
                                        <span className={"font-extrabold"}>
                                            {data.teamName}
                                        </span>
                                        </div>
                                        <div className="font-Standard text-base-content font-medium">
                                            {data.nationality}
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


function FetchConstructorStandings() {
    return fetch('https://localhost:7002/constructor/standing')
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

export default TeamStandingList