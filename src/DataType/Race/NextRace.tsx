import Race from "./Race.tsx";

export default class NextRace extends Race {
    constructor(
        season = "",
        round = "",
        circuitName = "",
        raceName = "",
        country = "",
        raceStart = new Date()
    ) {
        super(season, round, circuitName, raceName, country, raceStart);
    }
}
