// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoElement, VendaElement, VendaElementRequest } from '../vendas/vendas.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private vendaDeletadaSource = new Subject<number>();
  private vendaCriadaSource = new Subject<VendaElement>();

  private produtoDeletadoSource = new Subject<number>();
  private produtoCriadoSource = new Subject<ProdutoElement>();

  private estoqueRemovidoSource = new Subject<number>();
  private estoqueAdicionadoSource = new Subject<ProdutoElement>();

  private categoriaDeletadaSource = new Subject<number>();
  private categoriaCriadaSource = new Subject<ProdutoElement>();

  private baixoEstoqueDefinidoSource = new Subject<number>();


  produtoCriado$ = this.produtoCriadoSource.asObservable();
  produtoDeletado$ = this.produtoDeletadoSource.asObservable();

  vendaCriada$ = this.vendaCriadaSource.asObservable();
  vendaDeletada$ = this.vendaDeletadaSource.asObservable();

  categoriaCriada$ = this.categoriaCriadaSource.asObservable();
  categoriaDeletada$ = this.categoriaDeletadaSource.asObservable();

  estoqueAdicionado$ = this.estoqueAdicionadoSource.asObservable();
  estoqueRemovido$ = this.estoqueRemovidoSource.asObservable();

  baixoEstoqueDefinido$ = this.baixoEstoqueDefinidoSource.asObservable();

  constructor() { }

  notificarEstoqueAdicionado(produtoId: ProdutoElement) {
    this.estoqueAdicionadoSource.next(produtoId);
  }

  notificarEstoqueRemovido(produtoId: number) {
    this.estoqueRemovidoSource.next(produtoId);
  }

  notificarVendaDeletada(vendaId: number) {
    this.vendaDeletadaSource.next(vendaId);
  }
  notificarVendaCriada(venda: VendaElement) {
    this.vendaCriadaSource.next(venda);
  }

  notificarProdutoDeletado(produtoId: number) {
    this.produtoDeletadoSource.next(produtoId);
  }

  notificarProdutoCriado(produto: ProdutoElement) {
    this.produtoCriadoSource.next(produto);
  }

  notificarCategoriaDeletada(categoriaId: number) {
    this.categoriaDeletadaSource.next(categoriaId);
  }

  notificarCategoriaCriada(categoria: ProdutoElement) {
    this.categoriaCriadaSource.next(categoria);
  }

  notificarBaixoEstoqueDefinido(produtoId: number) {
    this.baixoEstoqueDefinidoSource.next(produtoId);
  }

}
