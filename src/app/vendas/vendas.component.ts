import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { DialogoService } from '../service/dialogo.service';

export interface ProdutoElement {
  nome: string,
  quantidade: number,
  precoUnitario: number,
  subtotal: number
}

export interface VendaElement {
  id: number;
  dataHora: string;
  produtos: ProdutoElement[];
  totalVenda: number;
  cliente: string;
  metodoPagamento: string;
  statusVenda: string;
  observacoes: string;
}


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {
  constructor(private dialog: MatDialog, private dialogService: DialogoService) { }
  vendaData: VendaElement | null = null;
  ngOnInit(): void {
    this.dialogService.vendaData$.subscribe((data) => {
      this.vendaData = data;
    });
  }

  abrirDialog(venda: VendaElement) {
    this.dialog.open(DialogInformationVendaComponent, {
      width: '60%',
      height: '60%'
    })
    this.dialogService.setVendaData(venda);
  }

}

