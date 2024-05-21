import NavBar from "../../UI components/NavBar.tsx";
import DriverInfoListItem from "./DriverInfoListItem.tsx";
import DriverInfo from "../../DataType/Driver/DriverInfo.tsx";
import Team from "../../DataType/Constructor/Constructor.tsx";
import {useEffect, useState} from "react";

function DriversPage() {
    const [drivers, setDrivers] = useState(getDriversFromLocalStorage());
    const updateTimeout = 0.3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            FetchDriverInfo().then(data => {
                let drivers = [];
                data.forEach(driverData => {
                    drivers.push(new DriverInfo(
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
                        driverData.position,
                        driverData.code,
                        driverData.birthday,
                        driverData.nationality,
                        driverData.url,
                        driverData.wins
                    ));
                });

                const serializedStanding = JSON.stringify(drivers);
                const savedStanding = localStorage.getItem('Drivers');
                if (!savedStanding || serializedStanding != savedStanding) {
                    localStorage.setItem('Drivers', JSON.stringify(drivers));
                    console.log(`Drivers from local storage: ${drivers}`);
                }

                setDrivers(drivers);
            }).catch(error => console.error('Error fetching drivers:', error));
        }, 1000 * updateTimeout);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [drivers]);

    function getDriversFromLocalStorage() {
        const drivers = localStorage.getItem('Drivers');
        if (drivers) {
            try {
                const localDriverData = JSON.parse(drivers);
                let result = [];
                for (const d in localDriverData) {
                    const driverData = localDriverData[d];
                    if (driverData.Team) { // Check if team property exists
                        result.push(new DriverInfo(
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
            localStorage.setItem('Drivers', '');
            return [];
        }
    }

    return (
        <div className="w-full h-full bg-base-100 bg-no-repeat bg-fixed bg-cover">
            <NavBar/>
            <span className={"text-base-content text-3xl font-bold font-Standard m-4 mt-8"}>Drivers</span>
            <ul className="flex flex-wrap justify-between px-2 list-none">
                {drivers.map((driver, index) => (
                    <DriverInfoListItem key={index} driver={driver} index={index}/>
                ))}
            </ul>
        </div>
    );
}

function FetchDriverInfo() {
    return fetch('https://localhost:7002/driver/alldrivers')
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

export default DriversPage
