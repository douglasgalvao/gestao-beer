import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import { InformacoesDialogComponent } from './informacoes-dialog/informacoes-dialog.component';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FornecedoresComponent,
    InformacoesDialogComponent,
    CadastroFornecedorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FornecedoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class FornecedoresModule { }
