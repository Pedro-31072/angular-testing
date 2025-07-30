import { usuarioIngresado, usuarioNoIngresado } from './boolean';

describe('Prueba booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
  });
  it('Debe de retornar false', () => {
    const res = usuarioNoIngresado();
    expect(res).not.toBeTruthy();
  });
});
