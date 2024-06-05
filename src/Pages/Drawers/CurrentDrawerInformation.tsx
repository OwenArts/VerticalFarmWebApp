import React from "react";
import DrawerInformationCard from "../../Components/DrawerInformationCard.tsx";
import { DrawerInfoType } from "../../Enums/DrawerInfoType.tsx";
import Drawer from "../../DataType/Drawer.tsx";

interface CurrentDrawerInformationProps {
    drawer: Drawer;
}

export default function CurrentDrawerInformation({ drawer }: CurrentDrawerInformationProps) {
    if (drawer === undefined)
        return(
            <>
            </>
            // <div className={"grid grid-cols-1 gap-8 grid-rows-8"}>
            //     <div className={"skeleton w-full h-full"}/>
            // </div>
        );
    console.log(drawer)
    return (
        <div>
            <div className={"grid grid-cols-1 gap-8 grid-rows-8"}>
                <CurrentInformation drawer={drawer} />
            </div>
        </div>
    );
}

function CurrentInformation({ drawer }: CurrentDrawerInformationProps) {
    return (
        <div className="carousel carousel-center bg-base-100 p-4 space-x-4 rounded-box w-full">
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Name} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Content} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.SeedingDate} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Temperature} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.MoistureGround} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.MoistureAir} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Position} />
            </div>
            <div className="carousel-item">
                <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Light} />
            </div>
        </div>
    );
}
