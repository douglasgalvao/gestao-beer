import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { VendasService } from 'src/app/service/vendas.service';
import { VendaElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  vendas: VendaElement[] = [];

  constructor(private dialog: MatDialog, private vendaService: VendasService, private notificationService: NotificationService) { }


  ngOnInit(): void {
    this.vendaService.getVendas().subscribe((vendas) => {
      this.vendas = vendas;
    });

    this.notificationService.vendaCriada$.subscribe(() => {
      this.vendaService.getVendas().subscribe((vendas) => {
        this.vendas = vendas;
      });
    });
  }
}
