import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { MaterialModule } from '../material-module';
import { TableSortPaginationComponent } from './table-pagination/table-pagination.component';
import { VendasRoutingModule } from './vendas-routing.module';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { VendasService } from '../service/vendas.service';
import { DialogDeleteConfirmationVendaComponent } from './dialog-delete-confirmation-venda/dialog-delete-confirmation-venda.component';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    VendasComponent,
    TableSortPaginationComponent,
    DialogInformationVendaComponent,
    DialogDeleteConfirmationVendaComponent,
    NovaVendaDialogComponent,
    DataFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VendasRoutingModule,
    FormsModule,
    MatNativeDateModule
  ],
  exports: [NovaVendaDialogComponent],
  providers: [VendasService]
})
export class VendasModule { }
