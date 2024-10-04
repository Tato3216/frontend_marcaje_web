import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private baseUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  iniciarSesion(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/sesion/inicio/${id}`, {});
  }

  finalizarSesion(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/sesion/fin/${id}`, {});
  }

  registrarMarcaje(id: number, tipo: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/registros/${id}/marcaje/${tipo}`, {});
  }
}