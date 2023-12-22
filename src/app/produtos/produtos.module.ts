import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DialogNovoProdutoComponent } from './dialog-novo-produto/dialog-novo-produto.component';
import { DialogNovaCategoriaComponent } from './dialog-nova-categoria/dialog-nova-categoria.component';
import { DialogDeleteProdutoComponent } from './dialog-delete-produto/dialog-delete-produto.component';
import { TableCategoriasProdutosComponent } from './table-pagination-categoria/table-pagination-categoria.component';
import { TableProdutosCategoriasComponent } from './table-pagination-produto/table-pagination-produto.component';
import { DialogDeleteCategoriaComponent } from './dialog-delete-categoria/dialog-delete-categoria.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    DialogNovoProdutoComponent,
    DialogNovaCategoriaComponent,
    DialogDeleteProdutoComponent,
    TableCategoriasProdutosComponent,
    TableProdutosCategoriasComponent,
    DialogDeleteCategoriaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProdutosRoutingModule,
    SharedModule
  ]
})
export class ProdutosModule { }
