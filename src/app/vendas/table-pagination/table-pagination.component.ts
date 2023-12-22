import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { VendaElement } from '../vendas.component';
import { VendasService } from 'src/app/service/vendas.service';
import { NotificationService } from 'src/app/service/notification.service';





@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TableSortPaginationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataVenda', 'totalVenda', 'cliente', 'metodoPagamento', 'statusVenda', 'actions'];
  vendas: VendaElement[] = [];
  dataSource!: MatTableDataSource<VendaElement>;
  selection = new SelectionModel<VendaElement>(true, []);

  @Output() openInformations = new EventEmitter<VendaElement>();
  @Output() openDelete = new EventEmitter<VendaElement>();
  @Output() openNewVenda = new EventEmitter<VendaElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private vendasService: VendasService, private notificationService: NotificationService) { }



  openDialogInformation(venda: VendaElement) {
    this.vendasService.getVenda(venda.id).subscribe(
      data => {
        this.openInformations.emit(data);
      },
      error => console.error('Erro ao obter venda:', error)
    );
  }

  openDialogNewVenda() {
    this.openNewVenda.emit();
  }


  openDeleteVenda(venda: VendaElement) {
    this.vendasService.getVenda(venda.id).subscribe(
      data => {
        this.openDelete.emit(data);
      },
      error => console.error('Erro ao obter venda:', error)
    );


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


  updateTable() {
    this.vendas = [];
    this.vendasService.getVendas().subscribe(
      data => {
        data.forEach(venda => {
          this.vendas.push({
            id: venda.id,
            dataVenda: venda.dataVenda,
            totalVenda: venda.totalVenda,
            cliente: venda.cliente,
            metodoPagamento: venda.metodoPagamento,
            statusVenda: venda.statusVenda,
            produtos: venda.produtos
          });
        })
        this.dataSource = new MatTableDataSource<VendaElement>(this.vendas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.error('Erro ao obter vendas:', error)
    );
  }


  updateTableByDelete(vendas: VendaElement[]) {
    this.vendas = vendas;
    this.dataSource = new MatTableDataSource<VendaElement>(this.vendas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {

    this.notificationService.vendaDeletada$.subscribe((vendaID) => {
      this.vendas = this.vendas.filter((venda) => venda.id !== vendaID);
      this.updateTableByDelete(this.vendas);
    });

    this.notificationService.vendaCriada$.subscribe(() => {
      this.updateTable();
    });

    this.updateTable();
  }
}
