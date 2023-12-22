import { ProdutoElement } from './../../vendas/vendas.component';
import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NotificationService } from 'src/app/service/notification.service';
import { ProdutoService } from 'src/app/service/produto.service';





@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TableProdutosCategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id','nome do produto', 'preço', 'categoria'];
  columAction: string = 'Actions';
  produtos: ProdutoElement[] = [];
  dataSource!: MatTableDataSource<ProdutoElement>;
  selection = new SelectionModel<ProdutoElement>(true, []);


  @Output() openInformations = new EventEmitter<ProdutoElement>();
  @Output() openDelete = new EventEmitter<ProdutoElement>();
  @Output() openNewProduto = new EventEmitter<ProdutoElement>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private produtosService: ProdutoService, private notificationService: NotificationService) { }



  openDialogInformation(produto: ProdutoElement) {
    this.produtosService.getProdutoById(produto.id).subscribe(
      data => {
        this.openInformations.emit(data);
      },
      error => console.error('Erro ao obter Produto:', error)
    );
  }

  openDialogNewVenda() {
    this.openNewProduto.emit();
  }


  openDeleteProduto(produto: ProdutoElement) {
    this.produtosService.deleteProduto(produto.id).subscribe(
      data => {
        this.openDelete.emit(data);
      },
      error => console.error('Erro ao obter Produto:', error)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    const normalizedFilter = this.normalizeAccents(filterValue);

    this.dataSource.filter = normalizedFilter;

    this.dataSource.filterPredicate = (data: ProdutoElement, filter: string) => {
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
    this.produtos = [];
    this.produtosService.getProdutos().subscribe(
      data => {
        data.forEach(produto => {
          this.produtos.push(produto);
        })

        this.dataSource = new MatTableDataSource<ProdutoElement>(this.produtos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.error('Erro ao obter vendas:', error)
    );
  }


  updateTableByDelete(produtos: ProdutoElement[]) {
    this.produtos = produtos;
    this.dataSource = new MatTableDataSource<ProdutoElement>(this.produtos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    // this.displayedColumns.push(this.columAction);

    this.notificationService.produtoCriado$.subscribe(
      produto => {
        this.produtos.push(produto);
        this.updateTableByDelete(this.produtos);
      }
    );

    this.notificationService.produtoDeletado$.subscribe(
      produtoId => {
        this.produtos = this.produtos.filter(produto => produto.id !== produtoId);
        this.updateTableByDelete(this.produtos);
      }
    );

    this.updateTable();
  }
}
