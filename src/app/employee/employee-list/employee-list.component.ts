import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  empleados: any[] = [];

  constructor(
    private empleadoService: EmpleadoService, 
    private router: Router,
    private authService: AuthService )
  {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe(
      (data) => {
        console.log('Empleados obtenidos:', data);
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

  editEmployee(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/employees/edit', id]);
    }
  }

  marcarTracking(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/time-tracking', id]);
      console.log('ruta',id);
    }
  }
}