import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { VendasService } from 'src/app/service/vendas.service';
import { VendaElement } from 'src/app/vendas/vendas.component';
import { DialogNovoProdutoComponent } from 'src/app/produtos/dialog-novo-produto/dialog-novo-produto.component';
import { NovaVendaDialogComponent } from 'src/app/vendas/nova-venda-dialog/nova-venda-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  vendas: VendaElement[] = [];
  actionsButtons = [
    {
      title: 'Novo Produto',
      icon: 'fastfood',
      action: () => {
        this.dialog.open(DialogNovoProdutoComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Nova Venda',
      icon: 'sell',
      action: () => {
        this.dialog.open(NovaVendaDialogComponent, {
          width: 'max-content',
          height: 'max-content',
          panelClass: '',
          enterAnimationDuration: '350ms',
          exitAnimationDuration: '350ms'
        });
      },
    },
    {
      title: 'Add Item Comanda',
      icon: 'assignment',
      action: () => { console.log('implementar') },
    }
  ];

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
