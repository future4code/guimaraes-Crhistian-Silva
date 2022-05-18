const venderPao = () => {
    const nome = prompt("Bom dia. Qual é o seu nome?");
    // const pedido = prompt("Qual é o seu pedido?");
    const quantidade = prompt("Quantos pães?");

    // console.log(`O cliente ${nome} pediu ${quantidade} pães`);
    const resultado = `O cliente ${nome} pediu ${quantidade} pães`;
    return resultado;
    // return `O cliente ${nome} pediu ${quantidade} pães`;
}

const resultVenderPao = venderPao();
console.log(resultVenderPao);

const verificaPar = (numero) => {
    if(numero % 2 === 0) {
        return true;
    } 
    console.log("É ímpar");
    return false;
}
// const retornoVenderPao = venderPao();

// const soma = (elemento1, elemento2) => {
//     const soma = elemento1 + elemento2;
//     return soma;
// }

// const result = soma(2,2);

// const produto = result * 10;
// const produto = soma(5,5) * 10;
// console.log(produto);

// console.log("O resultado é",result);
// const result = soma(5,5);
// console.log("resultado:",result);

// console.log("Retorno da função:",retornoVenderPao);
// console.log("Depois da função");