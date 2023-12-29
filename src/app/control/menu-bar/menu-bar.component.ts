import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../../service/drawer.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoElement } from 'src/app/vendas/vendas.component';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  constructor(private drawerService: DrawerService,
    private produtoService: ProdutoService,
    private notificationService: NotificationService) { }

  produtoEstoqueBaixo: ProdutoElement[] = [];

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      produtos => {
        this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
      }
    );

    this.notificationService.vendaCriada$.subscribe(
      () => {
        this.produtoService.getProdutos().subscribe(
          produtos => {
            this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
          }
        );
      }
    );

    this.notificationService.estoqueAdicionado$.subscribe(
      () => {
        this.produtoService.getProdutos().subscribe(
          produtos => {
            this.produtoEstoqueBaixo = produtos.filter(produto => produto.quantidadeEstoque <= 10);
          }
        );
      }
    );

  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }


}
