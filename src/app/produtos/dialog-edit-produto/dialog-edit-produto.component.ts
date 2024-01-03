import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/service/categoria.service';
import { NotificationService } from 'src/app/service/notification.service';
import { categoria_ProdutoElement, ProdutoElement, ProdutoElementRequest } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-dialog-edit-produto',
  templateUrl: './dialog-edit-produto.component.html',
  styleUrls: ['./dialog-edit-produto.component.scss']
})
export class DialogEditProdutoComponent implements OnInit {



  categorias: categoria_ProdutoElement[] = [];
  produto: ProdutoElementRequest = this.data;
  form = this.fb.group({
    nome: ['', Validators.required],
    preco: [0, Validators.required],
    categoria: [0, Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProdutoElementRequest,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private dialogRef: MatDialogRef<DialogEditProdutoComponent>,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.categoriaService.obterCategorias().subscribe((res) => {
      this.categorias = res;
      let categoria = this.categorias.find(e => (e.nome.toUpperCase() == this.data.categoria_Produto.toUpperCase()));
      this.form.controls.categoria?.setValue(categoria?.id!);
      this.form.controls.nome?.setValue(this.produto.nome);
      this.form.controls.preco?.setValue(this.produto.preco);
    });


  }

  saveProductEdited(e: any) {
    console.log(e);
  }

  closeEditDialog() {
    this.dialogRef.close();
  }


}
