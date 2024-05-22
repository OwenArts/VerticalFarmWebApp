export default class Drawer {
    public drawerPosition: string;
    public temperature: number;
    public moistureGround: number;
    public moistureAir: number;
    public name: string;
    public content: string;


    constructor(drawerPosition: string, temperature: number, moistureGround: number, moistureAir: number, name: string, content: string) {
        this.drawerPosition = drawerPosition;
        this.temperature = temperature;
        this.moistureGround = moistureGround;
        this.moistureAir = moistureAir;
        this.name = name;
        this.content = content;
    }
}