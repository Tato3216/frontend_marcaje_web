import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private apiUrl = '/api'; // Asegúrate de que esta URL coincida con tu configuración de backend

  constructor(private http: HttpClient) {}

  marcarEntradaSalida(userId: number, tipo: 'ENTRADA' | 'SALIDA'): Observable<any> {
    return this.http.post(`${this.apiUrl}/registros/${userId}/marcaje/${tipo}`, {});
  }

  iniciarSesion(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/sesion/inicio/${userId}`, {});
  }

  finalizarSesion(sessionId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/sesion/fin/${sessionId}`, {});
  }
}