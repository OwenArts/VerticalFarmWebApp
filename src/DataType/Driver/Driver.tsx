import Team from "../Constructor/Constructor.tsx";

export default abstract class  Driver {
    driverId: string;
    FirstName: string;
    SecondName: string;
    RacingNumber: string;
    Team: Team;

    constructor(driverId, FirstName, SecondName, RacingNumber, Team) {
        this.driverId = driverId;
        this.FirstName = FirstName;
        this.SecondName = SecondName;
        this.RacingNumber = RacingNumber;
        this.Team = Team;
    }
}