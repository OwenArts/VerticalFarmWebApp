import NavBar from "../../UI components/NavBar.tsx";
import Countdown from "./Countdown.tsx";
import RaceResults from "./RaceResults.tsx";

function Homepage() {
    return (<div className={'w-screen h-screen bg-base-100 bg-no-repeat bg-fixed bg-cover'}>
        <NavBar/>
        <Countdown/>
        <RaceResults/>
    </div>)
}

export default Homepage