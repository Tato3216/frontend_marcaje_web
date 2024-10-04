import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    id: 0,
    nombre: '',
    email: '',
    contrasena: '',
    activo: 1,
    username: ''
  };
  isEditing = false;

  constructor(
    private employeeService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.employeeService.getEmployeeById(+id).subscribe(data => {
        this.employee = data;
      });
    }
  }
  saveEmployee(): void {
    const updatedEmployee = {
      email: this.employee.email,
      username: this.employee.username,
      contrasena: this.employee.contrasena
    };
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.employee.id, updatedEmployee).subscribe(() => {
        this.employeeService.updateEmployeeStatus(this.employee.id, this.employee.activo).subscribe(() => {
        alert('Empleado actualizado con éxito');
        this.router.navigate(['/employees']);
      });
      });
    } else {
      this.employeeService.addEmployee(updatedEmployee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}