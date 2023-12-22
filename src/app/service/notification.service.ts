// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendaElement, VendaElementRequest } from '../vendas/vendas.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private vendaDeletadaSource = new Subject<number>();
  private vendaCriadaSource = new Subject<VendaElementRequest>();

  vendaCriada$ = this.vendaCriadaSource.asObservable();
  vendaDeletada$ = this.vendaDeletadaSource.asObservable();

  notificarVendaDeletada(vendaId: number) {
    this.vendaDeletadaSource.next(vendaId);
  }



  notificarVendaCriada(venda: VendaElementRequest) {
    this.vendaCriadaSource.next(venda);
  }
}
