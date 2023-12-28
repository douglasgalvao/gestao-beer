import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './estoque.component';
import { EstoqueRoutingModule } from './estoque-routing.module';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';



@NgModule({
  declarations: [
    EstoqueComponent,
    CadastroEstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
