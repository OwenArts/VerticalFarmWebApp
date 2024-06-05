import Drawer from "./Drawer.tsx";
import DrawerData from "./DrawerData.tsx";
import {Bounce, toast} from "react-toastify";

export default class VerticalFarm {
    public Drawers: Drawer[] = [];

    constructor(Drawers: Drawer[]) {
        this.Drawers = Drawers;
    }
    public async getAllDrawers() {
        try {
            // Step 1: Fetch all DrawerId values
            const drawerIdsResponse = await fetch('https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Kast/b6ccef9d-e27e-465a-977b-996f80f40571',
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
            const drawerIdsData = await drawerIdsResponse.json();

            // Initialize drawers
            this.Drawers = drawerIdsData.map(drawer => new Drawer(drawer.LadeId, "", "", "", false, new Date(), []));

            // Step 2: Fetch and update each drawer's details
            await Promise.all(this.Drawers.map(async drawer => {
                const drawerDetailResponse = await fetch(`https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Lade/${drawer.DrawerId}`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    });
                const drawerDetailData = await drawerDetailResponse.json();

                if (drawerDetailData.length > 0) {
                    const detail = drawerDetailData[0];
                    drawer.content = detail.TypeGewas;
                    drawer.seedingDate = new Date(detail.DatumGepland);
                }
            }));

            // Step 3: Fetch and update each drawer's data
            await Promise.all(this.Drawers.map(async drawer => {
                const drawerDataResponse = await fetch(`https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Data/${drawer.DrawerId}`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    });
                const drawerData = await drawerDataResponse.json();

                drawer.data = drawerData.map(DrawerData.fromJSON);
                drawer.data = DrawerData.sortByTimeStamp(drawer.data);
            }));

            console.log(this.Drawers);
        } catch (error) {
            console.error(error);
        }

        return this.Drawers;
    }
}