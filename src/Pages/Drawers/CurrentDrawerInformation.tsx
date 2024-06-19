import moment from 'moment';
import React from "react";
import DrawerInformationCard from "../../Components/DrawerInformationCard.tsx";
import {DrawerInfoType} from "../../Enums/DrawerInfoType.tsx";
import Drawer from "../../DataType/Drawer.tsx";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import DrawerData from "../../DataType/DrawerData.tsx";

interface CurrentDrawerInformationProps {
    drawer: Drawer;
}

export default function CurrentDrawerInformation({drawer}: CurrentDrawerInformationProps) {
    if (!drawer) return null;

    return (
        <div className="flex flex-col gap-4 h-screen overflow-auto">
            <div className="flex-grow">
                <CurrentInformation drawer={drawer}/>
            </div>
            <DrawerChart title="Temperatuur" dataKey="Temperature" data={drawer.data}/>
            <DrawerChart title="Grond vochtigheid" dataKey="MoistureGround" data={drawer.data}/>
            <DrawerChart title="Lucht vochtigheid" dataKey="MoistureAir" data={drawer.data}/>
        </div>
    );
}

function CurrentInformation({drawer}: CurrentDrawerInformationProps) {
    return (
        <div className="carousel carousel-center bg-base-100 p-4 space-x-4 rounded-box w-full">
            {Object.values(DrawerInfoType).map((infoType) => (
                <div key={infoType} className="carousel-item">
                    <DrawerInformationCard drawer={drawer} infoType={infoType}/>
                </div>
            ))}
        </div>
    );
}

interface DrawerChartProps {
    title: string;
    dataKey: string;
    data: DrawerData[];
}

function DrawerChart({title, dataKey, data}: DrawerChartProps) {
    if (data.length === 0) return <div className="skeleton w-full h-full"></div>;

    const formatXAxis = (tickItem) => moment(tickItem).format("DD-MM-YYYY HH:mm:ss");

    return (
        <div className="flex-grow bg-base-100 p-4 space-x-4 rounded-box w-full overflow-hidden">
            <section className="mb-4 font-black text-lg text-base-content">{title}</section>
            <div style={{width: '100%', height: '100%'}}>
                <ResponsiveContainer width="90%" height="100%">
                    <LineChart data={DrawerData.sortByTimeStamp(data)}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="TimeStamp" tickFormatter={formatXAxis} tick={{fill: '#DAD7CD'}}/>
                        <YAxis tick={{fill: '#DAD7CD'}}/>
                        <Tooltip contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.6)'}}/>
                        <Legend/>
                        <Line type="monotone" dataKey={dataKey} stroke="#FF5B00" dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}