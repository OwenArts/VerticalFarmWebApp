import Drawer from "../../DataType/Drawer.tsx";
import { useEffect, useState } from "react";
import DrawerNote from "../../DataType/DrawerNote.tsx";
import VerticalFarm from "../../DataType/VerticalFarm.tsx";

interface CurrentDrawerInformationProps {
    drawer: Drawer;
}

export default function CurrentDrawerNotes({ drawer }: CurrentDrawerInformationProps) {
    const [drawerNotes, setDrawerNotes] = useState<DrawerNote[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (drawer && drawer.DrawerId) {
                try {
                    const fetchedNotesData = await fetchedNotes(drawer.DrawerId);
                    setDrawerNotes(fetchedNotesData);
                } catch (error) {
                    console.error("Error fetching drawer notes:", error);
                }
            }
        }

        fetchData();
    }, [drawer]); // Dependency on drawer ensures useEffect runs when drawer changes

    return (
        <div className={"h-fit"}>
            {drawerNotes.map(note => (
                <div key={note.NoteId}>
                    <p>{note.NoteContent}</p>
                </div>
            ))}
        </div>
    );
}

async function fetchedNotes(drawerId: string): Promise<DrawerNote[]> {
    console.log(`https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Notities/${drawerId}`);
    const notesResponse = await fetch(`https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Notities/${drawerId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    if (!notesResponse.ok) {
        throw new Error("Failed to fetch drawer notes");
    }

    const notesData = await notesResponse.json();

    console.log("Fetched notes:" + notesData)

    // Map JSON data to DrawerNote objects
    const drawerNotes: DrawerNote[] = notesData.map((note: any) => new DrawerNote(
        note.NotitieId,
        note.LadeId,
        note.Notitie
    ));

    return drawerNotes;
}
