import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNovoProdutoComponent } from './dialog-novo-produto/dialog-novo-produto.component';
import { ProdutoService } from '../service/produto.service';
import { DialogNovaCategoriaComponent } from './dialog-nova-categoria/dialog-nova-categoria.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ProdutosComponent {
  constructor(private dialog: MatDialog, private produtoService: ProdutoService) { }

  abrirDialogNovoProduto() {
    this.dialog.open(DialogNovoProdutoComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  abrirDialogNovaCategoria() {
    this.dialog.open(DialogNovaCategoriaComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  toolbarTitle = 'Produtos';
  actions = [
    {
      icon: 'flip_to_front',
      label: 'Novo',
      menu: 'novoProduto',
      menuItems: [
        {
          icon: 'fastfood',
          label: 'Novo Produto',
          action: () => this.abrirDialogNovoProduto(),
        },
        {
          icon: 'bookmark',
          label: 'Nova Categoria',
          action: () => this.abrirDialogNovaCategoria(),
        }
      ],
    }
  ];


  cadastrarNovoProduto() {
  }
  performAction(action: () => void) {
    action();
  }
}
