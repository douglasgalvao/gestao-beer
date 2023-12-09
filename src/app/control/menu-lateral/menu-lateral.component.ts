import { DrawerService } from '../../service/drawer.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu-itens-data';

export interface MenuLateralItens {
  nome: string,
  linkRouter: string,
  iconName: string
}

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  data: MenuLateralItens[] = Menu;
  isDrawerOpened: boolean = false;
  constructor(private drawer: DrawerService) {

    drawer.drawerState.subscribe((isOpen) => {
      this.isDrawerOpened = isOpen;
    });

  }

  ngOnInit(): void {
  }
}
