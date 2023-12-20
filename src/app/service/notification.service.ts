// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private vendaDeletadaSource = new Subject<number>();

  vendaDeletada$ = this.vendaDeletadaSource.asObservable();

  notificarVendaDeletada(vendaId: number) {
    this.vendaDeletadaSource.next(vendaId);
  }
}
