import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Home/Homepage.tsx';
import NoMatch from "./Pages/NoMatch.tsx";
import React from "react";
import DigitalClock from "./Components/DigitalClock.tsx";
import DrawersPage from "./Pages/Drawers/DrawersPage.tsx";

function App() {
    // localStorage.clear()
    return (
        <div className={"full-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover flex flex-col"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="/drawers" element={<DrawersPage/>}/>
                    <Route path="/settings" element={<DigitalClock/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
