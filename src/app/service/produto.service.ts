import { ProdutoElement } from './../vendas/vendas.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  cadastrarNovoProduto(produto: ProdutoElement): Observable<ProdutoElement> {
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto', {
      nome: produto.nome,
      categoriaProduto: produto.categoriaProduto,
      preco: produto.preco,
      codBarras: produto.codBarras
    });
  }

  verificarProdutoJaExiste(nome: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/produto/nome/' + nome);
  }

  getProdutoById(id: number): Observable<ProdutoElement> {
    return this.http.get<ProdutoElement>(this.apiUrl + '/produto/' + id);
  }

  getProdutoByCodBarras(codBarras: string): Observable<ProdutoElement> {
    return this.http.get<ProdutoElement>(this.apiUrl + '/produto/cod/' + codBarras);
  }

  deleteProduto(id: number): Observable<ProdutoElement> {
    return this.http.delete<ProdutoElement>(this.apiUrl + '/produto/' + id);
  }

  getProdutos(): Observable<ProdutoElement[]> {
    return this.http.get<ProdutoElement[]>(this.apiUrl + '/produto');
  }
}
