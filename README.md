# NoteApp

This WebApp is inspired by the Xiaomi note app and I used Figma for design my own version.

## Dependencies 
This app requires Bootstrap 4.x

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Design Implementation

The app is divided among four component apart for the app component which is the main component of the app and where the other components are nested:

- The Topbar component 
- The Note list component which job is simply to list and group all the notes that have been created
- The Note component which display all the information of a note that is listed in the Notes Container component UI
- The Note detail component which have two functions:
    - Works as a template for the creation of a note
    - Show all the information of an already exiting note if selected and let edit the note

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
