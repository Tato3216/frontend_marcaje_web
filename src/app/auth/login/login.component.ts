import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
        console.log(response); 
        if (response.message === 'Validación exitosa') {
          this.router.navigate(['/employees']);
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