import { Component, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteService/noteservice.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-archieve-container',
  templateUrl: './archieve-container.component.html',
  styleUrls: ['./archieve-container.component.scss'],
})
export class ArchieveContainerComponent implements OnInit {
  archiveNotesList: any = [];
  constructor(private noteService: NoteserviceService) {}

  ngOnInit(): void {
    this.noteService.getApi().subscribe(
      (res: any) => {
        console.log(res.data);

        this.archiveNotesList = res.data.filter(
          (note: any) => note.isArchived == true && note.isDeleted == false
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
      this.archiveNotesList.push($event);
    } else if ($event.action == 'archive' || $event.action == 'trash') {
      this.archiveNotesList = this.archiveNotesList.filter(
        (note: any) => note.noteId != $event.data.noteId
      );
    } else if ($event.action == 'color' || $event.action == 'edit') {
      this.archiveNotesList = this.archiveNotesList.map((note: any) => {
        if (note.noteId == $event.data.noteId) {
          return $event.data;
        }
        return note;
      });
    }
  }
}
