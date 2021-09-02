import { Component, OnInit } from '@angular/core';
import { Note } from '../model/node.model';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  noteToDisplay!: Note;


  constructor() { }

  ngOnInit(): void {
  }

}
