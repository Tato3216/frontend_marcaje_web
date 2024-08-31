import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    activo: 1 // Asumimos que el empleado se crea activo por defecto
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
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}