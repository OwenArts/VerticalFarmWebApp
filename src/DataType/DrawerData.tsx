export default class DrawerData {
    public DataId: string;
    public DrawerId: string;
    public Temperature: number;
    public MoistureAir: number;
    public MoistureGround: number;
    public TimeStamp: Date;


    constructor(DataId: string, DrawerId: string, Temperature: number, MoistureAir: number, MoistureGround: number, TimeStamp: Date) {
        this.DataId = DataId;
        this.DrawerId = DrawerId;
        this.Temperature = Temperature;
        this.MoistureAir = MoistureAir;
        this.MoistureGround = MoistureGround;
        this.TimeStamp = TimeStamp;
    }

    // Static method to create an instance from a JSON object
    static fromJSON(json: any): DrawerData {
        return new DrawerData(
            json.DataHistorieId,
            json.LadeId,
            json.Temperatuur,
            json.Luchtvochtigheid,
            json.Bodemvochtigheid,
            new Date(json.TimeStamp)
        );
    }

    // Static method to sort an array of DrawerData by TimeStamp
    static sortByTimeStamp(dataArray: DrawerData[]): DrawerData[] {
        return dataArray.sort((a, b) => a.TimeStamp.getTime() - b.TimeStamp.getTime());
    }
}