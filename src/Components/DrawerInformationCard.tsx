import React, {useEffect, useState} from 'react';
import Drawer from "../DataType/Drawer.tsx";
import {DrawerInfoType} from "../Enums/DrawerInfoType.tsx";

type DrawerInformationCardProps = {
    drawer: Drawer;
    infoType: DrawerInfoType;
};

const getDrawerInfoValue = (drawer: Drawer, infoType: DrawerInfoType): string => {
    switch (infoType) {
        case DrawerInfoType.Position:
            return drawer.drawerPosition;
        case DrawerInfoType.Temperature:
            return drawer.temperature.toString();
        case DrawerInfoType.MoistureGround:
            return drawer.moistureGround.toString();
        case DrawerInfoType.MoistureAir:
            return drawer.moistureAir.toString();
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
            return 'https://t4.ftcdn.net/jpg/07/52/26/63/240_F_752266384_KFQxwL20ZWPphTbq6dWYSvbQqJGaU8KX.jpg'; //todo: find image
        case DrawerInfoType.Content:
            return 'https://t4.ftcdn.net/jpg/07/52/26/63/240_F_752266384_KFQxwL20ZWPphTbq6dWYSvbQqJGaU8KX.jpg'; //todo: find image
        case DrawerInfoType.Light:
            return 'https://t4.ftcdn.net/jpg/07/52/26/63/240_F_752266384_KFQxwL20ZWPphTbq6dWYSvbQqJGaU8KX.jpg';
        case DrawerInfoType.SeedingDate:
            return 'https://t3.ftcdn.net/jpg/02/77/41/26/240_F_277412640_WVE1FmtHzgIiVCMTrTkvZC13dNzLD04Z.jpg';
        default:
            return '';
    }
};

//https://t4.ftcdn.net/jpg/07/52/26/63/240_F_752266384_KFQxwL20ZWPphTbq6dWYSvbQqJGaU8KX.jpg - lightbulb
//https://t4.ftcdn.net/jpg/07/68/77/31/240_F_768773159_ux6pGaHBhi4ChUDisS9YKsP4NicPiDqr.jpg - mechanical wheel
//https://t4.ftcdn.net/jpg/06/77/70/85/240_F_677708526_FTMphT0nfs1Xwk6byhJWPSkifcJSFM2U.jpg - Wet plant
//https://t3.ftcdn.net/jpg/07/26/39/20/240_F_726392022_Jkhr60sgDobRtPUtoY7EDBE0xCUeqEKO.jpg - Wet soil
//https://t4.ftcdn.net/jpg/02/36/11/17/240_F_236111757_AvYJghAJi8kOAfi03CrjCHa0jUHW5NJ6.jpg - Temperature
//https://t3.ftcdn.net/jpg/02/77/41/26/240_F_277412640_WVE1FmtHzgIiVCMTrTkvZC13dNzLD04Z.jpg - age

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
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
            <figure>
                <img src={imagePath} alt="image"
                     className="aspect-video object-cover object-center"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{infoType}</h2>
                <p>{valueToDisplay}</p>
                {/*<div className="card-actions">*/}
                {/*    <button className="btn btn-primary">Buy Now</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}