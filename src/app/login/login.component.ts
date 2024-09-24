// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginDTO } from '../models/LoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginDTO = { email: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        this.router.navigate(['/feed']); // Redirect to the dashboard or other page
      },
      (error: any) => {
        console.error('Login failed:', error);
        this.message = 'Login failed. Please check your credentials.';
      }
    );
  }
}
