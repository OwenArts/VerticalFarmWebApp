import NavBar from "../../UI components/NavBar.tsx";
import TeamInfoListItem from "./TeamInfoListItem.tsx";
import Team from "../../DataType/Constructor/Constructor.tsx";
import {useEffect, useState} from "react";

function TeamsPage() {
    const [teams, setTeams] = useState(getTeamsFromLocalStorage());
    const updateTimeout = 0.3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            FetchTeamInfo().then(data => {
                let teams = [];
                data.forEach(teamData => {
                    teams.push(new Team(
                        teamData.constructorId,
                        teamData.name,
                        teamData.nationality,
                        teamData.points,
                        teamData.position,
                        teamData.wins,
                        teamData.url,
                    ));
                });

                const serializedStanding = JSON.stringify(teams);
                const savedStanding = localStorage.getItem('Teams');
                if (!savedStanding || serializedStanding != savedStanding) {
                    localStorage.setItem('Teams', JSON.stringify(teams));
                    console.log(`Teams from local storage: ${teams}`);
                }

                setTeams(teams);
            }).catch(error => console.error('Error fetching teams:', error));
        }, 1000 * updateTimeout);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [teams]);

    function getTeamsFromLocalStorage() {
        const teams = localStorage.getItem('Teams');
        if (teams) {
            try {
                const localTeamsData = JSON.parse(teams);
                let result = [];
                for (const d in localTeamsData) {
                    const teamData = localTeamsData[d];
                    if (teamData) { // Check if team property exists
                        result.push(new Team(
                            teamData.constructorId,
                            teamData.teamName,
                            teamData.nationality,
                            teamData.teamColor,
                            teamData.points,
                            teamData.position,
                            teamData.wins,
                        ));
                    } else {
                        console.error("Team data is undefined:", teamData);
                    }
                }
                return result;
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
        } else {
            localStorage.setItem('Teams', '');
            return [];
        }
    }

    return (
        <div className="w-screen h-screen bg-base-100 bg-no-repeat bg-fixed bg-cover">
            <NavBar/>
            <span className={"text-base-content text-3xl font-bold font-Standard m-4 mt-8"}>Teams</span>
            <ul className="flex flex-wrap justify-between px-2 list-none">
                {teams.map((team, index) => (
                    <TeamInfoListItem key={index} team={team} index={index}/>
                ))}
            </ul>
        </div>
    );
}

function FetchTeamInfo() {
    return fetch('https://localhost:7002/constructor/allteams')
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

export default TeamsPage
