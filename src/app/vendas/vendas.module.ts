import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { MaterialModule } from '../material-module';
import { TableSortPaginationComponent } from './table-pagination/table-pagination.component';
import { VendasRoutingModule } from './vendas-routing.module';


@NgModule({
  declarations: [
    VendasComponent,
    TableSortPaginationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
