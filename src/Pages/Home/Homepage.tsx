import React, { useEffect, useState } from 'react';
import NavBar from "../../Components/NavBar.tsx";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import VerticalFarm from "../../DataType/VerticalFarm.tsx";
import DrawerData from "../../DataType/DrawerData.tsx";
import Drawer from "../../DataType/Drawer.tsx";

function TemperatureTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentTemperature()} °C</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function GroundMoistureTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentMoistureGround()} %</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function AirMoistureTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.GetMostRecentMoistureAir()} %</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function PositionTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.drawerPosition}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function ContentTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function LightTable({ drawers, onDrawerClick, currentDrawer }) {
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
                    <tr
                        key={index}
                        className={`hover text-lg text-base-content bg-content-100 ${currentDrawer && currentDrawer.DrawerId === drawer.DrawerId ? 'bg-base-200' : ''}`}
                        onClick={() => onDrawerClick(drawer)}
                    >
                        <td>{drawer.name}</td>
                        <td>{drawer.light ? "On" : "Off"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function DrawerChart({ drawer }) {
    if (!drawer || drawer.length === 0)
        return (<div className="skeleton w-full h-full"></div>);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(drawer.data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="Temperature" stroke="#ff6961" dot={false}/>
                <Line type="monotone" dataKey="MoistureAir" stroke="#82ca9d" dot={false}/>
                <Line type="monotone" dataKey="MoistureGround" stroke="#ffc658" dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default function Homepage() {
    const [drawers, setDrawers] = useState<Drawer[]>([]);
    const [currentDrawer, setCurrentDrawer] = useState<Drawer | null>(null);

    useEffect(() => {
        async function fetchData() {
            const farm = new VerticalFarm([]);
            const fetchedDrawers = await farm.getAllDrawers();
            setDrawers(fetchedDrawers);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (drawers.length > 0) {
            setCurrentDrawer(drawers[0]);
        }
    }, [drawers]);

    const handleDrawerClick = (drawer) => {
        setCurrentDrawer(drawer);
    };

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar/>
            <div className="flex-grow m-8 overflow-auto">
                <div
                    className="h-full w-full lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8 md:grid md:grid-cols-2 md:grid-rows-6 md:gap-4 sm:grid sm:grid-cols-1 sm:grid-rows-9 sm:gap-4">
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <ContentTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <TemperatureTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <LightTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <PositionTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <GroundMoistureTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <AirMoistureTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-2 sm:row-span-2 sm:col-span-2 w-full h-full min-h-12 sm:mb-0 md:mb-0 lg:mb-0">
                        <DrawerChart drawer={currentDrawer}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
