import Driver from "./Driver.tsx";

export default class DriverResult extends Driver  {
    hasFastestLap: boolean;
    time: string;

    constructor(driverId, FirstName, SecondName, RacingNumber, Team, fastestLap, time) {
        super(driverId, FirstName, SecondName, RacingNumber, Team);
        this.hasFastestLap = fastestLap;
        this.time = time;
    }
}
