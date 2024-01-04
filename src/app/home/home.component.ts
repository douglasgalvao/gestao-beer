import { NotificationService } from 'src/app/service/notification.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { NovaVendaDialogComponent } from '../vendas/nova-venda-dialog/nova-venda-dialog.component';
import { Router } from '@angular/router';

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

  constructor(private dialog: MatDialog,
    private notificationService: NotificationService,
    private route: Router) {
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.notificationService.isAuthenticated$.subscribe(data => {
      if (!data) {
        this.route.navigate(['/login'])
      }
    });
  }

  abrirDialogVenda() {
    this.dialog.open(NovaVendaDialogComponent, {
      width: 'max-content',
      height: 'max-content',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    });
  }



}
