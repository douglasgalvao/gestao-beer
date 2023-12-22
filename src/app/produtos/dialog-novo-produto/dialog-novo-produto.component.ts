
// dialog-novo-produto.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

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
export class DialogNovoProdutoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogNovoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      categoriaProduto: ['', Validators.required],
      preco: ['', Validators.required]
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

