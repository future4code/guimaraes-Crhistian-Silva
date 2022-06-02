const funcao11 = (numeroInicial: number): string => {
    const numRomanos: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let romanos = "",
      i;
    for (i in numRomanos) {
      while (numeroInicial >= numRomanos[i]) {
        romanos += i;
        numeroInicial -= numRomanos[i];
      }
    }
    return romanos;
  };
  console.log("exercicio 11", funcao11(1990)); //MCMXC
  console.log("exercicio 11", funcao11(2193)); //MMCXCIII
  