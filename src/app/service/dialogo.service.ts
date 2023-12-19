import { Injectable } from '@angular/core';
import { VendaElement } from '../vendas/vendas.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  constructor() { }
  private vendaDataSubject = new BehaviorSubject<VendaElement | null>(null);
  vendaData$ = this.vendaDataSubject.asObservable();

  setVendaData(data: VendaElement) {
    this.vendaDataSubject.next(data);
  }

  deleteVenda(id: number | undefined) {
    console.log('Venda excluída com sucesso! Id:', id);
  }
}
