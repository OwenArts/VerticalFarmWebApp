import DrawerData from "./DrawerData.tsx";
import moment from "moment";

export default class Drawer {
    public DrawerId: string;
    public drawerPosition: string;
    public name: string;
    public content: string;
    public light: boolean;
    public data: DrawerData[];
    private _seedingDate: Date;


    constructor(
        drawerId: string,
        drawerPosition: string,
        name: string,
        content: string,
        light: boolean,
        seedingDate: Date,
        data: DrawerData[] = []
    ) {
        this.DrawerId = drawerId;
        this.drawerPosition = drawerPosition.length===0? "Closed" : drawerPosition;
        this.name = name.length===0? "Drawer" : name;
        this.content = content.length===0? "Lettuce" : name;
        this.light = light;
        this._seedingDate = seedingDate;
        this.data = data;
    }

    public GetAge() {
        const startDate = moment(this._seedingDate); // Current time
        const endDate = moment(); // Count down end date
        const diff = endDate.diff(startDate); // Difference in milliseconds
        const duration = moment.duration(diff); // Convert difference to duration object
        return `${duration.years()} years ${duration.months()} months ${duration.days()} days ${padZero(duration.hours())}:${padZero(duration.minutes())}:${padZero(duration.seconds())}`;
    }public GetMostRecentTemperature() {
        if (this.data === null || this.data.length === 0) {
            return ''; // Or handle it according to your logic
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[0];

        if (mostRecentData) {
            return mostRecentData.Temperature;
        } else {
            return ''; // Or handle it according to your logic
        }
    }

    public GetMostRecentMoistureGround() {
        if (this.data === null || this.data.length === 0) {
            return ''; // Or handle it according to your logic
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[0];

        if (mostRecentData) {
            return mostRecentData.MoistureGround;
        } else {
            return ''; // Or handle it according to your logic
        }
    }

    public GetMostRecentMoistureAir() {
        if (this.data === null || this.data.length === 0) {
            return ''; // Or handle it according to your logic
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[0];

        if (mostRecentData) {
            return mostRecentData.MoistureAir;
        } else {
            return ''; // Or handle it according to your logic
        }
    }



    set seedingDate(value: Date) {
        this._seedingDate = value;
    }
}

function padZero(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}