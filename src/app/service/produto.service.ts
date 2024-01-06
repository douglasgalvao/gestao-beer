import { ProdutoElement } from './../vendas/vendas.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoAPIResponse, ProdutoFileIdResponse } from '../produtos/produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;

  cadastrarNovoProduto(produto: ProdutoElement): Observable<ProdutoElement> {
    
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto', {
      nome: produto.nome,
      categoria_Produto: produto.categoria_Produto,
      preco: produto.preco,
      img: produto.img,
      codBarras: produto.codBarras,
      quantidadeEstoque: produto.quantidadeEstoque
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  atualizarProduto(produto: ProdutoElement): Observable<ProdutoElement> {
    return this.http.put<ProdutoElement>(this.apiUrl + '/produto', {
      id: produto.id,
      nome: produto.nome,
      categoria_Produto: produto.categoria_Produto,
      preco: produto.preco,
      img: produto.img,
      codBarras: produto.codBarras
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  adicionarEstoque(codBarras: string, quantidade: number): Observable<ProdutoElement> {
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto/adicionarEstoque', {
      codBarras: codBarras,
      quantidade: quantidade
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  verificarProdutoJaExiste(nome: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/produto/nome/' + nome, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  salvarImagemProduto(fotoProduto: File): Observable<ProdutoFileIdResponse> {
    let endpoint = "http://localhost:8080/produto/upload";
    // Crie um objeto FormData e adicione os campos necessários
    const formData = new FormData();
    formData.append('img', fotoProduto);

    // Faça a requisição usando o HttpClient
    return this.http.post<ProdutoFileIdResponse>(endpoint, formData, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getProdutoById(id: number): Observable<ProdutoElement> {
    return this.http.get<ProdutoElement>(this.apiUrl + '/produto/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getProdutoByCodBarras(codBarras: string): Observable<ProdutoElement> {
    return this.http.get<ProdutoElement>(this.apiUrl + '/produto/cod/' + codBarras, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteProduto(id: number): Observable<ProdutoElement> {
    return this.http.delete<ProdutoElement>(this.apiUrl + '/produto/' + id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getProdutos(): Observable<ProdutoElement[]> {
    return this.http.get<ProdutoElement[]>(this.apiUrl + '/produto', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  getProdutoAPIByCode(codBarras: string): Observable<ProdutoAPIResponse> {
    return this.http.get<ProdutoAPIResponse>('http://localhost:8080/produto/find/' + codBarras, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }


}
