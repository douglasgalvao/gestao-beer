import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogoService } from 'src/app/service/dialogo.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-definir-estoque-dialog',
  templateUrl: './definir-estoque-dialog.component.html',
  styleUrls: ['./definir-estoque-dialog.component.scss']
})
export class DefinirEstoqueDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: ProdutoElement,
    private fb: FormBuilder

  ) { }

  produto = this.data;
  form = this.fb.group({
    estoqueMinimo: [null, Validators.required],
  })

  definirBaixoEstoque(e: any) {
    console.log(e.estoqueMinimo);
    // if (this.produto && this.produto.quantidadeBaixoEstoque !== null && e !== null) {
    //   this.produto.quantidadeBaixoEstoque += e;
    // }
    // console.log(this.produto.quantidadeBaixoEstoque);
    // this.dialog.closeAll();
    // this.notificationService.baixoEstoqueDefinido$.subscribe((res) => {

    // });
  }

  cancelar() {
    this.dialog.closeAll();
  }



  ngOnInit(): void {
    console.log(this.produto);
  }




}
