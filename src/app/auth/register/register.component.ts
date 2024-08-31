// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   nombre: string = '';
//   email: string = '';
//   contrasena: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   register(): void {
//     this.authService.register(this.nombre, this.email, this.contrasena).subscribe(
//       response => {
//         console.log('Usuario registrado con éxito');
//         this.router.navigate(['/login']); // Redirige al login
//       },
//       error => {
//         console.error('Error de registro', error);
//       }
//     );
//   }
// }
