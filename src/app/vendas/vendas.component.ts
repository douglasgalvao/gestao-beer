import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
export interface VendaElement {
  id: number;
  dataHora: string;
  produtos: { nome: string, quantidade: number, precoUnitario: number, subtotal: number }[];
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
export class VendasComponent {
  constructor(private dialog: MatDialog) { }


  abrirDialog(venda: VendaElement) {
    console.log('Abrir diálogo para a venda:', venda);
  }
}

