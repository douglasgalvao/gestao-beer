import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogNovoProdutoComponent } from 'src/app/produtos/dialog-novo-produto/dialog-novo-produto.component';
import { NovaVendaDialogComponent } from 'src/app/vendas/nova-venda-dialog/nova-venda-dialog.component';
import { ActionButton } from './action-button.model';


@Component({
  selector: 'app-actions-buttons-home',
  templateUrl: './actions-buttons-home.component.html',
  styleUrls: ['./actions-buttons-home.component.scss']
})


export class DialogActionComponent implements OnInit {

  dialogActions: ActionButton[] = [
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


