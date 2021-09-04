import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/model/node.model';
import { NotesManager } from 'src/app/services/notes-manager.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note!: Note;

  @Output() EditMode = new EventEmitter<boolean>();

  constructor(private noteManager: NotesManager) { }

  ngOnInit(): void {
  }

  onNoteClicked(){
    
    this.EditMode.emit(true);
    this.noteManager.isInEditMode = true;
    this.noteManager.editMode.emit(this.note);
    
  }

}
