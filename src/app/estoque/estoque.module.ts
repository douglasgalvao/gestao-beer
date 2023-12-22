import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './estoque.component';
import { EstoqueRoutingModule } from './estoque-routing.module';



@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
