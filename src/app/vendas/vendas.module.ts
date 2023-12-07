import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { MaterialModule } from '../material-module';
import { TableSortPaginationComponent } from './table-pagination/table-pagination.component';
import { VendasRoutingModule } from './vendas-routing.module';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';

@NgModule({
  declarations: [
    VendasComponent,
    TableSortPaginationComponent,
    DialogInformationVendaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
