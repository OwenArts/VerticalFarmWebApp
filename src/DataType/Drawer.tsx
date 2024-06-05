import moment from "moment/moment";
import DrawerData from "./DrawerData.tsx";

export default class Drawer {
    public DrawerId: string;
    public drawerPosition: string;
    public name: string;
    public content: string;
    public light: boolean;
    public data: DrawerData[];
    private seedingDate: Date;


    constructor(drawerId: string, drawerPosition: string, name: string, content: string, light: boolean, seedingDate: Date, data: DrawerData[]) {
        this.DrawerId = drawerId;
        this.drawerPosition = drawerPosition;
        this.name = name;
        this.content = content;
        this.light = light;
        this.seedingDate = seedingDate;
        this.data = data;
    }

    public GetAge() {
        const startDate = moment(this.seedingDate); // Current time
        const endDate = moment(); // Count down end date
        const diff = endDate.diff(startDate); // Difference in milliseconds
        const duration = moment.duration(diff); // Convert difference to duration object
        return `${duration.years()} years ${duration.months()} months ${duration.days()} days ${padZero(duration.hours())}:${padZero(duration.minutes())}:${padZero(duration.seconds())}`;
    }

    public GetMostRecentTemperature() {

    }

    public GetMostRecentMoistureGround() {

    }

    public GetMostRecentMoistureAir() {

    }


}

function padZero(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}