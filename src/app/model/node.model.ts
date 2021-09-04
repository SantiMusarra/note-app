export class Note {

    noteTitle: string;
    noteContent: string;
    noteDate: string;
    noteId: number;


    constructor(noteTitle: string , noteContent: string , noteDate: string, noteId: number){
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.noteDate = noteDate;
        this.noteId = noteId;
    }
}