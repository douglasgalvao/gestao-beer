import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogNovoProdutoComponent } from 'src/app/produtos/dialog-novo-produto/dialog-novo-produto.component';
import { NovaVendaDialogComponent } from 'src/app/vendas/nova-venda-dialog/nova-venda-dialog.component';



export interface HomeAction {
  title: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-home-action',
  templateUrl: './home-action.component.html',
  styleUrls: ['./home-action.component.scss']
})


export class HomeActionComponent implements OnInit {

  homeActions: HomeAction[] = [
    {
      title: 'Novo Produto',
      icon: 'fastfood',
      action: () => { console.log('implementar') },
    },
    {
      title: 'Nova Venda',
      icon: 'sell',
      action: () => { console.log('implementar') },
    },
    {
      title: 'Add Item Comanda',
      icon: 'assignment',
      action: () => { console.log('implementar') },
    },
    {
      title: 'Gerenciar Estoque',
      icon: 'credit_card',
      action: () => { console.log('implementar') },
    },
  ];

  constructor(
    private dialogProduto: MatDialogRef<DialogNovoProdutoComponent>,
    private dialogVenda:MatDialogRef<NovaVendaDialogComponent>) { }

  ngOnInit(): void {

  }

}


