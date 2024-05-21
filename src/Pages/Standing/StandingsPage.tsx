import NavBar from "../../UI components/NavBar.tsx";
import DriverStandingList from "./DriverStandingList.tsx";
import TeamStandingList from "./TeamStandingList.tsx";

function StandingsPage() {
    return (
        <div className={'w-screen h-full bg-base-100 bg-no-repeat bg-fixed'}>
            <NavBar/>
            <div className="md:flex md:flex-wrap lg:flex-grow md:justify-between">
                <div className="md:w-full lg:w-1/2">
                    <DriverStandingList/>
                </div>
                <div className="md:w-full lg:w-1/2">
                    <TeamStandingList/>
                </div>
            </div>
        </div>
    );
}

export default StandingsPage