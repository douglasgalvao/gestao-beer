import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VendaElement } from '../vendas.component';
import { DialogoService } from 'src/app/service/dialogo.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
declare var page: any;
@Component({
    selector: 'app-dialog-information-venda',
    templateUrl: './dialog-information-venda.component.html',
    styleUrls: ['./dialog-information-venda.component.scss']
})
export class DialogInformationVendaComponent implements OnInit {
    constructor(private fb: FormBuilder, private dialog: MatDialogRef<DialogInformationVendaComponent>, private dialogService: DialogoService) {
        page = this;
    }


    @ViewChild('textAreaProduto') textAreaProduto?: ElementRef;

    vendaObjeto?: VendaElement | null;

    buttons = {
        btnFechar: { name: "Fechar", color: 'warn' },
        btnSalvar: { name: "Salvar", color: 'yellow' }
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
