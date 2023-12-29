import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ProdutoElement } from 'src/app/vendas/vendas.component';


@Component({
  selector: 'app-produto-estoque',
  templateUrl: './produto-estoque.component.html',
  styleUrls: ['./produto-estoque.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ProdutoEstoqueComponent implements OnInit {
  @Input() produto!: ProdutoElement;

  adicionarEstoque(produto: ProdutoElement) {
    this.produto.quantidade! += 1;
  }

  constructor() { }
  ngOnInit(): void {

  }
}