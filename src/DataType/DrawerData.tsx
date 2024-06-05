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
}