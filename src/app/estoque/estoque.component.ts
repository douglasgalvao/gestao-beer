import { ProdutoService } from 'src/app/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProdutoElement } from '../vendas/vendas.component';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class EstoqueComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
      }
    );

  }


  produtos: ProdutoElement[] = [];
  toolbarTitle = 'Estoque de Produtos';
  actions = [
    {
      icon: 'flip_to_front',
      label: 'Adicionar Estoque',
      menu: 'Adicionar Estoque',
      menuItems: [],
    }
  ];
}
