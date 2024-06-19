import React, {useEffect, useState} from 'react';
import NavBar from "../../Components/NavBar.tsx";
import CurrentDrawerInformation from "./CurrentDrawerInformation.tsx";
import CurrentDrawerNotes from "./CurrentDrawerNotes.tsx";
import VerticalFarm from "../../DataType/VerticalFarm.tsx";
import Drawer from "../../DataType/Drawer.tsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DrawersPage() {
    // @ts-ignore
    const [drawers, setDrawers] = useState<Drawer[]>([]);
    const [currentDrawer, setCurrentDrawer] = useState<Drawer | null>(null);
    const [sortBy, setSortBy] = useState<string>('name'); // Default sorting by name
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        async function fetchData() {
            try {
                // @ts-ignore
                const farm = new VerticalFarm([]);
                const fetchedDrawers = await farm.getAllDrawers();
                setDrawers(fetchedDrawers);
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
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (drawers.length > 0) {
            setCurrentDrawer(drawers[0]);
        }
    }, [drawers]);

    // Function to sort drawers based on selected criteria
    const sortedDrawers = drawers.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        // Add more sorting criteria as needed
        return 0;
    });

    // Function to filter drawers based on search term
    const filteredDrawers = sortedDrawers.filter(drawer => drawer.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Message when no results found
    const noResultsMessage = filteredDrawers.length === 0 && searchTerm !== ''
        ? <p className="text-xl text-center mt-4">No results found for "{searchTerm}"</p>
        : null;

    return (
        <div className="min-h-screen min-w-screen w-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover">
            <NavBar/>
            <div className="grid grid-cols-6 grid-rows-8 gap-8">
                <div className="bg-base-200 row-span-8 col-span-1 overflow-y-auto p-2">
                    <input
                        type="text"
                        placeholder="Search drawers..."
                        className="w-full mb-4 p-2 rounded outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ol>
                        {filteredDrawers.map((drawer) => (
                            <li key={drawer.DrawerId}>
                                <button
                                    className={`w-full outline-none my-4 h-24 text-2xl ${
                                        currentDrawer && currentDrawer.DrawerId === drawer.DrawerId
                                            ? "bg-base-300 outline outline-4 outline-offset-0 outline-secondary text-secondary font-black"
                                            : "bg-secondary text-base-300 font-bold hover:bg-base-100 hover:outline hover:outline-offset-0 hover:outline-secondary hover:text-secondary hover:font-black"
                                    }`}
                                    onClick={() => setCurrentDrawer(drawer)}
                                >
                                    {drawer.name}
                                </button>
                            </li>
                        ))}
                    </ol>
                    {noResultsMessage}
                </div>
                <div className="bg-base-300 row-span-8 col-span-3 p-8 my-8 rounded-box overflow-y-auto">
                    {currentDrawer && (
                        <CurrentDrawerInformation drawer={currentDrawer}/>
                    )}
                </div>
                <div className="bg-base-300 row-span-8 col-span-2 my-8 rounded-box overflow-y-auto">
                    {currentDrawer && (
                        <CurrentDrawerNotes drawer={currentDrawer}/>
                    )}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
