import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesasComponent } from './despesas.component';
import { DespesasRoutingModule } from './despesas-routing.module';



@NgModule({
  declarations: [
    DespesasComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule
  ]
})
export class DespesasModule { }
