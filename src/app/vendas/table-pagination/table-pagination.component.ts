import { Component, ViewChild, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { VENDAS_DATA } from '../../vendas/vendas-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { VendaElement } from '../vendas.component';





@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TableSortPaginationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataHora', 'totalVenda', 'cliente', 'metodoPagamento', 'statusVenda', 'actions'];
  vendas: VendaElement[] = [];
  dataSource = new MatTableDataSource(VENDAS_DATA);
  selection = new SelectionModel<VendaElement>(true, []);

  @Output() openDialog = new EventEmitter<VendaElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }


  ngOnInit(): void {
    this.vendas = VENDAS_DATA;
    this.dataSource.sort = this.sort;
  }


  openDialogClicked(venda: VendaElement) {
    this.openDialog.emit(venda);
  }

  applyFilter(event: Event) {
    console.log(this.dataSource)
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

  isAllSelected() {
    return this.selection.selected.length == this.vendas.length;
  }

  toogleAllVendas() {
    if (this.isAllSelected()) {
      this.selection.clear()
    } else {
      this.selection.select(...this.vendas);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  onProductSelected(venda: VendaElement) {
    this.selection.toggle(venda);

    console.log(this.selection.selected);
  }


}
