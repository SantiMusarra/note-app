import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../model/node.model';
import { NotesManager } from '../services/notes-manager.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  noteToAdd: Note = new Note('', '' , '', 0);

  isEditingNote!: boolean; //

  index: number = 0; //La creazione delle note avviane con un id unico progressivo

  @Output() backToList = new EventEmitter<boolean>();

  constructor(private noteManager: NotesManager) { 
    this.noteManager.editMode.subscribe((value: Note) => console.log(value));
    this.isEditingNote = this.noteManager.isInEditMode;
    
  }

  ngOnInit(): void {

  }

  onButtonClicked(btnFunction : string){

    switch (btnFunction) {
      case 'back':
        this.backToList.emit(true);
        break;
      case 'delete':
        this.noteManager.deleteNote(this.noteToAdd);
        this.backToList.emit(true);
        break;
      case 'done':
          if(this.isEditingNote) this.noteManager.editNote(this.noteToAdd);
          else{
            this.onAddNote(); 
          } 
        break;

      default:
        break;
    }
  }

  onAddNote(){
    
    if(this.noteToAdd.noteTitle === '') alert('You must add a title to the note');
    else{
      this.noteToAdd.noteId = this.index;
      this.noteToAdd.noteDate = new Date().toString();
      this.noteManager.addNote(this.noteToAdd);
      this.index++;
      this.backToList.emit(true); //Ritorna alla lista delle note
    } 
  }
}
