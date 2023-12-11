import { Component } from '@angular/core';
import { HistoricoDeComprasData } from './informacoes-data';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-informacoes-dialog',
  templateUrl: './informacoes-dialog.component.html',
  styleUrls: ['./informacoes-dialog.component.scss']
})


export class InformacoesDialogComponent {
  constructor(private dialog: MatDialogRef<InformacoesDialogComponent>) {
    this.dialog = dialog;
  }
  displayedColumns = ['id', 'fornecedor', 'dataCompra']
  historico = HistoricoDeComprasData;


  btnSairHistoriocCompras() {
    this.dialog.close();
  }
}
