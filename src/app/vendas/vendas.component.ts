import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { VENDAS_DATA } from './vendas-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';

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

  constructor(private _liveAnnouncer: LiveAnnouncer) { }


  announceSortChange(sortState: Event) {
    if (sortState) {
      this._liveAnnouncer.announce(`Sorted ${sortState}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}

