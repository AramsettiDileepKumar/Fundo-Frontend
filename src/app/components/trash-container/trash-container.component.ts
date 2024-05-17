import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteService/noteservice.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss'],
})
export class TrashContainerComponent implements OnInit {
  trashNotesList: any = [];

  constructor(private noteService: NoteserviceService) {}

  ngOnInit(): void {
    this.noteService.getApi().subscribe(
      (res: any) => {
        console.log(res.data);

        this.trashNotesList = res.data.filter(
          (note: any) => note.isArchived == false && note.isDeleted == true
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  handleUpdateNotesList($event: any) {
    console.log($event);
    if ($event.action == 'addNotes') {
      this.trashNotesList.push($event);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.trashNotesList = this.trashNotesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    }
  }
}
