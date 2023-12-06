import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VendaElement } from '../vendas.component';
import { DialogoService } from 'src/app/service/dialogo.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'app-dialog-information-venda',
    templateUrl: './dialog-information-venda.component.html',
    styleUrls: ['./dialog-information-venda.component.scss']
})
export class DialogInformationVendaComponent implements OnInit {
    constructor(private fb: FormBuilder, private dialog: MatDialogRef<DialogInformationVendaComponent>, private dialogService: DialogoService) { }

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
