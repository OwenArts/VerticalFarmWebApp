import VerticalFarm from "../DataType/VerticalFarm.tsx";
import DrawerData from "../DataType/DrawerData.tsx";
import {data} from "autoprefixer";

class FarmDataManager {
    get verticalFarm(): VerticalFarm {
        return this._verticalFarm;
    }

    set verticalFarm(value: VerticalFarm) {
        this._verticalFarm = value;
    }

    // @ts-ignore
    static #instance = null;

    // @ts-ignore
    private _verticalFarm: VerticalFarm = new VerticalFarm([]);

    constructor() {
        if (FarmDataManager.#instance) {
            throw new Error("Use ApiManager.getInstance() to get the singleton instance.");
        }
    }

    // Static method to get the singleton instance
    static getInstance() {
        if (!FarmDataManager.#instance) {
            FarmDataManager.#instance = new FarmDataManager();
        }
        return FarmDataManager.#instance;
    }


    public getAllDrawers() {
        fetch('https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Data/14006743-A52E-4811-9E36-4728B8D95DAE')
            .then(response => response.json())
            .then(data => {
                const drawerDataArray = data.map(DrawerData.fromJSON);
                const sortedDrawerDataArray = DrawerData.sortByTimeStamp(drawerDataArray);
            })
            .catch(error => console.error(error));



        return this._verticalFarm.Drawers;
    }

    public getAllHistoricDataFromDrawer(){

    }
}

export default FarmDataManager.getInstance();
