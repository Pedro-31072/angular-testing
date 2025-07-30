import { mensaje } from "./string";

describe("Prueba de string", () => {
  it("Debe de regresar un string", () => {
    const resp = mensaje("Fernando");
    expect(typeof resp).toBe("string");
  });
  it("Debe de regresar un saludo con el nombre enviado", () => {
    const parametro = "Fernando";
    const resp = mensaje(parametro);
    expect(resp).toContain(parametro);
  });
});
