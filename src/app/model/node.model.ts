export class Note {

    noteTitle: string;
    noteContent: string;
    noteDate: string;



    constructor(noteTitle: string , noteContent: string , noteDate: string){
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.noteDate = noteDate;
    }
}