import { VendaElement } from 'src/app/vendas/vendas.component';
import { VendasService } from 'src/app/service/vendas.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogoService } from 'src/app/service/dialogo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-dialog-delete-confirmation-venda',
  templateUrl: './dialog-delete-confirmation-venda.component.html',
  styleUrls: ['./dialog-delete-confirmation-venda.component.scss']
})
export class DialogDeleteConfirmationVendaComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogDeleteConfirmationVendaComponent>,
    private dialogService: DialogoService, private vendaService: VendasService,
    private _snackBar: MatSnackBar, private notificationService: NotificationService) { }


  vendaObjeto!: VendaElement | null;

  deleteVendaConfirm(): void {
    if (this.vendaObjeto?.id !== undefined) {
      this.vendaService.deleteVenda(this.vendaObjeto?.id).subscribe(
        data => {
          this.openSnackBar();
          this.notificationService.notificarVendaDeletada(data.id);
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
      horizontalPosition: 'center',
    });

  }

  ngOnInit(): void {
    this.dialogService.vendaData$.subscribe(venda => {
      this.vendaObjeto = venda;
    })
  }
}
