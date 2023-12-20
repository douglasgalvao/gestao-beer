import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VendaElement } from '../vendas/vendas.component';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/enviroment';
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
}
