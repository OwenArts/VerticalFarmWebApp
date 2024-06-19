import Drawer from "./Drawer.tsx";
import DrawerData from "./DrawerData.tsx";

export default class VerticalFarm {
    public Drawers: Drawer[] = [];

    constructor() {
        // No need to pass Drawers array in constructor
    }

    public async getAllDrawers() {
        const baseURL = "https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/";

        try {
            // Step 1: Fetch all DrawerId values
            const drawerIdsResponse = await fetch(`${baseURL}Prod/Kast/b6ccef9d-e27e-465a-977b-996f80f40571`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const drawerIdsData = await drawerIdsResponse.json();

            // Initialize drawers
            this.Drawers = await Promise.all(drawerIdsData.map(async (drawer, index) => {
                const newDrawer = await this.createDrawer(drawer, index + 1);
                return newDrawer;
            }));
        } catch (error) {
            console.error("Error in getAllDrawers:", error);
            throw error; // Re-throw the error to propagate it to the calling component
        }

        return this.Drawers;
    }

    private async createDrawer(drawer: any, counter: number): Promise<Drawer> {
        const baseURL = "https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/";

        try {
            // Fetch drawer details
            const drawerDetailResponse = await fetch(`${baseURL}Prod/Lade/${drawer.LadeId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const drawerDetailData = await drawerDetailResponse.json();

            // Fetch drawer data
            const drawerDataResponse = await fetch(`${baseURL}Prod/Data/${drawer.LadeId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const drawerData = await drawerDataResponse.json();

            // Create new Drawer instance
            const newDrawer = new Drawer(
                drawer.LadeId,
                "",
                `Drawer ${counter}`,
                drawerDetailData.length > 0 ? drawerDetailData[0].TypeGewas : "",
                false,
                drawerDetailData.length > 0 ? new Date(drawerDetailData[0].DatumGepland) : new Date(),
                drawerData.map(DrawerData.fromJSON)
            );

            return newDrawer;
        } catch (error) {
            console.error("Error creating drawer:", error);
            throw error;
        }
    }
}
