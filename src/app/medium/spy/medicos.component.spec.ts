import { EMPTY, Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const service = new MedicosService(null);
  beforeEach(() => {
    componente = new MedicosComponent(service);
  });

  it('Init: debe de cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(service, 'getMedicos').and.callFake(() => {
      return of(medicos);
    });
    componente.ngOnInit();
    expect(componente.medicos().length).toBeGreaterThan(0);
  });
  it('Debe de arreglar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Juan' };
    spyOn(service, 'agregarMedico').and.returnValue(of(medico));
    componente.agregarMedico();
    expect(componente.medicos()).toContain(medico);
  });
  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'Mensaje de error';
    spyOn(service, 'agregarMedico').and.returnValue(throwError(() => miError));
    componente.agregarMedico();
    expect(componente.mensajeError()).toBe(miError);
  });
  it('Debe llamar al servidor para borrar un médico', () => {
    const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.callFake(() => {
      return true;
    });
    componente.borrarMedico('1');
    expect(spy).toHaveBeenCalledWith('1');
  });

  it('No debe llamar al servidor para borrar un médico', () => {
    const spy = spyOn(service, 'borrarMedico').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false);
    componente.borrarMedico('1');
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
