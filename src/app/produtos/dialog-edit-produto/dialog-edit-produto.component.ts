import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CategoriaProdutoElement, ProdutoElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-dialog-edit-produto',
  templateUrl: './dialog-edit-produto.component.html',
  styleUrls: ['./dialog-edit-produto.component.scss']
})
export class DialogEditProdutoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProdutoElement,
    private fb: FormBuilder,
    private categoriaService: CategoriaService
  ) { }

  form = this.fb.group({
    nome: ['', Validators.required],
    preco: [0, Validators.required],
    categoria: [0, Validators.required],
  });

  categorias: CategoriaProdutoElement[] = [];
  produto: ProdutoElement = this.data;
  categoriaAtual: CategoriaProdutoElement = this.data.categoriaProduto;
  ngOnInit(): void {
    this.categoriaService.obterCategorias().subscribe((res) => {
      this.categorias = res;
    });

    this.form.controls.categoria.setValue(this.produto.categoriaProduto.id);

    this.form.controls.nome.setValue(this.produto.nome);
    this.form.controls.preco.setValue(this.produto.preco);

  }


}
