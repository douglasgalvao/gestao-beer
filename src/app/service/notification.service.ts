// notification.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private vendaDeletadaSource = new Subject<void>();

  vendaDeletada$ = this.vendaDeletadaSource.asObservable();

  notificarVendaDeletada() {
    this.vendaDeletadaSource.next();
  }
}
