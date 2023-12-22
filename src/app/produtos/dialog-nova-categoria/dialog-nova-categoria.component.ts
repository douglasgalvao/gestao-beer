// dialog-nova-categoria.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-dialog-nova-categoria',
  templateUrl: './dialog-nova-categoria.component.html',
  styleUrls: ['./dialog-nova-categoria.component.scss']
})
export class DialogNovaCategoriaComponent {
  form: FormGroup;
  categoriaJaExiste: boolean = false;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovaCategoriaComponent>,
    public categoriaService: CategoriaService
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  cadastrarCategoria(): void {
    this.categoriaService.cadastrarCategoria(this.form.value).subscribe(
      (res) => {
        this.dialogRef.close(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  verificarCategoria() {
    this.categoriaService.verificarCategoriaExistente(this.form.value.nome).subscribe(
      (res) => {
        res ? this.categoriaJaExiste = true : this.categoriaJaExiste = false;
      },
      (err) => {
        this.categoriaJaExiste = false;
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
