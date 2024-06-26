import React, {useEffect, useState} from 'react';
import Drawer from "../DataType/Drawer.tsx";
import {DrawerInfoType} from "../Enums/DrawerInfoType.tsx";

interface DrawerInformationCardProps {
    drawer: Drawer;
    infoType: DrawerInfoType;
}

const getDrawerInfoValue = (drawer: Drawer, infoType: DrawerInfoType): string => {
    switch (infoType) {
        case DrawerInfoType.Position:
            return drawer.drawerPosition;
        case DrawerInfoType.Temperature:
            return (drawer.GetMostRecentTemperature() + ' °C');
        case DrawerInfoType.MoistureGround:
            return (drawer.GetMostRecentMoistureGround() + '%');
        case DrawerInfoType.MoistureAir:
            return (drawer.GetMostRecentMoistureAir() + '%');
        case DrawerInfoType.Name:
            return drawer.name;
        case DrawerInfoType.Content:
            return drawer.content;
        case DrawerInfoType.Light:
            return drawer.light ? 'On' : 'Off';
        case DrawerInfoType.SeedingDate:
            return drawer.GetAge();
        default:
            return '';
    }
};

const getDrawerImagePath = (drawer: Drawer, infoType: DrawerInfoType): string => {
    switch (infoType) {
        case DrawerInfoType.Position:
            return 'https://t4.ftcdn.net/jpg/07/68/77/31/240_F_768773159_ux6pGaHBhi4ChUDisS9YKsP4NicPiDqr.jpg';
        case DrawerInfoType.Temperature:
            return 'https://t4.ftcdn.net/jpg/02/36/11/17/240_F_236111757_AvYJghAJi8kOAfi03CrjCHa0jUHW5NJ6.jpg';
        case DrawerInfoType.MoistureGround:
            return 'https://t3.ftcdn.net/jpg/07/26/39/20/240_F_726392022_Jkhr60sgDobRtPUtoY7EDBE0xCUeqEKO.jpg';
        case DrawerInfoType.MoistureAir:
            return 'https://t4.ftcdn.net/jpg/06/77/70/85/240_F_677708526_FTMphT0nfs1Xwk6byhJWPSkifcJSFM2U.jpg';
        case DrawerInfoType.Name:
            return 'https://t4.ftcdn.net/jpg/07/35/44/67/240_F_735446730_6Vb6NLLtddgwEcoasOWg5cy6eLYiK579.jpg';
        case DrawerInfoType.Content:
            return 'https://t4.ftcdn.net/jpg/07/35/19/51/240_F_735195117_xS9uv30uBRmR3VtQoAUCOrC40AAqBMGj.jpg';
        case DrawerInfoType.Light:
            return 'https://t4.ftcdn.net/jpg/07/52/26/63/240_F_752266384_KFQxwL20ZWPphTbq6dWYSvbQqJGaU8KX.jpg';
        case DrawerInfoType.SeedingDate:
            return 'https://t3.ftcdn.net/jpg/02/77/41/26/240_F_277412640_WVE1FmtHzgIiVCMTrTkvZC13dNzLD04Z.jpg';
        default:
            return '';
    }
};

export default function DrawerInformationCard({ drawer, infoType }: DrawerInformationCardProps) {
    const [valueToDisplay, setValueToDisplay] = useState(getDrawerInfoValue(drawer, infoType));
    const imagePath = getDrawerImagePath(drawer, infoType);

    useEffect(() => {
        if (infoType === DrawerInfoType.SeedingDate) {
            const interval = setInterval(() => {
                setValueToDisplay(getDrawerInfoValue(drawer, infoType));
            }, 1000);

            return () => clearInterval(interval); // Cleanup interval on component unmount or infoType change
        } else {
            setValueToDisplay(getDrawerInfoValue(drawer, infoType));
        }
    }, [drawer, infoType]);


    return (
        <div className="card card-compact w-64 bg-secondary text-base-300 shadow-xl">
            <figure>
                <img src={imagePath} alt="image"
                     className="aspect-video object-cover object-center"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{infoType}</h2>
                <p>{valueToDisplay}</p>
            </div>
        </div>
    );
}