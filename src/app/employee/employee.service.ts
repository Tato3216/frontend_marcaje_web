import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Employee } from './employee.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService  {
  private baseUrl  = `${environment.apiUrl}/api`;
  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any> {
    return this.http.get(`${this.baseUrl}/empleados`).pipe(
      tap((data) => console.log('Datos de empleados:', data)) // Para ver los datos que recibes
    );
    // return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/empleados/${id}`);
    // return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  addEmployee(employee: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<Employee>(this.baseUrl, employee);
    return this.http.post<any>(`${this.baseUrl}/createEmployee`, employee, { headers, observe: 'response' });
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