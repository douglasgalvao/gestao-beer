import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
      action: () => {
        this.dialog.open(DialogNovoProdutoComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Nova Venda',
      icon: 'sell',
      action: () => {
        this.dialog.open(NovaVendaDialogComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Add Item Comanda',
      icon: 'assignment',
      action: () => { console.log('implementar') },
    }
  ];

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {

  }

}


