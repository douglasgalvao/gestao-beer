import { Component } from '@angular/core';
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
  constructor() { }

}

