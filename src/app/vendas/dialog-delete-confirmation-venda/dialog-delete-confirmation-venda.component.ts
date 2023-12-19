import { VendaElement } from 'src/app/vendas/vendas.component';
import { VendasService } from 'src/app/service/vendas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogoService } from 'src/app/service/dialogo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-delete-confirmation-venda',
  templateUrl: './dialog-delete-confirmation-venda.component.html',
  styleUrls: ['./dialog-delete-confirmation-venda.component.scss']
})
export class DialogDeleteConfirmationVendaComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogDeleteConfirmationVendaComponent>,
    private dialogService: DialogoService, private vendaService: VendasService,
    private _snackBar: MatSnackBar) { }


  vendaObjeto!: VendaElement | null;

  deleteVendaConfirm(): void {
    if (this.vendaObjeto?.id !== undefined) {
      this.vendaService.deleteVenda(this.vendaObjeto?.id).subscribe(
        data => {
          this.openSnackBar();
        },
        error => console.error('Erro ao excluir venda:', error)
      );
    }
  }

  closeDialogConfirmation() {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.open('Venda excluída com sucesso!.', 'OK', {
      panelClass: ['classerror'],
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });

  }

  ngOnInit(): void {
    this.dialogService.vendaData$.subscribe(venda => {
      this.vendaObjeto = venda;
    })
  }
}
