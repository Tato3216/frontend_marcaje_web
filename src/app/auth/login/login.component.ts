import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    console.log('Datos enviados:', { email: this.email, contrasena: this.contrasena });
    this.authService.login(this.email, this.contrasena).subscribe(
      response => {
        console.log('Login response:', response);
        if (response.token) {
          this.authService.checkRole();
          console.log('Token:', response.token);
          localStorage.setItem('username', response.username);
          this.router.navigate(['/home']);
        } else {
          alert('Login failed');
        }
      },
      error => {
        console.error('Error al intentar loguearse:', error);
      }
    );
  }
}