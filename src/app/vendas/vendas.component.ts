import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface VendaElement {
  id: number;
  produto: string;
  preco: number;
  comment: string;
}

const ELEMENT_DATA: VendaElement[] = [
  { id: 1, produto: 'Brahma', preco: 1.0079, comment: 'Nota 10' },
  { id: 2, produto: 'Helium', preco: 4.0026, comment: 'Nota 10' },
  { id: 3, produto: 'Lithium', preco: 6.941, comment: 'Nota 10' },
  { id: 4, produto: 'Beryllium', preco: 9.0122, comment: 'Nota 10' },
  { id: 5, produto: 'Boron', preco: 10.811, comment: 'Nota 10' },
  { id: 6, produto: 'Carbon', preco: 12.0107, comment: 'Nota 10' },
  { id: 7, produto: 'Nitrogen', preco: 14.0067, comment: 'Nota 10' },
  { id: 8, produto: 'Oxygen', preco: 15.9994, comment: 'Nota 10' },
  { id: 9, produto: 'Fluorine', preco: 18.9984, comment: 'Nota 10' },
  { id: 10, produto: 'Neon', preco: 20.1797, comment: 'Nota 10' }
];

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {
  displayedColumns: string[] = ['id', 'produto', 'preco', 'comment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}