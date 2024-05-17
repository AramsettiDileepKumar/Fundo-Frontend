import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteService/noteservice.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  notesList: any[] = [];
  constructor(private noteservice: NoteserviceService) {}

  ngOnInit() {
    this.noteservice.getApi().subscribe(
      (res: any) => {
        this.notesList = res.data.filter(
          (note: any) => note.isArchived == false && note.isDeleted == false
        );
      },
      (err) => console.log(err)
    );
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNote') {
      this.notesList.push($event.data);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.notesList = this.notesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    } else if ($event.action == 'color' || $event.action == 'edit') {
      this.notesList = this.notesList.map((note: any) => {
        if (note.noteId == $event.data.noteId) {
          return $event.data;
        }
        return note;
      });
    }
  }
}
