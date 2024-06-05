import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar.tsx";
import Drawer from "../../DataType/Drawer.tsx";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import VerticalFarm from "../../DataType/VerticalFarm.tsx";

// const drawerData = [
//     new Drawer("id", "Closed", "Drawer 1", "Arugula", true, new Date(Date.now()), null),
//     new Drawer("id", "Closed", "Drawer 2", "Arugula", true, new Date(Date.now()), null),
//     new Drawer("id", "Closed", "Drawer 3", "Lettuce", false, new Date(Date.now()), null),
//     new Drawer("id", "Closed", "Drawer 4", "Lettuce", false, new Date(Date.now()), null),
// ];

const generateDrawerData = () => {
    const data = [];
    const startTime = new Date('2024-05-20T00:00:00');
    const endTime = new Date('2024-05-21T00:00:00');
    let currentTime = startTime;

    while (currentTime <= endTime) {
        data.push({
            time: currentTime.toISOString(),
            Drawer1_Temp: 15 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer1_GroundMoisture: 50 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer1_AirMoisture: 30 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer2_Temp: 15 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer2_GroundMoisture: 50 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer2_AirMoisture: 30 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer3_Temp: 15 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer3_GroundMoisture: 50 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer3_AirMoisture: 30 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer4_Temp: 15 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer4_GroundMoisture: 50 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
            Drawer4_AirMoisture: 30 + Math.sin(currentTime.getMinutes()+(currentTime.getHours()*60) + Math.random() * 5),
        });
        currentTime.setMinutes(currentTime.getMinutes() + 20);
    }

    return data;
}

const data = generateDrawerData();

function TemperatureTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Temperature</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentTemperature()} °C</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function GroundMoistureTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Ground Moisture Level</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentMoistureGround()} %</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function AirMoistureTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Air Moisture Level</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentMoistureAir()} %</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function PositionTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Drawer Position</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.drawerPosition}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function ContentTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function LightTable({ drawers }) {
    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>Light</th>
                </tr>
                </thead>
                <tbody>
                {drawers.map((drawer, index) => (
                    <tr key={index} className="hover text-lg text-base-content bg-content-100">
                        <td>{drawer.name}</td>
                        <td>{drawer.light ? "On" : "Off"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function DrawerChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="time"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/* Temperature Lines */}
                <Line type="monotone" dataKey="Drawer1_Temp" stroke="#8884d8" dot={false}/>
                {/*<Line type="monotone" dataKey="Drawer2_Temp" stroke="#82ca9d" dot={false}/>*/}
                {/*<Line type="monotone" dataKey="Drawer3_Temp" stroke="#ffc658" dot={false}/>*/}
                {/*<Line type="monotone" dataKey="Drawer4_Temp" stroke="#ff8042" dot={false}/>*/}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default function Homepage() {
    const [drawers, setDrawers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const farm = new VerticalFarm([]);
            const fetchedDrawers = await farm.getAllDrawers();
            setDrawers(fetchedDrawers);
        }
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="w-screen h-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover flex flex-col">
            <NavBar/>
            <div className="flex-grow m-8 overflow-auto">
                <div
                    className="h-full w-full lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8 md:grid md:grid-cols-2 md:grid-rows-6 md:gap-4 sm:grid sm:grid-cols-1 sm:grid-rows-9 sm:gap-4">
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <ContentTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <TemperatureTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <LightTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <PositionTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <GroundMoistureTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <AirMoistureTable drawers={drawers}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-2 sm:row-span-2 sm:col-span-2 w-full h-full min-h-12 sm:mb-0 md:mb-0 lg:mb-0">
                        <DrawerChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}
