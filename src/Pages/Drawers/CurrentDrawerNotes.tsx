import Drawer from "../../DataType/Drawer.tsx";
import {useEffect, useState} from "react";
import DrawerNote from "../../DataType/DrawerNote.tsx";
import VerticalFarm from "../../DataType/VerticalFarm.tsx";

interface CurrentDrawerInformationProps {
    drawer: Drawer;
}

export default function CurrentDrawerNotes({drawer}: CurrentDrawerInformationProps) {
    const [drawerNotes, setDrawerNotes] = useState<DrawerNote[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            if (drawer && drawer.DrawerId) {
                setLoading(true);
                try {
                    const fetchedNotesData = await fetchedNotes(drawer.DrawerId);
                    setDrawerNotes(fetchedNotesData);
                } catch (error) {
                    console.error("Error fetching drawer notes:", error);
                    // Handle error state here
                } finally {
                    setLoading(false);
                }
            }
        }

        fetchData();
    }, [drawer]);

    return (
        <div className={"h-fit p-4"}>
            {loading && (
                <div>
                    <p>Loading notes...</p>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            {!loading && drawerNotes.length === 0 && (
                <p>No notes available for this drawer.</p>
            )}
            {drawerNotes.map(note => (
                <div key={note.NoteId}
                     className="bg-secondary rounded-lg my-4 p-2 flex items-center text-base-300 font-black text-2xl truncate">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="icon icon-tabler icon-tabler-notes stroke-base-300 fill-none" width="44" height="44"
                         viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/>
                        <path d="M9 7l6 0"/>
                        <path d="M9 11l6 0"/>
                        <path d="M9 15l4 0"/>
                    </svg>
                    <p className="ml-2 flex-grow">
                        {note.NoteContent}
                    </p>
                </div>
            ))}
        </div>
    );
}


async function fetchedNotes(drawerId: string): Promise<DrawerNote[]> {
    const notesResponse = await fetch(`https://y0zitbyvv6.execute-api.eu-central-1.amazonaws.com/Prod/Notities/${drawerId}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    if (!notesResponse.ok) {
        throw new Error("Failed to fetch drawer notes");
    }

    const notesData = await notesResponse.json();

    // Map JSON data to DrawerNote objects
    const drawerNotes: DrawerNote[] = notesData.map((note: any) => new DrawerNote(
        note.NotitieId,
        note.LadeId,
        note.Notitie
    ));

    return drawerNotes;
}
