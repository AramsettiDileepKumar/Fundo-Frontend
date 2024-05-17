import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  TICK_ICON,
  BRUSH_ICON,
  IMG_ICON,
  REMINDER_ICON,
  PIN_ICON,
  UNDO_ICON,
  REDO_ICON,
  ARCHIVE_ICON,
  COLLABRATOR_ICON,
  COLOR_PALATTE_ICON,
  MORE_ICON,
} from 'src/assets/svg-icons';
import { NoteserviceService } from 'src/app/services/noteService/noteservice.service';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  @Output() updateList = new EventEmitter();

  createNote: boolean = true;
  title: string = '';
  description: string = '';
  archive: boolean = false;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private noteService: NoteserviceService
  ) {
    iconRegistry.addSvgIconLiteral(
      'tick-icon',
      sanitizer.bypassSecurityTrustHtml(TICK_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'brush-icon',
      sanitizer.bypassSecurityTrustHtml(BRUSH_ICON)
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
      'redo-icon',
      sanitizer.bypassSecurityTrustHtml(REDO_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'undo-icon',
      sanitizer.bypassSecurityTrustHtml(UNDO_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'pin-icon',
      sanitizer.bypassSecurityTrustHtml(PIN_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'reminder-icon',
      sanitizer.bypassSecurityTrustHtml(REMINDER_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
  }

  ngOnInit(): void {}
  handleCreateNote() {
    this.createNote = !this.createNote;
    if (this.title || this.description) {
      this.noteService
        .createNotesApi({
          title: this.title,
          description: this.description,
          color: '#ffffff',
        })
        .subscribe((res) => {
          this.updateList.emit({
            data: {
              title: this.title,
              description: this.description,
            },
            action: 'addNote',
          });
          this.title = '';
          this.description = '';
        });
    }
  }
  handleArchive() {
    this.archive = !this.archive;
  }
}
