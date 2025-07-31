import { Jugador2 } from './jugador2';

describe('Jugador Emitter', () => {
  let jugador2: Jugador2;
  beforeEach(() => {
    jugador2 = new Jugador2();
  });
  it('Debe emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;
    jugador2.hpCambia.subscribe((hp) => {
      nuevoHP = hp;
    });
    jugador2.recibeDanio(1000);
    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir', () => {
    let nuevoHP = 0;
    jugador2.hpCambia.subscribe((hp) => {
      nuevoHP = hp;
    });
    jugador2.recibeDanio(20);
    expect(nuevoHP).toBe(80);
  });

});
