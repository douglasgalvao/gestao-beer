import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { VENDAS_DATA } from '../vendas/vendas-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  selector: 'app-table-sort-pagination',
  templateUrl: './table-sort-pagination.component.html',
  styleUrls: ['./table-sort-pagination.component.scss']
})
export class TableSortPaginationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataHora', 'produtos', 'totalVenda', 'cliente', 'metodoPagamento', 'statusVenda', 'observacoes', 'actions'];
  dataSource = new MatTableDataSource(VENDAS_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    const normalizedFilter = this.normalizeAccents(filterValue);

    this.dataSource.filter = normalizedFilter;

    this.dataSource.filterPredicate = (data: VendaElement, filter: string) => {
      const dataStr = this.normalizeAccents(Object.values(data).join(' ').toLowerCase());
      return dataStr.includes(filter);
    };
  }

  normalizeAccents(input: string): string {
    const accentsMap: { [key: string]: string } = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
      'ã': 'a', 'õ': 'o',
      'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
      'ä': 'a', 'ë': 'e', 'ï': 'i', 'ö': 'o', 'ü': 'u'
    };

    return input.replace(/[áéíóúàèìòùãõâêîôûäëïöü]/g, match => accentsMap[match] || match);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


}
