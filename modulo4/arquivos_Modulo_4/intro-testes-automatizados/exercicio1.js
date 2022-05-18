export const maiorNumero = (array) => {
  let maior = -Infinity;
  array.forEach((num) => {
    if (num > maior) maior = num;
  });
  return maior;
};

export const removeDuplicados = (array) => {
  const vistos = {};
  return array.filter((num, i) => {
    if (!vistos[num]) {
      vistos[num] = true;
      return true;
    }
    return false;
  });
};
