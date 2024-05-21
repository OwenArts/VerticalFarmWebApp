import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DigitalClock from './UI components/DigitalClock.tsx';
import SignIn from './Pages/SignIn.tsx';
import SignUp from './Pages/SignUp.tsx';
import Homepage from './Pages/Home/Homepage.tsx';
import DriversPage from "./Pages/Driver/DriversPage.tsx";
import TeamsPage from "./Pages/Teams/TeamsPage.tsx";
import StandingsPage from "./Pages/Standing/StandingsPage.tsx";

function App() {
    // localStorage.clear()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*<Route element={<Layout/>} >*/}
                    {/*    <Route path="/" element={<Homepage/>} />*/}
                    {/*    <Route path="/digitalclock" element={<DigitalClock/>} />*/}
                    {/*    <Route path="/drivers" element={<DriversPage/>} />*/}
                    {/*    <Route path="/teams" element={<TeamsPage/>} />*/}
                    {/*    <Route path="/standings" element={<StandingsPage/>} />*/}
                    {/*    <Route path="/signup" element={<SignUp/>} />*/}
                    {/*    <Route path="/signin" element={<SignIn/>} />*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
