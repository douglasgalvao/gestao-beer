import { NotificationService } from 'src/app/service/notification.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private authService: AuthService, private notificationService: NotificationService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          if (localStorage.getItem('token') != null) {
            localStorage.removeItem('token');
          }
          this.router.navigate(['/login']);
          return;
        }
      })
    );
  }
}