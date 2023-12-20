import { ClienteElement } from './../vendas/vendas.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  getClientes(): Observable<any> {
    return this.http.get(this.apiUrl + '/cliente');
  }

}