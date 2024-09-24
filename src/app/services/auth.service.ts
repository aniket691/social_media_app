import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegisterDTO } from '../models/RegisterDTO';
import { LoginDTO } from '../models/LoginDTO';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dummyRegisteredUsers: RegisterDTO[] = [
    { username: 'testuser', email: 'test@example.com', password: 'test123' }
  ];

  constructor() {}

  // Simulating a registration process
  register(data: RegisterDTO): Observable<any> {
    // Check if the user is already registered
    const userExists = this.dummyRegisteredUsers.some(
      user => user.email === data.email
    );

    if (userExists) {
      return of({ success: false, message: 'User already registered' }).pipe(
        delay(1000) // Simulate server delay
      );
    }

    // Otherwise, add the new user to the dummyRegisteredUsers
    this.dummyRegisteredUsers.push(data);
    return of({ success: true, message: 'Registration successful' }).pipe(
      delay(1000) // Simulate server delay
    );
  }

  // Dummy login function (you can extend this for actual login)
  login(data: LoginDTO): Observable<any> {
    const validUser = this.dummyRegisteredUsers.find(
      user => user.email === data.email && user.password === data.password
    );

    if (validUser) {
      return of({ success: true, message: 'Login successful' }).pipe(
        delay(1000) // Simulate server delay
      );
    }

    return of({ success: false, message: 'Invalid credentials' }).pipe(
      delay(1000) // Simulate server delay
    );
  }
}
