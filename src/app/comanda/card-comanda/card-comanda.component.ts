import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-comanda',
  templateUrl: './card-comanda.component.html',
  styleUrls: ['./card-comanda.component.scss']
})

export class CardComandaComponent implements OnInit {

  @Input() numeroComanda!: number;
  @Input() numeroMesa!: number;

constructor() { }

ngOnInit(): void {
}


}
