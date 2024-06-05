import moment from "moment/moment";

export default class Drawer {
    public drawerPosition: string;
    public temperature: number;
    public moistureGround: number;
    public moistureAir: number;
    public name: string;
    public content: string;
    public light: boolean;
    private seedingDate: Date;

    constructor(drawerPosition: string, temperature: number, moistureGround: number, moistureAir: number, name: string, content: string, light: boolean, seedingDate: Date) {
        this.drawerPosition = drawerPosition;
        this.temperature = temperature;
        this.moistureGround = moistureGround;
        this.moistureAir = moistureAir;
        this.name = name;
        this.content = content;
        this.light = light;
        this.seedingDate = seedingDate;
    }

    public GetAge() {
        const startDate = moment(this.seedingDate); // Current time
        const endDate = moment(); // Count down end date
        const diff = endDate.diff(startDate); // Difference in milliseconds
        const duration = moment.duration(diff); // Convert difference to duration object
        return `${duration.years()} years ${duration.months()} months ${duration.days()} days ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;
    }
}