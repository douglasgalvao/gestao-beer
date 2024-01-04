import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { categoria_ProdutoElement, ProdutoElement } from "../vendas/vendas.component";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }



  obterCategorias(): Observable<any> {
    return this.http.get('http://localhost:8080/categoria', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  verificarCategoriaExistente(nome: string) {
    return this.http.get('http://localhost:8080/categoria/nome/' + nome, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  cadastrarCategoria(categoria: ProdutoElement) {
    return this.http.post('http://localhost:8080/categoria', categoria, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteCategoria(id: number) {
    return this.http.delete('http://localhost:8080/categoria/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }
}
