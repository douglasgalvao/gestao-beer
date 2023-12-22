// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoElement, VendaElement, VendaElementRequest } from '../vendas/vendas.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private vendaDeletadaSource = new Subject<number>();
  private vendaCriadaSource = new Subject<VendaElementRequest>();

  private produtoDeletadoSource = new Subject<number>();
  private produtoCriadoSource = new Subject<ProdutoElement>();

  produtoCriado$ = this.produtoCriadoSource.asObservable();
  produtoDeletado$ = this.produtoDeletadoSource.asObservable();
  
  vendaCriada$ = this.vendaCriadaSource.asObservable();
  vendaDeletada$ = this.vendaDeletadaSource.asObservable();

  notificarVendaDeletada(vendaId: number) {
    this.vendaDeletadaSource.next(vendaId);
  }
  notificarVendaCriada(venda: VendaElementRequest) {
    this.vendaCriadaSource.next(venda);
  }

  notificarProdutoDeletado(produtoId: number) {
    this.produtoDeletadoSource.next(produtoId);
  }

  notificarProdutoCriado(produto: ProdutoElement) {
    this.produtoCriadoSource.next(produto);
  }

}
