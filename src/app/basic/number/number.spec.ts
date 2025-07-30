import { incrementar } from "./number";

describe("Pruebas de numeros", () => {
  it("Debe de retornar 100, si el numero ingresado es mayor a 100", () => {
    const resultado = incrementar(300);
    expect(resultado).toBe(100)
  });
  it("Debe de retornar el numero ingresado + 1 si no es mayor a 100", () => {
    const resultado = incrementar(50);
    expect(resultado).toBe(51)
  });
  it("El resultado no debe ser mayor a 100", () => {
    const resultado = incrementar(100);
    expect(resultado).toBeLessThanOrEqual(100)
  });
});
