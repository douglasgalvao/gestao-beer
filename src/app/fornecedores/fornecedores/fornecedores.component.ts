import { animate, style, transition, trigger } from '@angular/animations';
import { CardFornecedoresElements } from './fornecedores-data';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformacoesDialogComponent } from '../informacoes-dialog/informacoes-dialog.component';
import { CadastroFornecedorComponent } from '../cadastro-fornecedor/cadastro-fornecedor.component';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})


export class FornecedoresComponent {
  constructor(private dialog: MatDialog) {
    this.dialog = dialog;
  }

  cards = CardFornecedoresElements;

  abrirDialogCadastroFornecedor() {
    this.dialog.open(CadastroFornecedorComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
  }

  abrirDialogInformacoes() {
    this.dialog.open(InformacoesDialogComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
  }


}
