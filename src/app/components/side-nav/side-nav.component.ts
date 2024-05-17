import { Component, OnDestroy, OnInit } from '@angular/core';
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
} from 'src/assets/svg-icons';
import { DataService } from 'src/app/services/data-service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  drawerState: boolean = false;
  subscription!: Subscription;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dataService: DataService
  ) {
    iconRegistry.addSvgIconLiteral(
      'note-icon',
      sanitizer.bypassSecurityTrustHtml(NOTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'remainder-icon',
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
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currDrawerState.subscribe(
      (res: any) => (this.drawerState = res)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
