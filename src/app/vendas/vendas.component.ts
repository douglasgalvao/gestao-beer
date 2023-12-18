import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { DialogoService } from '../service/dialogo.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { VendasService } from '../service/vendas.service';
export interface ProdutoElement {
  nome: string,
  quantidade: number,
  precoUnitario: number,
  subtotal: number,
  tipoProduto: string
}

export interface VendaElement {
  id: number;
  totalVenda: number;
  dataVenda: string;
  statusVenda: string;
  metodoPagamento: string;
  produtos: ProdutoElement[];
  cliente: string;
}


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})


export class VendasComponent implements OnInit {
  constructor(private dialog: MatDialog, private dialogService: DialogoService) { }
  vendaData: VendaElement | null = null;
  ngOnInit(): void {

  }

  abrirDialog(venda: VendaElement) {
    this.dialog.open(DialogInformationVendaComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
    this.dialogService.setVendaData(venda);
  }



}

