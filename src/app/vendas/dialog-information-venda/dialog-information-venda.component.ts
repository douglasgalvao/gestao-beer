import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdutoElement, VendaElement } from '../vendas.component';
import { DIALOG_DATA } from './dialog-data';
import { DialogoService } from 'src/app/service/dialogo.service';
export interface DialogElement {
    cardVenda: {
        title: string,
        width: string,
        height: string,
        backgroundC: string,
        data: {
            dataHora: string,
            produtos: ProdutoElement[],
            totalVenda: string,
            cliente: string,
            metodoPagamento: string,
            statusVenda: string,
            observacoes: string
        }
    }
}

@Component({
    selector: 'app-dialog-information-venda',
    templateUrl: './dialog-information-venda.component.html',
    styleUrls: ['./dialog-information-venda.component.scss']
})
export class DialogInformationVendaComponent implements OnInit {
    constructor(private dialog: MatDialogRef<DialogInformationVendaComponent>, private dialogService: DialogoService) { }

    vendaObjeto?: VendaElement | null;
    buttons = {
        btnFechar: { name: "Fechar", color: 'warn' },
        btnSalvar: { name: "Salvar", color: 'primary' }
    }
    closeDialogVenda() {
        this.dialog.close();
    }

    ngOnInit(): void {
        this.dialogService.vendaData$.subscribe(venda => {
            this.vendaObjeto = venda;
        })
    }
}
