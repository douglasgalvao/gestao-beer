import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { DialogoService } from '../service/dialogo.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DialogDeleteConfirmationVendaComponent } from './dialog-delete-confirmation-venda/dialog-delete-confirmation-venda.component';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';


export interface CategoriaProdutoElement {
  id: number,
  nome: string
}

export interface CategoriaProdutoElementRequest {
  id: number
}
export interface ProdutoElement {
  produtoObject: ProdutoElement;
  id: number,
  nome: string,
  quantidade?: number,
  preco: number,
  subtotal: number,
  categoriaProduto: CategoriaProdutoElement
}


export interface ProdutoElementRequest {
  id: number,
  nome: string,
  quantidade?: number,
  preco: string,
  categoriaProduto: string
}



export interface ClienteElement {
  email: string,
  id: number,
  nome: string,
  numero: string
}


export interface VendaElement {
  id: number;
  totalVenda: number;
  dataVenda: string;
  statusVenda: string;
  metodoPagamento: string;
  produtos: ProdutoElement[];
  cliente: ClienteElement;
}


export interface VendaElementRequest {
  statusVenda: string;
  metodoPagamento: string;
  produtos: ProdutoElement[];
  cliente: ClienteElement;
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
  vendaData!: VendaElement;
  ngOnInit(): void {

  }

  abrirDialogInformation(venda: VendaElement) {
    this.dialog.open(DialogInformationVendaComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
    this.dialogService.setVendaData(venda);
  }


  abrirDialogDelete(venda: VendaElement) {
    this.dialog.open(DialogDeleteConfirmationVendaComponent, {
      data: venda,
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
    this.dialogService.setVendaData(venda);
  }


  abrirDialogNovaVenda() {
    this.dialog.open(NovaVendaDialogComponent, {
      width: 'max-content',
      height: 'max-content',
      panelClass: 'scrollable-dialog',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
  }


}

