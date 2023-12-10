import { Component } from '@angular/core';
import { HistoricoDeComprasData } from './informacoes-data';

@Component({
  selector: 'app-informacoes-dialog',
  templateUrl: './informacoes-dialog.component.html',
  styleUrls: ['./informacoes-dialog.component.scss']
})


export class InformacoesDialogComponent {
  displayedColumns = ['id','fornecedor','dataCompra']
  historico = HistoricoDeComprasData;
}
