import Driver from "./Driver.tsx";

export default class DriverInfo extends Driver {
    points: string;
    position: string;
    code: string;
    dob: Date;
    nationality: string
    url: string;
    wins: string;

    constructor(driverId, FirstName, SecondName, RacingNumber = null, Team, points = null, position = null, code = null, dob = null, nationality = null, url = null, wins = null) {
        super(driverId, FirstName, SecondName, RacingNumber, Team);
        this.points = points;
        this.position = position;
        this.code = code;
        this.dob = dob;
        this.nationality = nationality;
        this.url = url;
        this.wins = wins;
    }
}
