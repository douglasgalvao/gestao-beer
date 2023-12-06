import { Component } from '@angular/core';
import { Acoes } from './home-data';

export interface NovaAcao {
  linkRouter: string,
  iconName: string,
  nameAction: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newAcoes: NovaAcao[] = Acoes;

  constructor() {

  }

}
