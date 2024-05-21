import tailwindConfig from '../../../tailwind.config.js'
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig)

export default class Team {
    constructorId : string;
    teamName : string;
    nationality : string;
    teamColor : string;
    points : string;
    position : string;
    wins : string;
    url : string;

    constructor(constructorId, teamName, nationality = '', points = '0', position= '0',  wins = '0', url= '0', ) {
        this.constructorId = constructorId;
        this.teamName = teamName;
        this.nationality = nationality;
        this.teamColor = this.SetTeamColor(constructorId);
        this.points = points;
        this.position = position;
        this.wins = wins;
        this.url = url
    }

    private SetTeamColor(teamId) {
        if (teamId.includes("red_bull"))            return `${fullConfig.theme.colors["Red-Bull"]}`;
        else if(teamId.includes("rb"))              return `${fullConfig.theme.colors["Racing-Bulls"]}`;
        else if(teamId.includes("mclaren"))         return `${fullConfig.theme.colors["McLaren"]}`;
        else if(teamId.includes("mercedes"))        return `${fullConfig.theme.colors["Mercedes"]}`;
        else if(teamId.includes("sauber"))          return `${fullConfig.theme.colors["Sauber"]}`;
        else if(teamId.includes("williams"))        return `${fullConfig.theme.colors["Williams"]}`;
        else if(teamId.includes("ferrari"))         return `${fullConfig.theme.colors["Ferrari"]}`;
        else if(teamId.includes("alpine"))          return `${fullConfig.theme.colors["Alpine"]}`;
        else if(teamId.includes("haas"))            return `${fullConfig.theme.colors["Haas"]}`;
        else if(teamId.includes("aston_martin"))    return `${fullConfig.theme.colors["Aston-Martin"]}`;
    }
}