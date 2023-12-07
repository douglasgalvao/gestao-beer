import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { VendaElement } from '../vendas/vendas.component';
import { DialogoService } from '../service/dialogo.service';
import { MatDialog } from '@angular/material/dialog';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class HomeComponent {

  vendaData: VendaElement | null = null;
  constructor(private dialog: MatDialog, private dialogService: DialogoService) {

  }



  abrirDialog(venda: VendaElement) {
    this.dialog.open(NovaVendaDialogComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '400ms'
    })
    this.dialogService.setVendaData(venda);
  }


}
