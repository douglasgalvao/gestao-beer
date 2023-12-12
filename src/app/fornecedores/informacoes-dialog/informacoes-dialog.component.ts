import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoricoDeComprasData } from './historico-de-compras-data';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-informacoes-dialog',
  templateUrl: './informacoes-dialog.component.html',
  styleUrls: ['./informacoes-dialog.component.scss']
})


export class InformacoesDialogComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialogRef<InformacoesDialogComponent>) {
    this.dialog = dialog;
  }

  ngOnInit(): void { }

  displayedColumns = ['id', 'fornecedor', 'dataCompra']
  historico = new MatTableDataSource(HistoricoDeComprasData);

  ngAfterViewInit() {
    this.historico.paginator = this.paginator;
    // this.historico.sort = this.sort;

  }
  btnSairHistoriocCompras() {
    this.dialog.close();
  }
}
