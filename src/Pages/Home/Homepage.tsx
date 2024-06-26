import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar.tsx";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import VerticalFarm from "../../DataType/VerticalFarm.tsx";
import DrawerData from "../../DataType/DrawerData.tsx";
import Drawer from "../../DataType/Drawer.tsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DataTable({drawers, onDrawerClick, currentDrawer, dataType, valueKey}) {
    const getValue = (drawer, valueKey) => {
        if (valueKey === 'content') {
            return drawer.content;
        } else if (valueKey === 'GetMostRecentTemperature') {
            return `${drawer.GetMostRecentTemperature()} °C`;
        } else if (valueKey === 'light ? \'On\' : \'Off\'') {
            return drawer.light ? 'On' : 'Off';
        } else if (valueKey === 'drawerPosition') {
            return drawer.drawerPosition;
        } else if (valueKey === 'GetMostRecentMoistureGround') {
            return `${drawer.GetMostRecentMoistureGround()}%`;
        } else if (valueKey === 'GetMostRecentMoistureAir') {
            return `${drawer.GetMostRecentMoistureAir()}%`;
        }
        return '';
    };

    return (
        <div className="overflow-y-auto rounded-2xl h-full w-full">
            <table className="table table-lg table-pin-rows w-full h-full">
                <thead>
                <tr className="text-2xl text-base-content">
                    <th>Drawer</th>
                    <th>{dataType}</th>
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
                        <td>{getValue(drawer, valueKey)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

function DrawerChart({drawer}) {
    if (!drawer || drawer.data.length === 0)
        return (
            <div className="skeleton w-full h-full">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(drawer.data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp"/>
                <YAxis/>
                <Tooltip contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}/>
                <Legend/>
                <Line type="monotone" dataKey="Temperature" stroke="#ff6961" dot={false}  strokeWidth={3}/>
                <Line type="monotone" dataKey="MoistureAir" stroke="#88f9d4" dot={false}  strokeWidth={3}/>
                <Line type="monotone" dataKey="MoistureGround" stroke="#d4a017" dot={false}  strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default function Homepage() {
    // @ts-ignore
    const [drawers, setDrawers] = useState<Drawer[]>([]);
    const [currentDrawer, setCurrentDrawer] = useState<Drawer | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Loading state

    useEffect(() => {
        async function fetchData() {
            try {
                const farm = new VerticalFarm();
                const fetchedDrawers = await farm.getAllDrawers();
                setDrawers(fetchedDrawers);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to fetch drawers. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setLoading(false); // Set loading to false on error
            }
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

    if (loading) {
        return (
            <div className="w-screen h-screen flex flex-col">
                <NavBar/>
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-xl mr-2">Loading...</p>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar/>
            <div className="flex-grow m-8 overflow-auto">
                <div
                    className="h-full w-full lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8 md:grid md:grid-cols-2 md:grid-rows-6 md:gap-4 sm:grid sm:grid-cols-1 sm:grid-rows-9 sm:gap-4">
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Content" valueKey="content"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Temperature" valueKey="GetMostRecentTemperature"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Light" valueKey="light ? 'On' : 'Off'"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Position" valueKey="drawerPosition"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Ground Moisture Level" valueKey="GetMostRecentMoistureGround"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-1 md:row-span-2 md:col-span-1 sm:row-span-2 sm:col-span-1 w-full h-full min-h-12 sm:mb-8 md:mb-8 lg:mb-0">
                        <DataTable drawers={drawers} onDrawerClick={handleDrawerClick} currentDrawer={currentDrawer}
                                   dataType="Air Moisture Level" valueKey="GetMostRecentMoistureAir"/>
                    </div>
                    <div
                        className="bg-base-300 rounded-2xl lg:row-span-2 lg:col-span-2 md:row-span-2 md:col-span-2 sm:row-span-2 sm:col-span-2 w-full h-full min-h-12 sm:mb-0 md:mb-0 lg:mb-0">
                        <DrawerChart drawer={currentDrawer}/>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
