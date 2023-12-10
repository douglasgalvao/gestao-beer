import { Component, OnInit } from '@angular/core';
import { MatDialogTitle } from '@angular/material/dialog';
import { VendaElement } from 'src/app/vendas/vendas.component';



@Component({
  selector: 'app-nova-venda-dialog',
  templateUrl: './nova-venda-dialog.component.html',
  styleUrls: ['./nova-venda-dialog.component.scss']
})
export class NovaVendaDialogComponent implements OnInit {
  constructor() {
  }

  venda!: VendaElement

  ngOnInit(): void {

  }
}
