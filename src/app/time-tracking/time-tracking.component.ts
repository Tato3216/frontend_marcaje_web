import { Component } from '@angular/core';
import { TimeTrackingService } from '../services/time-tracking.service';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.css'] // Corregir el nombre de la propiedad: styleUrls
})
export class TimeTrackingComponent{
  hasEntry: boolean = false;
  hasExit: boolean = false;
  showEntryConfirmation: boolean = false;
  showExitConfirmation: boolean = false;
  sessionActive: boolean = true;
  userId: number = 1;
  sessionId: number | null = null;

  constructor(
    private timeTrackingService: TimeTrackingService
  ) {}

  onMarkEntry(): void {
    this.timeTrackingService.marcarEntradaSalida(this.userId, 'ENTRADA').subscribe(response => {
      this.hasEntry = true;
      this.showEntryConfirmation = false;
    });
  }

  onMarkExit(): void {
    this.timeTrackingService.marcarEntradaSalida(this.userId, 'SALIDA').subscribe(response => {
      this.hasExit = true;
      this.showExitConfirmation = false;
    });
  }

  iniciarSesion(): void {
    this.timeTrackingService.iniciarSesion(this.userId).subscribe(response => {
      this.sessionId = response.id; // Suponiendo que el backend devuelve el ID de la sesión
      this.sessionActive = true;
    });
  }

  finalizarSesion(): void {
    if (this.sessionId) {
      this.timeTrackingService.finalizarSesion(this.sessionId).subscribe(() => {
        this.sessionActive = false;
        this.sessionId = null;
      });
    }
  }

  logout(): void {
    // Implementa la lógica para cerrar sesión si es necesario
    // Esto podría incluir llamar a un servicio de autenticación para manejar la lógica de cierre de sesión.
  }

  viewHistory(): void {
    // Implementa la lógica para ver el historial de registros si es necesario
    // Esto podría incluir redirigir a una página de historial o mostrar un modal con la información.
  }

  refreshStatus(): void {
    // Implementa la lógica para actualizar el estado del seguimiento de tiempo si es necesario
    // Esto podría incluir llamar a un servicio para obtener el estado actual.
  }

  confirmEntry(): void {
    this.onMarkEntry();
  }

  confirmExit(): void {
    this.onMarkExit();
  }

  cancel(): void {
    this.showEntryConfirmation = false;
    this.showExitConfirmation = false;
  }
}