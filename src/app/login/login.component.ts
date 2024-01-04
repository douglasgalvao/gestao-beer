import { NotificationService } from 'src/app/service/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NotificationService,
    private snackbar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.authService.efetuarLogin(this.loginForm.value.username, this.loginForm.value.password);
  }

  ngOnInit(): void {
    this.notification.isAuthenticated$.subscribe(data => {
      this.snackbar.open('Você não está logado', 'OK', {
        duration: 3000
      });
    });
  }

}