import { EventEmitter, Injectable } from "@angular/core";
import { Note } from "../model/node.model";

@Injectable({providedIn: 'root'})
export class NotesManager{

    noteList: Note[] = []; //main notes list
    
    
    isInEditMode: boolean = false; 

    editMode = new EventEmitter<Note>(); //Event for passing a note to the subscriber

    addNote(note: Note){

        this.noteList.push(note);
    }

    deleteNote(note: Note){

        this.noteList.splice(note.noteId,1);
    }

    editNote(note: Note){

        this.noteList[note.noteId].noteContent = note.noteContent;
        this.noteList[note.noteId].noteTitle = note.noteTitle;
        this.isInEditMode = false;
    }

}