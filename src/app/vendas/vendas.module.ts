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
import { DialogoService } from '../service/dialogo.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    VendasComponent,
    TableSortPaginationComponent,
    DialogInformationVendaComponent,
    DialogDeleteConfirmationVendaComponent,
    NovaVendaDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VendasRoutingModule
  ],
  exports: [NovaVendaDialogComponent],
  providers: [VendasService, DialogoService]
})
export class VendasModule { }
