import { ClienteElement } from './../vendas/vendas.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;


  getClientes(): Observable<any> {
    return this.http.get(this.apiUrl + '/cliente', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }


  getCliente(id: number): Observable<any> {
    return this.http.get<ClienteElement>(this.apiUrl + '/cliente/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

}
