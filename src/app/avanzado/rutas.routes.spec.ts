import { Medico } from '../medium2/medico/medico';
import { rutas } from './rutas.routes';

describe('Rutas principales', () => {
  it('Debe de existir la ruta /medico/:id', () => {
    expect(rutas).toContain({
      path: 'medico/:id',
      component: Medico,
    });
  });
});
