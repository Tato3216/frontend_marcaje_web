import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  empleados: Employee[] = [];
  // empleados: any[] = [];

  // private apiUrl  = `${environment.apiUrl}/api/empleados`;
  constructor(private empleadoService: EmpleadoService, private router: Router,private http: HttpClient
  ,private authService: AuthService )
  {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      data => {
        this.empleados = data;
      },
      err => {
        console.error('Error obteniendo empleados', err);
      }
    );
  }

  // getEmpleados(): void {
  //   this.http.get<any[]>(this.apiUrl).subscribe(
  //     data => {
  //       this.empleados = data;
  //       console.log('Empleados:', this.empleados);
  //     },
  //     error => {
  //       console.error('Error al cargar los empleados:', error);
  //     }
  //   );
  // }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      (data) => {
        console.log('Empleados obtenidos:', data); // Verifica si los datos llegan al componente
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener empleados:', error); // Para verificar si hay errores
      }
    );
  }

  registrarEmpleado(): void {
    this.router.navigate(['/add-employee']);
  }

  editEmployee(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/employees/edit', id]);
    }
  }

  marcarEntrada(id: number | undefined): void {
    if (id !== undefined) {
      this.authService.postMarcaje(id, 'ENTRADA').subscribe(
        response => {
          console.log('Marcaje de entrada realizado:', response);
        },
        error => {
          console.error('Error al marcar entrada:', error);
        }
      );
    }
  }

  marcarSalida(id: number | undefined): void {
    if (id !== undefined) {
      this.authService.postMarcaje(id, 'SALIDA').subscribe(
        response => {
          console.log('Marcaje de salida realizado:', response);
        },
        error => {
          console.error('Error al marcar salida:', error);
        }
      );
    }
  }

  iniciarSesion(id: number | undefined): void {
    if (id !== undefined) {
      this.authService.postSesionInicio(id).subscribe(
        response => {
          console.log('Sesión iniciada:', response);
        },
        error => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }

  terminarSesion(id: number | undefined): void {
    if (id !== undefined) {
      this.authService.putSesionFin(id).subscribe(
        response => {
          console.log('Sesión terminada:', response);
        },
        error => {
          console.error('Error al terminar sesión:', error);
        }
      );
    }
  }

  actualizarEstadoEmpleado(id: number | undefined, estado: number): void {
    if (id !== undefined) {
      this.authService.putEmpleadoEstado(id, estado).subscribe(
        response => {
          console.log('Estado del empleado actualizado:', response);
        },
        error => {
          console.error('Error al actualizar estado del empleado:', error);
        }
      );
    }
  }
}