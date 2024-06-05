import NavBar from "../../Components/NavBar.tsx";
import DrawerInformationCard from "../../Components/DrawerInformationCard.tsx";
import {DrawerInfoType} from "../../Enums/DrawerInfoType.tsx";
import Drawer from "../../DataType/Drawer.tsx";

const drawer = new Drawer("Closed", 22.5, 30, 40, "Drawer 1", "Lettuce", true, new Date("2014-09-05T17:57:28.556094Z"));

export default function DrawersPage() {
    return (<div className="w-screen h-screen bg-leaves-background bg-no-repeat bg-fixed bg-cover flex flex-col">
            <NavBar/>
            <div className="carousel carousel-center bg-base-300 max-w-md m-8 p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Position}/>
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
                    <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Name}/>
                </div>
                <div className="carousel-item">
                    <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Content}/>
                </div>
                <div className="carousel-item">
                    <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.Light}/>
                </div>
                <div className="carousel-item">
                    <DrawerInformationCard drawer={drawer} infoType={DrawerInfoType.SeedingDate}/>
                </div>
            </div>
        </div>
    );
}