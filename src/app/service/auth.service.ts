import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, shareReplay, catchError } from 'rxjs';
import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient, private route: Router, private notificationService: NotificationService,
    private snackbar: MatSnackBar) { }

  efetuarLogin(login: string, password: string) {

    this.httpCliente.post('http://localhost:8080/auth/login', { login, password }).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.route.navigate(['/auth/content/home']);
      }
    );

  }


  isAuthenticated(): Observable<boolean> {
    let token = localStorage.getItem('token');
    if (token != null) {
      return this.httpCliente.get<boolean>('http://localhost:8080/auth/validate', {
        headers: {
          'Authorization': token!
        }
      }).pipe(
        catchError(error => {
          if (error.status == 403) {
            this.snackbar.open('Sessão expirada', 'OK', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            }).afterDismissed().subscribe(() => {
              this.route.navigate(['/login']);
            });
          } else if (error.status == 401) {
            this.snackbar.open('Não possui permissão para acesso ', 'OK', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            }).afterDismissed().subscribe(() => {
              this.route.navigate(['/login']);
            });
          }
          return of(false);
        }),
        shareReplay(1)
      );
    } else {
      return of(false);
    }
  }
}
