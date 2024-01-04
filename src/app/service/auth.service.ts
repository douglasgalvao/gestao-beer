import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, shareReplay, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient, private route: Router) { }

  efetuarLogin(login: string, password: string) {

    this.httpCliente.post('http://localhost:8080/auth/login', { login, password }).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.route.navigate(['content/home']);
      }
    );

  }


  isAuthenticated(): Observable<boolean> {
    let token = localStorage.getItem('token');
    let boolean = false;
    if (token != null) {
      return this.httpCliente.get<boolean>('http://localhost:8080/auth/validate', {
        headers: {
          'Authorization': token!
        }
      }).pipe(
        catchError(error => {
          this.route.navigate(['/login']);
          return of(false);
        }),
        shareReplay(1)
      );
    } else {
      return of(false);
    }
  }
}
