import { Component, OnInit } from '@angular/core';
import { NotesManager } from './services/notes-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesManager]

})
export class AppComponent implements OnInit{
  title = 'note-app';

  onNoteDetail!: boolean; //Boolean value for showing the note list UI or the UI for the creation/edting of the note 
  
  constructor(private noteManager: NotesManager){
     
  }
  ngOnInit(){}
  
  onAddNote(viewList: boolean){
    this.onNoteDetail = viewList;
  }


}
