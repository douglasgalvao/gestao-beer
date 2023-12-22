import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  verificarCategoriaExistente(nome: string) {
    return this.http.get('http://localhost:8080/categoria/' + nome);
  }

  cadastrarCategoria(categoria: any) {
    return this.http.post('http://localhost:8080/categoria', categoria);
  }
}
