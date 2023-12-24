// dialog-nova-categoria.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-dialog-nova-categoria',
  templateUrl: './dialog-nova-categoria.component.html',
  styleUrls: ['./dialog-nova-categoria.component.scss']
})
export class DialogNovaCategoriaComponent implements OnInit {
  form: FormGroup;
  categoriaJaExiste: boolean = true;
  categoriaJaVerificada: boolean = false;
  categoriaModificada: boolean = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovaCategoriaComponent>,
    public categoriaService: CategoriaService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.form.get('nome')!.valueChanges.subscribe(() => {
      this.categoriaModificada = true;
    });


  }

  cadastrarCategoria(): void {
    this.categoriaService.cadastrarCategoria(this.form.value).subscribe(
      (res) => {
        this.notificationService.notificarCategoriaCriada(this.form.value);
        this._snackBar.open('Categoria criada com sucesso!', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
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
        if (res) {
          this.categoriaJaExiste = true
          this.categoriaJaVerificada = true;
        } else {
          this.categoriaJaExiste = false;
        }
        this.categoriaModificada = false;
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
