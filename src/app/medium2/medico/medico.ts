import { Component, inject } from '@angular/core';
import { MedicoService } from './medico-service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.html',
  styles: ``,
})
export class Medico {
  constructor(private medicoService: MedicoService) {}
  medicos: any[] = [];
  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }
  obtenerMedicos() {
    this.medicoService
      .getMedicos()
      .subscribe((medicos) => (this.medicos = medicos));
  }
}
