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

  onNoteDetail!: boolean; //Se false mostra la lista delle note se true mostra l'interfaccia per i dettagli di una nota
  

  constructor(private noteManager: NotesManager){
     
  }
  ngOnInit(){}

  ngDoCheck(){
  }
  
  onAddNote(viewList: boolean){
    this.onNoteDetail = viewList;
  }


}
