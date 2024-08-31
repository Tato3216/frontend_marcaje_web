import { Component } from '@angular/core';
import { EmpleadoService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  nombre: string = '';
  email: string = '';
  contrasena: string = '';
  activo: boolean = true;

  constructor(private empleadoService: EmpleadoService) {}

  addEmployee(): void {
    const newEmployee = {
      nombre: this.nombre,
      email: this.email,
      contrasena: this.contrasena,
      activo: this.activo ? 1 : 0
    };

    console.log('Datos del empleado que se enviarán:', newEmployee);

    this.empleadoService.addEmployee(newEmployee).subscribe(
      response => {
        if (response.status === 200) {
        console.log('Empleado agregado con éxito:', response);
        this.resetForm();
        }
      },
      error => {
        console.error('Error al agregar empleado:', error);
      }
    );
  }

  resetForm(): void {
    this.nombre = '';
    this.email = '';
    this.contrasena = '';
    this.activo = true;
  }
}
