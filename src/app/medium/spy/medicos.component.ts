import { Component, OnInit, signal } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: ` <p>medicos works!</p> `,
  styles: [],
})
export class MedicosComponent implements OnInit {
  public readonly medicos = signal<any>([]);
  public readonly mensajeError = signal('');

  constructor(public _medicoService: MedicosService) {}

  ngOnInit() {
    this._medicoService
      .getMedicos()
      .subscribe((medicos: any) => {
        this.medicos.set(medicos)
      });
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico).subscribe(
      (medicoDB: any) => this.medicos().push(medicoDB),
      (err: string) => {
console.log(err);

        this.mensajeError.set(err)
      }
    );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico');

    if (confirmar) {
      this._medicoService.borrarMedico(id);
    }
  }
}
