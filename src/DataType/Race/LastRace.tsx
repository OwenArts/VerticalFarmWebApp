import DriverResult from "../Driver/DriverResult.tsx";
import Race from "./Race.tsx";

export default class LastRace extends Race {
    circuitId: string;
    drivers: DriverResult[];

    constructor(
        season: string = "",
        round: string = "",
        circuitName: string = "",
        raceName: string = "",
        country: string = "",
        raceStart: Date = new Date(),
        circuitId: string = "",
        drivers: DriverResult[] = [] // Specify type as array of DriverResult
    ) {
        super(season, round, circuitName, raceName, country, raceStart);
        this.circuitId = circuitId;
        this.drivers = drivers;
    }
}
