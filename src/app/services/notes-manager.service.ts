import { EventEmitter, Injectable } from "@angular/core";
import { Note } from "../model/node.model";

@Injectable({providedIn: 'root'})
export class NotesManager{

    noteList: Note[] = []; //main notes list
    
    noteToEdit: Note = new Note( '' , '' , '' , 0); //refence for the note that has to be edited

    index: number = 0; // Unique and progressive id given to a newly created note

    isInEditMode: boolean = false; 

    addNote(note: Note){
        note.noteId = this.index;
        this.index++; //Setting an index to the new note
        this.noteList.push(note);
    }

    deleteNote(note: Note){

        let indexToDelete: number = 0 ;
        for (let i = 0; i < this.noteList.length; i++) {
            
            if(note.noteId === this.noteList[i].noteId) indexToDelete = i;
            
        }

        this.noteList.splice(indexToDelete,1);

    }

    editNote(note: Note){

        this.noteList[note.noteId].noteContent = note.noteContent;
        this.noteList[note.noteId].noteTitle = note.noteTitle;
        this.isInEditMode = false;
        
    }

}