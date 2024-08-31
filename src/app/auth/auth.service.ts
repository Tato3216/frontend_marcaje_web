import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,of } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private apiUrl = `${environment.apiUrl}/api/login`;

  constructor(private http: HttpClient) {}
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(email: string, contrasena: string): Observable<any> {
    const loginData = { email, contrasena };
    return this.http.post(this.apiUrl, loginData).pipe(
      tap(response => {
        if (response === 'Validación exitosa') {
          //localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('authToken', 'someToken');
          this.isLoggedIn = true;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Métodos para las llamadas a la API
  postMarcaje(id: number, tipo: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getAuthToken()}`);
    return this.http.post<any>(`${environment.apiUrl}/api/registros/${id}/marcaje/${tipo}`, {}, { headers });
  }

  postSesionInicio(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getAuthToken()}`);
    return this.http.post<any>(`${environment.apiUrl}/api/sesion/inicio/${id}`, {}, { headers });
  }

  putSesionFin(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getAuthToken()}`);
    return this.http.put<any>(`${environment.apiUrl}/api/sesion/fin/${id}`, {}, { headers });
  }

  putEmpleadoEstado(id: number, estado: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getAuthToken()}`);
    return this.http.put<any>(`${environment.apiUrl}/api/empleados/estado/${id}/${estado}`, {}, { headers });
  }

}
