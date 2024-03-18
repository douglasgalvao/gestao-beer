import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaElement, VendaElementRequest } from '../vendas/vendas.component';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ComandaService {
  private apiUrl = environment.apiUrl + '/venda';

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getVendas(): Observable<VendaElement[]> {
    return this.http.get<VendaElement[]>(this.apiUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

}

