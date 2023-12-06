import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformationVendaComponent } from './dialog-information-venda/dialog-information-venda.component';
import { DialogoService } from '../service/dialogo.service';
import { trigger, transition, style, animate } from '@angular/animations';
export interface ProdutoElement {
  nome: string,
  quantidade: number,
  precoUnitario: number,
  subtotal: number
}

export interface VendaElement {
  id: number;
  dataHora: string;
  produtos: ProdutoElement[];
  totalVenda: number;
  cliente: string;
  metodoPagamento: string;
  statusVenda: string;
  observacoes: string;
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
    this.dialogService.vendaData$.subscribe((data) => {
      this.vendaData = data;
    });
  }

  abrirDialog(venda: VendaElement) {
    this.dialog.open(DialogInformationVendaComponent, {
      width: '60%',
      height: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '400ms'
    })
    this.dialogService.setVendaData(venda);
  }

}

