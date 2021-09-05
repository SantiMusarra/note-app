import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../model/node.model';
import { NotesManager } from '../services/notes-manager.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  
  noteToAdd: Note = new Note( '' , '' , '' , 0); //Initializing a note for the ngModel to reference it

  isEditingMode!: boolean; //local reference of the main editingMode in the notes-manager service

  index: number = 0; // Unique and progressive id given to a newly created note

  @Output() backToList = new EventEmitter<boolean>();  //Event for managing the transition betwen the note creation/editing transition
  
  
  constructor(private noteManager: NotesManager  ) { 
    this.noteManager.editMode.subscribe((value: Note) => this.noteToAdd = value );
    this.isEditingMode = this.noteManager.isInEditMode;
    
  }

  ngOnInit(): void {

    
  }

  onEditNote(note: Note){
    this.noteToAdd = note; 
    console.log(this.noteToAdd);

  }

  onButtonClicked(btnFunction : string){

    switch (btnFunction) {
      case 'back':
        this.backToList.emit(true);     //Emit the event for going back to the list UI
        if(this.isEditingMode) this.noteManager.isInEditMode = false;
        break;

      case 'delete':
        this.noteManager.deleteNote(this.noteToAdd);
        this.backToList.emit(true);     //Emit the event for going back to the list UI
        this.noteManager.isInEditMode = false;
        break;

      case 'done':
          if(this.isEditingMode){
            this.noteManager.editNote(this.noteToAdd);
            this.backToList.emit(true); //Emit the event for going back to the list UI
          } 
          else{
            this.onAddNote(); 
          } 
        break;
    }
  }

  onAddNote(){
    
    if(this.noteToAdd.noteTitle === '') alert('You must add a title to the note');
    else{
      this.noteToAdd.noteId = this.index; //Setting an index to the new note
      this.noteToAdd.noteDate = new Date().toString(); //Setting a Date to the new note
      this.noteManager.addNote(this.noteToAdd); //Adding the new note to the main list in the notes-manager service
      this.index++;
      this.backToList.emit(true); //Emit the event for going back to the list UI
    } 
  }
}
