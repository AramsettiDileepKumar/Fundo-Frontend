import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  ARCHIVE_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  EDIT_ICON,
  IMG_ICON,
  MORE_ICON,
  NOTE_ICON,
  REMINDER_ICON,
  TRASH_ICON,
  UNARCHIVE_ICON,
} from 'src/assets/svg-icons';
import { NoteserviceService } from 'src/app/services/noteService/noteservice.service';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  @Input() notesData: any[] = [];
  @Input() container: string = '';
  searchString: string = '';
  subscription!: Subscription;
  constructor(
    private matDialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private notesService: NoteserviceService,
    private dataservice: DataService
  ) {
    iconRegistry.addSvgIconLiteral(
      'note-icon',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'edit-icon',
      sanitizer.bypassSecurityTrustHtml(EDIT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archive-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'trash-icon',
      sanitizer.bypassSecurityTrustHtml(TRASH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'image-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'color-icon',
      sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'collab-icon',
      sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'archieve-icon',
      sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'unarchieve-icon',
      sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON)
    );
  }

  ngOnInit(): void {
    this.subscription = this.dataservice.currentSearchString.subscribe(
      (res) => (this.searchString = res)
    );
  }
  handleNoteIconsClick(data: any, action: string, color?: string) {
    if (action == 'archive') {
      this.notesService
        .archiveNoteApi(data.noteId)
        .subscribe((res) => this.updateList.emit({ data, action }));
    } else if (action == 'trash') {
      this.notesService
        .trashNoteApi(data.noteId)
        .subscribe((res) => this.updateList.emit({ data, action }));
    } else if (action == 'color' && color != undefined) {
      this.notesService
        .NoteColorApi(data.noteId, color)
        .subscribe((res) =>
          this.updateList.emit({ data: { ...data, colour: color }, action })
        );
    }
  }
  handleEditNote(noteData: any) {
    const dialogRef = this.matDialog.open(EditNoteComponent, {
      data: noteData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.notesService.editNoteApi(result).subscribe((res) => {
        this.updateList.emit({ data: res, action: 'edit' });
      });
    });
  }
}
