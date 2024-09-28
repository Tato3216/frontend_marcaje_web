import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private isLoggedIn = false;
  private apiUrl = `${environment.apiUrl}`;
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}
  
  login(username: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, contrasena })
    .pipe(map((response:any) => {
      if (response && response.token ) {
        localStorage.setItem(this.tokenKey, response.token);
      }
      return response;
    }));
  }
  
  logout(): void {
    // Eliminar el token al cerrar sesión
    localStorage.removeItem(this.tokenKey);
  }
  
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  postMarcaje(id: number, tipo: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post<any>(`${environment.apiUrl}/api/registros/${id}/marcaje/${tipo}`, {}, { headers });
  }

  postSesionInicio(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post<any>(`${environment.apiUrl}/api/sesion/inicio/${id}`, {}, { headers });
  }

  putSesionFin(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.put<any>(`${environment.apiUrl}/api/sesion/fin/${id}`, {}, { headers });
  }

  putEmpleadoEstado(id: number, estado: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.put<any>(`${environment.apiUrl}/api/empleados/estado/${id}/${estado}`, {}, { headers });
  }

}
