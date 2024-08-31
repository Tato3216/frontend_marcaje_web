import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { environment } from '../../enviroments/enviroment';


// export interface Empleado {
//   id?: number;
//   nombre: string;
//   email: string;
//   contrasena?: string;
//   activo: number;
// }

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService  {
  private baseUrl  = `${environment.apiUrl}/api/empleados`;
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  addEmployee(employee: Employee): Observable<HttpResponse<Employee>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<Employee>(this.baseUrl, employee);
    return this.http.post<Employee>(this.baseUrl, employee, { headers, observe: 'response' });
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${employee.id}`, employee);
  }

  updateEmployeeStatus(id: number, status: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/estado/${id}/${status}`, {});
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}