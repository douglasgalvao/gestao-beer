import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material-module';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    NovaVendaDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }
