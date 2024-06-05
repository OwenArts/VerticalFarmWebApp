export default class DrawerNote{
    private _NoteId: string;
    private _DrawerId: string;
    private _NoteContent: string;


    constructor(NoteId: string, DrawerId: string, NoteContent: string) {
        this._NoteId = NoteId;
        this._DrawerId = DrawerId;
        this._NoteContent = NoteContent;
    }


    get NoteId(): string {
        return this._NoteId;
    }

    set NoteId(value: string) {
        this._NoteId = value;
    }

    get DrawerId(): string {
        return this._DrawerId;
    }

    set DrawerId(value: string) {
        this._DrawerId = value;
    }

    get NoteContent(): string {
        return this._NoteContent;
    }

    set NoteContent(value: string) {
        this._NoteContent = value;
    }
}