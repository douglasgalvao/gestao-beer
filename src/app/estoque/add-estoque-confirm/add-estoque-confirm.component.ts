import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoElement } from 'src/app/vendas/vendas.component';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-add-estoque-confirm',
  templateUrl: './add-estoque-confirm.component.html',
  styleUrls: ['./add-estoque-confirm.component.scss']
})
export class AddEstoqueConfirmComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddEstoqueConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProdutoElement,
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private matSnackBar: MatSnackBar,
    private notification: NotificationService) {

  }

  form = this.fb.group({
    // quantidade: [ , [Validators.required, Validators.min(1), Validators.max(200)]]
    quantidade: [null, [Validators.required, Validators.min(1), Validators.max(200)]]
  })

  produto = this.data;
  produtoCodBarras = this.data.codBarras;

  adicionarEstoque(quantidade: any) {
    this.produto.quantidadeEstoque += quantidade.quantidade;
    this.produtoService.adicionarEstoque(this.produtoCodBarras, quantidade.quantidade).subscribe(data => {
      this.matSnackBar.open('Estoque adicionado com sucesso', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.notification.notificarEstoqueAdicionado(this.produto);
      this.dialogRef.close();
    }, error => {
      console.log(error);
    })
    
  }

  cancelar() {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }
}
