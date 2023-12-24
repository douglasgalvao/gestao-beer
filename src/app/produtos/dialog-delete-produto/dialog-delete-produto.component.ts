import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-dialog-delete-produto',
  templateUrl: './dialog-delete-produto.component.html',
  styleUrls: ['./dialog-delete-produto.component.scss']
})
export class DialogDeleteProdutoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProdutoElement,
    private dialogRef: MatDialogRef<DialogDeleteProdutoComponent>, private produtoService: ProdutoService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar) { }

  produtoObject!: ProdutoElement;

  deleteProdutoConfirm() {
    this.produtoService.deleteProduto(this.produtoObject.id).subscribe();
    this.notificationService.notificarProdutoDeletado(this.produtoObject.id);
    this._snackBar.open('Produto deletado com sucesso!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.dialogRef.close();
  }

  closeDialogConfirmation() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.produtoObject = this.data;
  }

}
