import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';




@NgModule({
  declarations: [
    FornecedoresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FornecedoresRoutingModule
  ]
})
export class FornecedoresModule { }
