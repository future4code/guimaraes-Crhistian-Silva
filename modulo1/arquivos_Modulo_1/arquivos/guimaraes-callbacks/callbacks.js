const verificaPar = (numero, funcaoDeImprimir) => {
    if(numero % 2 === 0) {
        const resultado = numero / 2;
        const result = funcaoDeImprimir(resultado);
        const result2 = result + " modificada";
        return result2;
    } else {
        return numero;
    }
}
// const verificaPar2 = (numero, funcao) => {

//     console.log(numero,funcao);
// }
const imprimeMensagem = valor => {
    const frase = "O valor da divisão é "+valor;
    return frase;
    // console.log("O valor da divisão é ",valor);
}

const result = verificaPar(8, imprimeMensagem);
console.log(result);


// const soma = (elemento1, elemento2) => {
//     const soma = elemento1 + elemento2;
//     return soma;
// }

// const result = soma(5,5);