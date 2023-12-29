import { ProdutoElement } from './../vendas/vendas.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoFileIdResponse } from '../produtos/produtos.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl;
  apiSecretKey = 'e06a4f905e4a74854f99';

  cadastrarNovoProduto(produto: ProdutoElement): Observable<ProdutoElement> {
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto', {
      nome: produto.nome,
      categoriaProduto: produto.categoriaProduto,
      preco: produto.preco,
      img: produto.img,
      codBarras: produto.codBarras
    });
  }

  atualizarProduto(produto: ProdutoElement): Observable<ProdutoElement> {
    return this.http.put<ProdutoElement>(this.apiUrl + '/produto', {
      id: produto.id,
      nome: produto.nome,
      categoriaProduto: produto.categoriaProduto,
      preco: produto.preco,
      img: produto.img,
      codBarras: produto.codBarras
    });
  }

  adicionarEstoque(codBarras: string, quantidade: number): Observable<ProdutoElement> {
    return this.http.post<ProdutoElement>(this.apiUrl + '/produto/adicionarEstoque', {
      codBarras: codBarras,
      quantidade: quantidade
    });
  }


  verificarProdutoJaExiste(nome: string): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/produto/nome/' + nome);
  }

  salvarImagemProduto(fotoProduto: File): Observable<ProdutoFileIdResponse> {
    let endpoint = "https://upload.uploadcare.com/base/?jsonerrors=1";

    // Crie um objeto FormData e adicione os campos necessários
    const formData = new FormData();
    formData.append('file', fotoProduto);
    formData.append('UPLOADCARE_PUB_KEY', 'fb4b6a885814a953c3d7');
    formData.append('UPLOADCARE_STORE', 'auto');
    formData.append('source', 'local');

    // Faça a requisição usando o HttpClient
    return this.http.post<ProdutoFileIdResponse>(endpoint, formData);
  }

  // deletarImagemProduto(imgUrl: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Uploadcare.Simple ${this.apiSecretKey}`,
  //     'Accept': 'application/vnd.uploadcare-v0.7+json'
  //   });
  //   imgUrl = imgUrl.replace('https://ucarecdn.com/', 'https://ucarecdn.com/files/');
  //   imgUrl = imgUrl + '/storage/';
  //   const params = new HttpParams()
  //     .set('UPLOADCARE_STORE', 'auto');

  //   return this.http.delete<any>(imgUrl, { headers, params });
  // }

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
