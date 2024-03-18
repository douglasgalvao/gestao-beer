import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardFornecedoresElements, ComandaElement } from './comanda-data';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})

export class ComandaComponent implements OnInit {


  comandas: ComandaElement[] = CardFornecedoresElements;

  constructor() { }
  ngOnInit(): void {

  }

}
