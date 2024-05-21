export default abstract class  Race {
    season: string;
    round: string;
    circuitName: string;
    raceName: string;
    country: string;
    raceStart: Date;

    //const [season, round, circuitName, raceName, country, raceStart]
    constructor(season, round, circuitName, raceName, country, raceStart) {
        this.season = season;
        this.round = round;
        this.circuitName = circuitName;
        this.raceName = raceName;
        this.country = country;
        this.raceStart = raceStart;
    }
}