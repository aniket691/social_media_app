import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterDTO } from '../../models/RegisterDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterDTO = { username: '', email: '', password: '' };
  message: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Registration successful:', response);
          this.message = 'Registration successful!';
          // Navigate to login page after successful registration
          setTimeout(() => {
             this.router.navigate(['/login']);
          }, 2000); // Wait for 2 seconds before redirecting
        } else {
          this.message = response.message || 'Registration failed. Please try again.';
          
        }
      },
      (error: any) => {
        console.error('Registration failed:', error);
        this.message = 'Registration failed. Please try again.';
      }
    );
  }
}
