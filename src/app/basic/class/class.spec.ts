import { Jugador } from './class';

describe('Pruebas de clase', () => {
  let jugador:Jugador
  beforeAll(()=>{
    jugador = new Jugador()
  })
  beforeEach(()=>{
    jugador.hp = 100
  })
  afterAll(()=>{
    console.log("After All");

  })
  afterEach(()=>{
    console.log("After Each");
  })
  it('Debe de retornar 80 hp, si recibe 20 de daño', () => {

    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 hp, si recibe 50 de daño', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 hp, si recibe 100 o mas de daño', () => {
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
    expect(jugador.recibeDanio(200)).toBe(0)
  });

});
