import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar.tsx";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import VerticalFarm from "../../DataType/VerticalFarm.tsx";
import DrawerData from "../../DataType/DrawerData.tsx";

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

function DrawerChart({ drawers }) {
    if (drawers.length === 0)
        return (<div className="skeleton w-full h-full"></div>);

    console.log(drawers[0].data)
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(drawers[0].data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {/* Temperature Lines */}
                <Line type="monotone" dataKey="Temperature" stroke="#ff6961" dot={false}/>
                <Line type="monotone" dataKey="MoistureAir" stroke="#82ca9d" dot={false}/>
                <Line type="monotone" dataKey="MoistureGround" stroke="#ffc658" dot={false}/>
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
        <div className="w-screen h-screen flex flex-col">
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
                        {/*<h2>Current Drawer:</h2>*/}
                        <DrawerChart drawers={drawers}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
