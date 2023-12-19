import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogoService } from 'src/app/service/dialogo.service';
import { VendaElement } from '../vendas.component';

@Component({
  selector: 'app-dialog-delete-confirmation-venda',
  templateUrl: './dialog-delete-confirmation-venda.component.html',
  styleUrls: ['./dialog-delete-confirmation-venda.component.scss']
})
export class DialogDeleteConfirmationVendaComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogDeleteConfirmationVendaComponent>,
    private dialogService: DialogoService) { }


  vendaObjeto?: VendaElement | null;
  closeDialogConfirmation() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.dialogService.vendaData$.subscribe(venda => {
      this.vendaObjeto = venda;
    })
  }
}
