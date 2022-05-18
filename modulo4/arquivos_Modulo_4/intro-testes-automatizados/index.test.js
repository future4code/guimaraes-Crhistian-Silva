import {
  calculaAreaRetangulo,
  calculaAreaQuadrado,
  retornaArray,
  retornaObjeto,
  retornaQuadrado,
} from "./index.js";
// const { calculaAreaRetangulo, calculaAreaQuadrado } = require("./index.js");

// const retangulo = {
//   a: 2,
//   b: 3,
//   area: 6,
// };

// console.log(
//   "retangulo:",
//   calculaAreaRetangulo(retangulo.a, retangulo.b),
//   ", e a área correta é",
//   retangulo.area
// );

describe("Funções que calculam área de polígonos", () => {
  test("calculaAreaQuadrado deve calcular área do quadrado corretamente", () => {
    const result = calculaAreaQuadrado(3);
    expect(result).toBe(9);
    const result2 = calculaAreaQuadrado(100);
    expect(result2).toBe(10000);
  });
});

describe.skip("Testes para a função de array", () => {
  const array = retornaArray(7, 9);

  test("retornaArray igual", () => {
    expect(array).toEqual([7, 9]);
  });
  test("contém 7", () => {
    expect(array).toContain(7);
  });
  test("contém 9", () => {
    expect(array).toContain(9);
  });
  test("contém 10", () => {
    expect(array).not.toContain(10);
  });

  test("Comprimento da array está correto", () => {
    expect(array).toHaveLength(2);
    expect(array).not.toHaveLength(1);
  });
});

describe("Testes para a objetos", () => {
  const result = retornaObjeto("iago", "28");
  test("Objeto tem nome correto", () => {
    expect(result).toMatchObject({
      nome: "iago",
    });
  });
  test("Objeto tem idade correta", () => {
    expect(result).toMatchObject({
      idade: "28",
    });
  });
});

describe("retornaQuadrado", () => {
  test("Número maior do que 1 é elevado ao quadrado corretamente", () => {
    const result = retornaQuadrado(2);
    expect(result).toEqual(4);
    expect(result).toBeGreaterThan(2);
  });

  test("Número menor do que 1 é elevado ao quadrado corretamente", () => {
    const result = retornaQuadrado(0.5);
    expect(result).toEqual(0.25);
    expect(result).toBeLessThan(0.5);
  });
});

Math.max(8, 7); // retorna 8
// [1,2,3,1]
// Exercício 2
// [10,200,8,6,-4,200]
// criar um objeto para armazenar os números já vistos
// const vistos = {}
// vistos[numero] = true
