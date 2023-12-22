import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { CategoriaProdutoElement, ProdutoElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-dialog-delete-categoria',
  templateUrl: './dialog-delete-categoria.component.html',
  styleUrls: ['./dialog-delete-categoria.component.scss']
})
export class DialogDeleteCategoriaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProdutoElement,
    private dialogRef: MatDialogRef<DialogDeleteCategoriaComponent>, private produtoService: ProdutoService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar) { }

  produtoObject!: CategoriaProdutoElement;

  deleteProdutoConfirm() {
    this.produtoService.deleteProduto(this.produtoObject.id).subscribe();
    this.notificationService.notificarCategoriaDeletada(this.produtoObject.id);
    this._snackBar.open('Categoria deletada com sucesso!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
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
