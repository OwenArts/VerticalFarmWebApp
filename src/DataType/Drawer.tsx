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
        this.drawerPosition = drawerPosition.length === 0 ? "Closed" : drawerPosition;
        this.name = name;
        this.content = content.length === 0 ? "Lettuce" : content;
        this.light = light;
        this._seedingDate = seedingDate;
        this.data = data;
    }

    // Example method using GetAge()
    public GetAge() {
        const startDate = moment(this._seedingDate);
        const endDate = moment();
        const diff = endDate.diff(startDate);
        const duration = moment.duration(diff);
        return `${duration.years() > 0 ? `${duration.years()} years ` : ''}${duration.years() > 0 || duration.months() > 0 ? `${duration.months()} months ` : ''}${duration.years() > 0 || duration.months() > 0 || duration.days() > 0 ? `${duration.days()} days ` : ''}${padZero(duration.hours())}:${padZero(duration.minutes())}:${padZero(duration.seconds())}`;
    }

    // Example method using GetMostRecentTemperature()
    public GetMostRecentTemperature() {
        if (this.data === null || this.data.length === 0) {
            return '';
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[sortedData.length - 1];

        if (mostRecentData) {
            return mostRecentData.Temperature;
        } else {
            return '';
        }
    }

    // Example method using GetMostRecentMoistureGround()
    public GetMostRecentMoistureGround() {
        if (this.data === null || this.data.length === 0) {
            return '';
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[sortedData.length - 1];

        if (mostRecentData) {
            return mostRecentData.MoistureGround;
        } else {
            return '';
        }
    }

    // Example method using GetMostRecentMoistureAir()
    public GetMostRecentMoistureAir() {
        if (this.data === null || this.data.length === 0) {
            return '';
        }

        const sortedData = DrawerData.sortByTimeStamp(this.data);
        const mostRecentData = sortedData[sortedData.length - 1];

        if (mostRecentData) {
            return mostRecentData.MoistureAir;
        } else {
            return '';
        }
    }

    set seedingDate(value: Date) {
        this._seedingDate = value;
    }
}

function padZero(number) {
    return number >= 10 ? `${number}` : `0${number}`;
}
