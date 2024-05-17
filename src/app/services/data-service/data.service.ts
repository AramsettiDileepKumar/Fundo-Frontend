import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private drawerState = new BehaviorSubject(false);
  currDrawerState = this.drawerState.asObservable();
  private searchstring = new BehaviorSubject('');
  currentSearchString = this.searchstring.asObservable();
  constructor() {}
  updateDrawerState(val: boolean) {
    this.drawerState.next(val);
  }
  updateSearchString(state: string) {
    this.searchstring.next(state);
  }
}
