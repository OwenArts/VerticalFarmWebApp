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
    if (drawer === undefined)
        return (
            <></>
        );

    console.log(drawer);

    return (
        <div className="flex flex-col gap-4 h-screen overflow-auto">
            <div className="flex-grow">
                <CurrentInformation drawer={drawer} />
            </div>
            <div className="flex-grow bg-base-100 p-4 space-x-4 rounded-box w-full overflow-auto">
                <section>Temperatuur</section>
                <DrawerChartAirTemperature data={drawer.data} />
            </div>
            <div className="flex-grow bg-base-100 p-4 space-x-4 rounded-box w-full overflow-auto">
                <section>Grond vochtigheid</section>
                <DrawerChartGroundMoisture data={drawer.data} />
            </div>
            <div className="flex-grow bg-base-100 p-4 space-x-4 rounded-box w-full overflow-auto">
                <section>Lucht vochtigheid</section>
                <DrawerChartAirMoisture data={drawer.data} />
            </div>
        </div>
    );
}


function CurrentInformation({drawer}: CurrentDrawerInformationProps) {
    return (
        <div className="carousel carousel-center bg-base-100 p-4 space-x-4 rounded-box w-full">
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Name}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Content}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.SeedingDate}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Temperature}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.MoistureGround}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.MoistureAir}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Position}/>
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Light}/>
            </div>
        </div>
    );
}

function DrawerChartAirTemperature({data}) {
    if (data.length === 0)
        return (<div className="skeleton w-full h-full"></div>);

    console.log(data);

    const formatXAxis = (tickItem) => {
        return moment(tickItem).format("DD-MM-YYYY HH:mm:ss");
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp" tickFormatter={formatXAxis} tick={{ fill: '#DAD7CD' }}/>
                <YAxis tick={{ fill: '#DAD7CD' }}/>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}/>
                <Legend/>
                <Line type="monotone" dataKey="Temperature" stroke="#ffc658" dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

function DrawerChartAirMoisture({data}) {
    if (data.length === 0)
        return (<div className="skeleton w-full h-full"></div>);

    console.log(data);

    const formatXAxis = (tickItem) => {
        return moment(tickItem).format("DD-MM-YYYY HH:mm:ss");
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp" tickFormatter={formatXAxis} tick={{ fill: '#DAD7CD' }}/>
                <YAxis tick={{ fill: '#DAD7CD' }}/>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}/>
                <Legend/>
                <Line type="monotone" dataKey="MoistureAir" stroke="#ffc658" dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

function DrawerChartGroundMoisture({data}) {
    if (data.length === 0)
        return (<div className="skeleton w-full h-full"></div>);

    console.log(data);

    const formatXAxis = (tickItem) => {
        return moment(tickItem).format("DD-MM-YYYY HH:mm:ss");
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={DrawerData.sortByTimeStamp(data)}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="TimeStamp" tickFormatter={formatXAxis} tick={{ fill: '#DAD7CD' }}/>
                <YAxis tick={{ fill: '#DAD7CD' }}/>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}/>
                <Legend/>
                <Line type="monotone" dataKey="MoistureGround" stroke="#ffc658" dot={false}/>
            </LineChart>
        </ResponsiveContainer>
    );
}
