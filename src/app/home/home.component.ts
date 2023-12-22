import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DialogoService } from '../service/dialogo.service';
import { MatDialog } from '@angular/material/dialog';
import { NovaVendaDialogComponent } from '../vendas/nova-venda-dialog/nova-venda-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id'];

  // vendas: VendaElement[] = HistoricoVendasHome;

  // dataSource = new MatTableDataSource(this.vendas);

  constructor(private dialog: MatDialog, private dialogService: DialogoService) {
    this.dialog = dialog;
  }

  ngOnInit(): void {
  }

  abrirDialogVenda() {
    this.dialog.open(NovaVendaDialogComponent,{
      

    });
  }



}
