import NavBar from "../../Components/NavBar.tsx";
import CurrentDrawerInformation from "./CurrentDrawerInformation.tsx";
import React, {useEffect, useState} from "react";
import CurrentDrawerNotes from "./CurrentDrawerNotes.tsx";
import VerticalFarm from "../../DataType/VerticalFarm.tsx";
import DrawerInformationCard from "../../Components/DrawerInformationCard.tsx";
import {DrawerInfoType} from "../../Enums/DrawerInfoType.tsx";
import Drawer from "../../DataType/Drawer.tsx";

export default function DrawersPage() {
    const [drawers, setDrawers] = useState<Drawer[]>([]);
    const [currentDrawer, setCurrentDrawer] = useState<Drawer | null>(null);

    useEffect(() => {
        async function fetchData() {
            const farm = new VerticalFarm([]);
            const fetchedDrawers = await farm.getAllDrawers();
            setDrawers(fetchedDrawers);
        }

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    useEffect(() => {
        if (drawers.length > 0) {
            setCurrentDrawer(drawers[0]);
            console.log("Drawer[0]: ", drawers[0]);
        }
    }, [drawers]); // Dependency on drawers ensures this runs when drawers update

    return (
        <div className="min-h-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover">
            <NavBar/>
            <div className="grid grid-cols-6 grid-rows-8 gap-8">
                <div className="bg-base-200 row-span-8 col-span-1 overflow-y-auto">
                    {/* Add overflow-y-auto to enable vertical scrolling */}
                    <ol>
                        {drawers.map((drawer) => (
                            <li key={drawer.DrawerId}>
                                <button className={`${
                                    currentDrawer && currentDrawer.DrawerId === drawer.DrawerId
                                                ? "bg-alpine"
                                                : "bg-red"
                                        } p-2 text-white`}
                                        onClick={() => setCurrentDrawer(drawer)}>
                                    {drawer.name}
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="bg-base-300 row-span-8 col-span-3 p-8 my-8 rounded-box overflow-y-auto">
                    {/* Add overflow-y-auto to enable vertical scrolling */}
                    {currentDrawer && (
                        <CurrentDrawerInformation drawer={currentDrawer}/>
                    )}
                </div>
                <div className="bg-base-300 row-span-8 col-span-2 my-8 rounded-box overflow-y-auto">
                    {/* Add overflow-y-auto to enable vertical scrolling */}
                    {currentDrawer && (
                        <CurrentDrawerNotes drawer={currentDrawer}/>
                    )}
                </div>
            </div>
        </div>
    );
}