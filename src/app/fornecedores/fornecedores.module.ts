import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { InformacoesDialogComponent } from './informacoes-dialog/informacoes-dialog.component';
import { FornecedoresComponent } from './fornecedores.component';



@NgModule({
  declarations: [
    CadastroFornecedorComponent,
    InformacoesDialogComponent,
    FornecedoresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FornecedoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class FornecedoresModule { }
