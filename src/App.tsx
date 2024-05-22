import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Home/Homepage.tsx';
import NoMatch from "./Pages/NoMatch.tsx";
import React from "react";
import DigitalClock from "./UI components/DigitalClock.tsx";

function App() {
    // localStorage.clear()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="/drawers" element={<DigitalClock/>}/>
                    <Route path="/settings" element={<DigitalClock/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
