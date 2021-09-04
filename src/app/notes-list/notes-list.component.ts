import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../model/node.model';
import { NotesManager } from '../services/notes-manager.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];

  @Output() onEditing = new EventEmitter<boolean>();

  constructor(private noteManager: NotesManager) {
    this.notes = this.noteManager.noteList;
    
   }

  ngOnInit(): void {
  }

  editingNote(value: boolean){
    
    this.onEditing.emit(value);
  }
}
