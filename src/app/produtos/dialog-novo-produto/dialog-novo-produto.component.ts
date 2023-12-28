
// dialog-novo-produto.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { CategoriaProdutoElement, ProdutoElement } from 'src/app/vendas/vendas.component';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { NotificationService } from 'src/app/service/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-novo-produto',
  templateUrl: './dialog-novo-produto.component.html',
  styleUrls: ['./dialog-novo-produto.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})

export class DialogNovoProdutoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      categoriaProduto: ['', Validators.required],
      preco: ['', Validators.required],
      codBarras: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]],
    });
  }

  form: FormGroup;
  categorias!: CategoriaProdutoElement[];
  produtoJaExiste: boolean = true;
  produtoJaVerificada: boolean = false;
  produtoModificada: boolean = false;




  ngOnInit(): void {
    this.categoriaService.obterCategorias().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => {
        console.error('Erro ao obter categorias', error);
      }
    );
  }

  cadastrarNovoProduto(produto: ProdutoElement) {
    produto.preco = parseFloat(produto.preco.toString().replace(',', '.'));
    this.produtoService.cadastrarNovoProduto(produto).subscribe(
      produto => {
        this.notificationService.notificarProdutoCriado(produto);
        this._snackBar.open('Produto cadastrado com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.dialogRef.close(produto);
      },
      error => {
        console.error('Erro ao cadastrar produto', error);
      }
    );
  }

  verificarProduto() {
    this.produtoService.verificarProdutoJaExiste(this.form.value.nome).subscribe(
      (res) => {
        if (res) {
          this.produtoJaExiste = true
        } else {
          this.produtoJaExiste = false;
        }
        this.produtoJaVerificada = true;
        this.produtoModificada = false;
      },
      (err) => {
        this.produtoJaExiste = false;
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

