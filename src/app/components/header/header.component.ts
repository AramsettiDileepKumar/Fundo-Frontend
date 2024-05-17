import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';

import {
  MENU_ICON,
  SEARCH_ICON,
  REFRESH_ICON,
  LIST_VIEW_ICON,
  SETTING_ICON,
  OTHER_MENU_ICON,
} from 'src/assets/svg-icons';
import { DataService } from 'src/app/services/data-service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  drawerState!: boolean;
  searchString: string = '';
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dataService: DataService,
    private router: Router
  ) {
    iconRegistry.addSvgIconLiteral(
      'menu-icon',
      sanitizer.bypassSecurityTrustHtml(MENU_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'search-icon',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'refresh-icon',
      sanitizer.bypassSecurityTrustHtml(REFRESH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'list-view-icon',
      sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'settings-icon',
      sanitizer.bypassSecurityTrustHtml(SETTING_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'other-menu-icon',
      sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON)
    );
  }

  ngOnInit(): void {
    this.dataService.currDrawerState.subscribe(
      (res) => (this.drawerState = res)
    );
  }

  handleDrawer() {
    this.dataService.updateDrawerState(!this.drawerState);
  }
  handleSearchString() {
    this.dataService.updateSearchString(this.searchString);
  }
  handleLogout() {
    this.router.navigate(['']);
    localStorage.clear();
  }
}
