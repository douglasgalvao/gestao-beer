import { Component } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  constructor(private drawerService: DrawerService) { }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }


}
