import NavBar from "../../UI components/NavBar.tsx";
import Drawer from "../../DataType/Drawer.tsx";

const drawerData = [
    new Drawer("Closed", 22.5, 55, 40, "Drawer 1", "Documents and files"),
    new Drawer("Closed", 24.3, 50, 42, "Drawer 2", "Office supplies"),
    new Drawer("Closed", 21.8, 60, 38, "Drawer 3", "Personal items"),
    new Drawer("Closed", 23.1, 58, 45, "Drawer 4", "Miscellaneous")
];

export default function Homepage() {
    return (
        <div className="w-screen h-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover flex flex-col">
            <NavBar/>
            <div className="flex-grow m-8 overflow-auto"> {/* Change overflow-hidden to overflow-auto */}
                <div className="h-full w-full
                lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8
                md:grid md:grid-cols-2 md:grid-rows-6 md:gap-4
                sm:grid sm:grid-cols-1 sm:grid-rows-9 sm:gap-4">
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-1
                                    md:row-span-2 md:col-span-1
                                    sm:row-span-2 sm:col-span-1
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-8 md:mb-8 lg:mb-0">
                        <TemperatureTable/>
                    </div>
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-1
                                    md:row-span-2 md:col-span-1
                                    sm:row-span-2 sm:col-span-1
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-8 md:mb-8 lg:mb-0">
                        <GroundMoistureTable/>
                    </div>
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-1
                                    md:row-span-2 md:col-span-1
                                    sm:row-span-2 sm:col-span-1
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-8 md:mb-8 lg:mb-0">
                        <AirMoistureTable/>
                    </div>
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-1
                                    md:row-span-2 md:col-span-1
                                    sm:row-span-1 sm:col-span-1
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-8 md:mb-8 lg:mb-0">
                    </div>
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-2
                                    md:row-span-2 md:col-span-2
                                    sm:row-span-2 sm:col-span-2
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-0 md:mb-0 lg:mb-0">
                    </div>
                    <div className="bg-base-300 rounded-2xl
                                    lg:row-span-2 lg:col-span-2
                                    md:row-span-2 md:col-span-2
                                    sm:row-span-2 sm:col-span-2
                                    w-full sm:w-full
                                    h-full sm:h-full min-h-12
                                    sm:mb-0 md:mb-0 lg:mb-0">
                    </div>
                </div>
            </div>
        </div>
    );
}

function TemperatureTable() {
    return (
        <div className="overflow-auto rounded-2xl">
            <table className="table table-lg table-pin-rows h-full w-full">
                <thead>
                    <tr className="text-2xl text-base-content bg-content-300">
                        <td>Name</td>
                        <td>Temperature</td>
                    </tr>
                </thead>
                <tbody>
                {drawerData.map(drawer => (
                    // <DriverInfoListItem key={index} driver={driver} index={index}/>
                    <tr className="hover text-lg text-base-content bg-content-100">
                        <td className="text-lg text-base-content">
                            {drawer.name}
                        </td>
                        <td className="text-lg text-base-content">
                            {drawer.temperature} °C
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}
function GroundMoistureTable() {
    return (
        <div className="overflow-auto rounded-2xl">
            <table className="table table-lg table-pin-rows h-full w-full">
                <thead>
                    <tr className="text-2xl text-base-content bg-content-300">
                        <td>Name</td>
                        <td>Ground Moisture Level</td>
                    </tr>
                </thead>
                <tbody>
                {drawerData.map(drawer => (
                    // <DriverInfoListItem key={index} driver={driver} index={index}/>
                    <tr className="hover text-lg text-base-content bg-content-100">
                        <td className="text-lg text-base-content">
                            {drawer.name}
                        </td>
                        <td className="text-lg text-base-content">
                            {drawer.moistureGround} %
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}
function AirMoistureTable() {
    return (
        <div className="overflow-auto rounded-2xl">
            <table className="table table-lg table-pin-rows h-full w-full">
                <thead>
                    <tr className="text-2xl text-base-content bg-content-300">
                        <td>Name</td>
                        <td>Air Moisture Level</td>
                    </tr>
                </thead>
                <tbody>
                {drawerData.map(drawer => (
                    // <DriverInfoListItem key={index} driver={driver} index={index}/>
                    <tr className="hover text-lg text-base-content bg-content-100">
                        <td className="text-lg text-base-content">
                            {drawer.name}
                        </td>
                        <td className="text-lg text-base-content">
                            {drawer.moistureAir} %
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}