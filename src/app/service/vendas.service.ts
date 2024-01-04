import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaElement, VendaElementRequest } from '../vendas/vendas.component';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendasService {
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

  getVenda(id: number): Observable<VendaElement> {
    return this.http.get<VendaElement>(this.apiUrl + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteVenda(id: number | null): Observable<any> {
    this.notificationService.notificarVendaDeletada(id!);
    return this.http.delete(this.apiUrl + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  createVenda(venda: VendaElementRequest): Observable<VendaElement> {
    return this.http.post<VendaElement>(this.apiUrl, venda, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

  filtrarVendas(dataInicial: string, dataFinal: string): Observable<VendaElement[]> {

    const params = new HttpParams()
      .set('startDate', dataInicial)
      .set('endDate', dataFinal)

    return this.http.get<VendaElement[]>(this.apiUrl + '/filtrarVendas', {
      params, headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    });
  }

}

