import { Component, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActionButton } from './action-button.model';
import { DialogAddItemComandaComponent } from '../../dialog-add-item-comanda/dialog-add-item-comanda.component';
import { DialogListEditComandaComponent } from '../../dialog-list-edit-comanda/dialog-list-edit-comanda.component';
import { DialogFinalizarComandaComponent } from '../../dialog-finalizar-comanda/dialog-finalizar-comanda.component';


@Component({
  selector: 'app-actions-buttons-comanda',
  templateUrl: './actions-buttons-comanda.component.html',
  styleUrls: ['./actions-buttons-comanda.component.scss']
})


export class DialogActionComandaComponent implements OnInit {

  dialogActions: ActionButton[] = [
    {
      title: 'Adicionar Itens',
      icon: 'fastfood',
      action: () => {
        this.dialog.open(DialogAddItemComandaComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Listar/Editar',
      icon: 'edit',
      action: () => {
        this.dialog.open(DialogListEditComandaComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Finalizar Comanda',
      icon: 'check_circle',
      action: () => {
        this.dialog.open(DialogFinalizarComandaComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
  ];

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {

  }

}


