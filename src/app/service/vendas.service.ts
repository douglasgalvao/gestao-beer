import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.get<VendaElement[]>(this.apiUrl);
  }

  getVenda(id: number): Observable<VendaElement> {
    return this.http.get<VendaElement>(this.apiUrl + '/' + id);
  }

  deleteVenda(id: number | null): Observable<any> {
    this.notificationService.notificarVendaDeletada(id!);
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createVenda(venda: VendaElementRequest): Observable<VendaElement> {
    return this.http.post<VendaElement>(this.apiUrl, venda);
  }

  filtrarVendas(dataInicial: string, dataFinal: string): Observable<VendaElement[]> {

    const params = new HttpParams()
      .set('startDate', dataInicial)
      .set('endDate', dataFinal);

    return this.http.get<VendaElement[]>(this.apiUrl + '/filtrarVendas', { params });
  }

}
