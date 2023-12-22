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
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto', {});
  }

  getProdutoById(id: number): Observable<ProdutoElement> {
    return this.http.get<ProdutoElement>(this.apiUrl + '/produto/' + id);
  }

  deleteProduto(id: number): Observable<ProdutoElement> {
    return this.http.delete<ProdutoElement>(this.apiUrl + '/produto/' + id);
  }

  getProdutos(): Observable<ProdutoElement[]> {
    return this.http.get<ProdutoElement[]>(this.apiUrl + '/produto');
  }
}
