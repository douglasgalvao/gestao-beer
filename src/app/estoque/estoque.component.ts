import { ProdutoService } from 'src/app/service/produto.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProdutoElement } from '../vendas/vendas.component';
import { NotificationService } from '../service/notification.service';
import { MatPaginator } from '@angular/material/paginator';

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

  produtos: ProdutoElement[] = [];
  produtosFiltrados: ProdutoElement[] = [];
  toolbarTitle = 'Estoque de Produtos';
  actions = [
    {
      icon: 'flip_to_front',
      label: 'Adicionar Estoque',
      menu: 'Adicionar Estoque',
      menuItems: [],
    }
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private produtoService: ProdutoService, private notificationService: NotificationService) { }
  ngOnInit(): void {

    this.produtoService.getProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        this.produtosFiltrados = produtos;
      }
    );

    this.notificationService.estoqueAdicionado$.subscribe(estoque => {
      const index = this.produtos.findIndex(produto => produto.id === estoque.id);
      console.log(this.produtos[index]);
    });


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    const normalizedFilter = this.normalizeAccents(filterValue);
    this.produtosFiltrados = this.produtos.filter(produto => (this.normalizeAccents(produto.nome).toLowerCase().includes(normalizedFilter)));
    console.log(normalizedFilter);
    this.paginator.pageIndex = 0;
  }

  normalizeAccents(input: string): string {
    const accentsMap: { [key: string]: string } = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
      'ã': 'a', 'õ': 'o',
      'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
      'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u'
    };

    return input.replace(/[áéíóúàèìòùãõâêîôûäëïöü]/g, match => accentsMap[match] || match);
  }


}
