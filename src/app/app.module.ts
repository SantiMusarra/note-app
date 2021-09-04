import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NoteComponent } from './notes-list/note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    TopbarComponent,
    NoteComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
