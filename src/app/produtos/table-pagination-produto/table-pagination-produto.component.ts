import { ProdutoElement, ProdutoElementRequest } from '../../vendas/vendas.component';
import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/service/notification.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteProdutoComponent } from '../dialog-delete-produto/dialog-delete-produto.component';
import { DialogEditProdutoComponent } from '../dialog-edit-produto/dialog-edit-produto.component';





@Component({
  selector: 'app-table-pagination-produto',
  templateUrl: './table-pagination-produto.component.html',
  styleUrls: ['./table-pagination-produto.component.scss']
})
export class TableProdutosCategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria_Produto'];
  columAction: string = 'Actions';
  produtos: ProdutoElement[] = [];
  produtosRequest: ProdutoElementRequest[] = [];
  dataSource!: MatTableDataSource<ProdutoElementRequest>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private produtosService: ProdutoService, private notificationService: NotificationService,
    private dialog: MatDialog) { }

  get displayedColumnsWithImg() {
    let columns = [...this.displayedColumns];
    columns.splice(1, 0, 'img');
    return [...columns, 'actions'];
  }

  openDialogEditProduto(produto: ProdutoElement) {
    this.dialog.open(DialogEditProdutoComponent, {
      data: produto,
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  openDialogDeleteProduto(produto: ProdutoElement) {
    this.dialog.open(DialogDeleteProdutoComponent, {
      data: produto,
      width: 'max-content',
      height: 'max-content',
      panelClass: '',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    const normalizedFilter = this.normalizeAccents(filterValue);

    this.dataSource.filter = normalizedFilter;

    this.dataSource.filterPredicate = (data: ProdutoElementRequest, filter: string) => {
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
        this.produtos = data;
        this.produtosRequest = data.map(produto => {
          return {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            subTotal: produto.subTotal,
            img: produto.img,
            categoria_Produto: produto.categoria_Produto.nome.toUpperCase()
          };
        });
        this.dataSource = new MatTableDataSource<ProdutoElementRequest>(this.produtosRequest);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.error('Erro ao obter vendas:', error)
    );
  }


  updateTableByDelete(produtos: ProdutoElement[]) {
    this.produtos = produtos;
    this.dataSource = new MatTableDataSource<ProdutoElementRequest>(this.produtos.map(produto => {
      return {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        img: produto.img,
        subTotal: produto.subTotal,
        categoria_Produto: produto.categoria_Produto.nome.toUpperCase()
      };
    }));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {

    this.notificationService.produtoCriado$.subscribe(
      produto => {
        this.produtos.push(produto);
        this.updateTable();
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
