import { CardFornecedoresElements } from './fornecedores-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})


export class FornecedoresComponent {

  cards = CardFornecedoresElements;
  constructor() { }

}
