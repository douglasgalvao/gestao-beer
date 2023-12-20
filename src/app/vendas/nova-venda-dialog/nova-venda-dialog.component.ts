import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms'
import { ClienteElement } from '../vendas.component';
import { environment } from 'src/environments/enviroment';
import { ClienteService } from 'src/app/service/cliente.service';
@Component({
  selector: 'app-nova-venda-dialog',
  templateUrl: './nova-venda-dialog.component.html',
  styleUrls: ['./nova-venda-dialog.component.scss']
})
export class NovaVendaDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<NovaVendaDialogComponent>, private clienteService: ClienteService) { }

  apiUrl = environment.apiUrl;
  clientes!: ClienteElement[]
  clienteControl = new FormControl();
  statusPagamentoControl = new FormControl();
  formaPagamentoControl = new FormControl();
  form = new FormGroup({
    cliente: this.clienteControl,
    formaPagamento: this.formaPagamentoControl,
    statusPagamento: this.statusPagamentoControl
  });

  closeDialogNovaVenda() {
    this.dialog.close();
  }

  trackByClienteFn(index: number, cliente: any): any {
    return cliente.id;
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: ClienteElement[]) => {
      this.clientes = data;
    })
  }

}
