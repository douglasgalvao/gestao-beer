
// dialog-novo-produto.component.ts
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { categoria_ProdutoElement, ProdutoElement } from 'src/app/vendas/vendas.component';
import { ProdutoService } from 'src/app/service/produto.service';
import { NotificationService } from 'src/app/service/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/service/categoria.service';
declare var page: any
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

export class DialogNovoProdutoComponent implements OnInit, AfterViewInit {
  gerarCodBarras: boolean = false;
  form: FormGroup;
  existsPhoto: boolean = false;
  photoImgUrlAPI: string = '';
  nomeProdutoAPI: string = '';
  callAPIRequested: boolean = false;
  categorias!: categoria_ProdutoElement[];
  fotoProduto: File | undefined;
  fotoSelecionada: boolean = false;
  produtoJaExiste: boolean = true;
  produtoJaVerificada: boolean = false;
  produtoModificada: boolean = false;

  @ViewChild('codBarrasElement') codBarrasInput!: ElementRef<HTMLInputElement> | undefined;



  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private produtoService: ProdutoService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar,
    private categoriaService: CategoriaService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      categoria_Produto: ['', Validators.required],
      preco: ['', Validators.required],
      codBarras: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]],
      estoqueInicial: ['', Validators.required]
    });

  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.codBarrasInput?.nativeElement.focus();
    }, 0);
  }

  ngOnInit(): void {
    this.categoriaService.obterCategorias().subscribe(
      (res) => {
        this.categorias = res;
      }
    );
  }

  salvarFotoAtual(event: any) {
    this.fotoProduto = event.target.files[0] as File;
    this.fotoSelecionada = true;
  }

  cadastrarNovoProduto(produto: ProdutoElement) {
    if (!this.photoImgUrlAPI.length && this.fotoSelecionada) {
      this.produtoService.salvarImagemProduto(this.fotoProduto!).subscribe(
        res => {
          produto.preco = parseFloat(produto.preco.toString().replace(',', '.'));
          produto.img = 'https://ucarecdn.com/' + res.file + '/';
          produto.codBarras = this.form.get('codBarras')?.value;
          produto.quantidadeEstoque = this.form.value.estoqueInicial;
          this.produtoService.cadastrarNovoProduto(produto).subscribe(
            produto => {
              this.notificationService.notificarProdutoCriado(produto);
              this._snackBar.open('Produto cadastrado com sucesso!', 'Fechar', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
              this.dialogRef.close(produto);
            }
          );
        }
      );
    } else if (this.photoImgUrlAPI.length && !this.fotoSelecionada) {
      produto.preco = parseFloat(produto.preco.toString().replace(',', '.'));
      produto.img = this.photoImgUrlAPI;
      produto.codBarras = this.form.get('codBarras')?.value;
      produto.quantidadeEstoque = this.form.value.estoqueInicial;
      this.produtoService.cadastrarNovoProduto(produto).subscribe(
        produto => {
          this.notificationService.notificarProdutoCriado(produto);
          this._snackBar.open('Produto cadastrado com sucesso!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.dialogRef.close(produto);
        }
      );
    }
  }

  gerarCodBarrasProduto() {
    this.gerarCodBarras = true;
    this.form.get('codBarras')?.disable();
  }

  verificarProduto() {
    this.produtoService.getProdutoByNome(this.form.value.nome).subscribe(
      (res) => {
        if (res) {
          this.produtoJaExiste = true
          this.produtoJaVerificada = true;
          return;
        } else {
          this.produtoService.getProdutoByCodBarras(this.form.value.codBarras).subscribe(
            (res) => {
              if (res) {
                this.produtoJaExiste = true
                this.produtoJaVerificada = true;
                return;
              } else {
                this.produtoJaExiste = false;
                this.produtoJaVerificada = true;
                return;
              }
            }
          );
        }
      }
    );
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}

