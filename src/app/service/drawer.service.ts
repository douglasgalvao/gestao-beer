import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawerSubject = new Subject<boolean>();
  drawerState = this.drawerSubject.asObservable();

  private isDrawerOpen: boolean = false;

  constructor() { }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerSubject.next(this.isDrawerOpen);
  }

  getCurrentDrawerState(): boolean {
    return this.isDrawerOpen;
  }
}
