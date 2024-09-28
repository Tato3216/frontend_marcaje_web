import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const token = localStorage.getItem('auth-token');
    // const token = this.authService.getToken();
    console.log('Token para el guard:', token);
    if (token) {
      return true; // Permite el acceso si hay un token
    } else {
      this.router.navigate(['/login']); // Redirige a login si no hay token
      return false; // Bloquea el acceso
    }
  }
}