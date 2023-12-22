import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoElement } from '../vendas/vendas.component';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  cadastrarNovoProduto(produto: any): void {
    console.log('tendeu');
    // return this.http.post(this.apiUrl + '/produto', {});
  }

  getProdutos(): Observable<any> {
    return this.http.get(this.apiUrl + '/produto');
  }
}
