import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { DialogoService } from '../service/dialogo.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DialogDeleteConfirmationVendaComponent } from './dialog-delete-confirmation-venda/dialog-delete-confirmation-venda.component';
import { NovaVendaDialogComponent } from './nova-venda-dialog/nova-venda-dialog.component';
import { VendasService } from '../service/vendas.service';


export interface CategoriaProdutoElement {
  id: number,
  nome: string
}

export interface CategoriaProdutoElementRequest {
  id: number
}
export interface ProdutoElement {
  id: number,
  codBarras: string,
  nome: string,
  quantidade?: number,
  quantidadeEstoque: number,
  quantidadeBaixoEstoque: number | null,
  img: string,
  preco: number,
  subTotal: number,
  categoriaProduto: CategoriaProdutoElement
}


export interface ProdutoElementRequest {
  id: number,
  nome: string,
  quantidade?: number,
  preco: string,
  categoriaProduto: string
}


export interface ProdutoElementVendaResquest {
  codBarras: string,
  quantidade: number
}

export interface ClienteElementRequest {
  id: number
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
  cliente: ClienteElementRequest;
  statusVenda: string;
  metodoPagamento: string;
  produtos: ProdutoElementVendaResquest[];
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
  constructor(private dialog: MatDialog, private dialogService: DialogoService,
    private vendasService: VendasService) { }
  vendaData!: VendaElement;
  ngOnInit(): void {

  }



  abrirDialogNovaVenda() {
    this.dialog.open(NovaVendaDialogComponent, {
      width: 'max-content',
      height: 'max-content',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
  }


  openDialogFiltrarVendas() {
    console.log('vai ser implementado');
  }

  openDialogGerarRelatorio() {
    console.log('vai ser implementado');
  }

  abrirDialogInformation(venda: VendaElement) {
    this.vendasService.getVenda(venda.id).subscribe(
      data => {
      },
      error => console.error('Erro ao obter venda:', error)
    );
  }

  openDeleteVenda(venda: VendaElement) {
    this.vendasService.getVenda(venda.id).subscribe(
      data => {
      },
      error => console.error('Erro ao obter venda:', error)
    );


  }



}

