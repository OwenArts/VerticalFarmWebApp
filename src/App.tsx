import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Home/Homepage.tsx';
import NoMatch from "./Pages/NoMatch.tsx";
import React from "react";

function App() {
    // localStorage.clear()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/*<Route element={<Layout/>} >*/}
                        <Route path="/" element={<Homepage/>} />
                        <Route path="*" element={<NoMatch/>} />
                        {/*<Route path="/digitalclock" element={<DigitalClock/>} />*/}
                        {/*<Route path="/drivers" element={<DriversPage/>} />*/}
                        {/*<Route path="/teams" element={<TeamsPage/>} />*/}
                        {/*<Route path="/standings" element={<StandingsPage/>} />*/}
                        {/*<Route path="/signup" element={<SignUp/>} />*/}
                        {/*<Route path="/signin" element={<SignIn/>} />*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
