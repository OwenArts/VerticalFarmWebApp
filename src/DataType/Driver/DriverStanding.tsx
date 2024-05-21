import Driver from "./Driver.tsx";

export default class DriverStanding extends Driver  {
    points: string;
    position: string;

    constructor(driverId, FirstName, SecondName, RacingNumber, Team, points, position) {
        super(driverId, FirstName, SecondName, RacingNumber, Team);
        this.points = points;
        this.position = position;
    }
}
