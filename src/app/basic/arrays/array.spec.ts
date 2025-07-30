import { regresarRobots } from './arrays';

describe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const res = regresarRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Esta Megaman y ultrón', () => {
    const res = regresarRobots();
    expect(res).toContain("Megaman");
    expect(res).toContain("Maxinger Z");
  });
  
});
