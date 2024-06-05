import NavBar from "../../Components/NavBar.tsx";
import CurrentDrawerInformation from "./CurrentDrawerInformation.tsx";
import React, {useState} from "react";
import CurrentDrawerNotes from "./CurrentDrawerNotes.tsx";
import VerticalFarm from "../../DataType/VerticalFarm.tsx";

export default function DrawersPage() {
    const [currentDrawerId, setCurrentDrawerId] = useState();
    const [currentDrawer, setCurrentDrawer] = useState();

    const verticalFarm = new VerticalFarm([]);

    const fetchDrawers = () => {
        console.log("Starting to fetch the drawers.");
        verticalFarm.getAllDrawers().then(fetchedDrawers => {
            console.log(fetchedDrawers);
        }).catch(error => {
            console.error("Error fetching drawers:", error);
        });
        console.log("Finished fetching the drawers.");
    };

    return (
        <div className="w-full h-full bg-leaves-background bg-no-repeat bg-fixed bg-cover flex flex-col">
            <NavBar />
            <div className="w-full h-full grid grid-cols-6 grid-rows-8 gap-8">
                <div className="bg-base-200 row-span-8 col-span-1">
                    01
                </div>
                <div className="bg-base-300 row-span-8 col-span-3 p-8 my-8 rounded-box">
                    {/*<CurrentDrawerInformation drawer={currentDrawer}/>*/}
                </div>
                <div className="bg-base-300 row-span-8 col-span-2 my-8 rounded-box">
                    {/*<CurrentDrawerNotes drawer={currentDrawer} />*/}
                    {/*<button onClick={fetchDrawers}>Fetch Data</button>*/}
                </div>
            </div>
        </div>
    );
}