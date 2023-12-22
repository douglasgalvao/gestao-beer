import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DialogNovoProdutoComponent } from './dialog-novo-produto/dialog-novo-produto.component';
import { DialogNovaCategoriaComponent } from './dialog-nova-categoria/dialog-nova-categoria.component';
import { TableProdutosCategoriasComponent } from './table-pagination-produto/table-pagination.component';
import { DialogDeleteProdutoComponent } from './dialog-delete-produto/dialog-delete-produto.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    DialogNovoProdutoComponent,
    DialogNovaCategoriaComponent,
    TableProdutosCategoriasComponent,
    DialogDeleteProdutoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProdutosRoutingModule,
    SharedModule
  ]
})
export class ProdutosModule { }
