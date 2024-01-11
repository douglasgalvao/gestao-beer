import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendasService } from 'src/app/service/vendas.service';
import { VendaElement } from 'src/app/vendas/vendas.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  vendas: VendaElement[] = [];

  constructor(private dialog: MatDialog, private vendaService: VendasService) { }


  ngOnInit(): void {
    this.vendaService.getVendas().subscribe((vendas) => {
      this.vendas = vendas;
    });
  }
}
