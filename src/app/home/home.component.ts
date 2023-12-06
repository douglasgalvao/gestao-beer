import { Component } from '@angular/core';
import { Acoes } from './home-data';
import { trigger, transition, style, animate } from '@angular/animations';
export interface NovaAcao {
  linkRouter: string,
  iconName: string,
  nameAction: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class HomeComponent {

  newAcoes: NovaAcao[] = Acoes;

  constructor() {

  }

}
