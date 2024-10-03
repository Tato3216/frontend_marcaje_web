import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isAdmin: boolean = false;
  private userRoleSubscription: Subscription| undefined;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateUserRole();
      }
    });
  }

  registrarEmpleado(): void {
    this.router.navigate(['/add-employee']);
  }

  ngOnInit() {
    this.userRoleSubscription = this.authService.getUserRole().subscribe(role => {
      this.isAdmin = role === 'admin'; // Actualizar isAdmin basado en el rol
    });

    this.updateUserRole();
  }

  ngOnDestroy() {
    if (this.userRoleSubscription) {
      this.userRoleSubscription.unsubscribe();
    }
  }

  updateUserRole() {
    // const userRole = this.authService.getUserRole();
    // this.isAdmin = userRole === 'admin';
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);
  }

  shouldDisplayNavbar(): boolean {
    return this.router.url !== '/login';
  }
}