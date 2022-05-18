import { maiorNumero, removeDuplicados } from "./exercicio1";

describe.skip("", () => {
  test("maiorNumero", () => {
    expect(maiorNumero([1, 2, 3, 4])).toEqual(4);
    expect(maiorNumero([4, 3, 2, 1])).toEqual(4);
    expect(maiorNumero([1, 2, 3, 4, 50])).toEqual(50);
    expect(maiorNumero([1, 10, -7, 4])).toEqual(10);
  });

  test("removeDuplicado", () => {
    expect(removeDuplicados([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicados([4, 3, 2, 1])).toEqual([4, 3, 2, 1]);
    expect(removeDuplicados([1, 2, 3, 4, 50])).toEqual([1, 2, 3, 4, 50]);
    expect(removeDuplicados([1, 10, -7, 4])).toEqual([1, 10, -7, 4]);
    expect(removeDuplicados([1, 10, -7, 4, 10])).toEqual([1, 10, -7, 4]);
    expect(removeDuplicados([1, 2, 3, 3, 4, 50])).toEqual([1, 2, 3, 4, 50]);
  });
  test("Quando houver mais de um duplicado, remove todos");
});
