import { Component, OnInit } from '@angular/core';
import { Note } from '../model/node.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [
    new Note('Primo titolo nota' , 'Contenuto notanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanotanota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto notaContenuto notaContenuto notaContenuto notaContenuto notaContenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota'),
    new Note('Primo titolo nota' , 'Contenuto nota', 'Data Nota')


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
