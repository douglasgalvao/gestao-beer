import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoriaProdutoElement } from "../vendas/vendas.component";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }



  obterCategorias(): Observable<any> {
    return this.http.get('http://localhost:8080/categoria');
  }

  verificarCategoriaExistente(nome: string) {
    return this.http.get('http://localhost:8080/categoria/nome/' + nome);
  }

  cadastrarCategoria(categoria: any) {
    return this.http.post('http://localhost:8080/categoria', categoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete('http://localhost:8080/categoria/' + id);
  }
}
