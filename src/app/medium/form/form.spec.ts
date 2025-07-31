import { FormBuilder } from '@angular/forms';
import { FormsRegister } from './form';

describe('Validar formularios', () => {
  let componente: FormsRegister;
  beforeEach(() => {
    componente = new FormsRegister(new FormBuilder());
  });
  it('Debe de crear formulario con dos campos email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
  it('El email debe de ser obligatorio', () => {
    const control = componente.form.get('email');
    control!.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('El email debe de ser correo valido', () => {
    const control = componente.form.get('email');
    control!.setValue('pedro juio');
    expect(control?.valid).toBeFalsy();
  });
});
