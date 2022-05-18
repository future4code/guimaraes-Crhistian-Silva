export const calculaAreaRetangulo = (a, b) => {
  return a * b;
};

export const calculaAreaQuadrado = (lado) => {
  return calculaAreaRetangulo(lado, lado);
};

export const retornaArray = (a, b) => {
  return [a, b];
};

export const retornaObjeto = (nome, idade) => {
  return {
    nome,
    idade,
  };
};

export const retornaQuadrado = (a) => {
  return Math.pow(a, 2);
};
