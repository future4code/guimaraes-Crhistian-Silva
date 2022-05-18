// const arrayDeTestes = [1,2,"string", { key: "val" }];

//map = transformar
// transformar todos os itens da array

// multiplicar por 10
// executada em cada item
// const funcaoDeTransformacao = (elemento) => {
//     if(elemento === 3){
//         return elemento * 10;
//     }
//     return elemento;
// }

// retorna string
// const funcaoDeTransformacao2 = (elemento, indice) => {
//     if(indice === 0) {
//         return "Eu sou o primeiro elemento!";
//     }
//     return `O número da posição ${indice} vale ${elemento}`;
// }

// const arrayMultiplicada = arrayDeTestes.map(funcaoDeTransformacao2);

// console.log("original",arrayDeTestes);
// console.log("multiplicada:",arrayMultiplicada);

// const func = (valor) => console.log(valor);
// func();

// const arrayDeObjetos = [
//     { turma: "Guimaraes", periodo: "Noturno" },
//     { turma: "Lovelace", periodo: "iNTegral" },
//     { turma: "Gebru", periodo: "NOTURNO" },
//     { turma: "Maryam", periodo: "integral" },
// ];

// const funcaoTransformaNome = (element, indice) => {
//     return element.turma
// };

// const arrayDeNomes = arrayDeObjetos.map((element, indice) => {
//     return element.turma
// });

// const arrayDePeriodos = arrayDeObjetos.map((element, indice) => {
//     return element.periodo;
// });
// // console.log(arrayDeNomes)
// console.log(arrayDePeriodos);

// const nomesConvertidos = arrayDeObjetos.map((elemento) => {
//     return {
//         turma: elemento.turma.toLowerCase(),
//         periodo: elemento.periodo.toLowerCase(),
//     }
// });

// const turmasNoturnas = nomesConvertidos.filter((elemento) => {
//     const isNoturna = elemento.periodo === "noturno";
//     return isNoturna;
// });

// console.log(turmasNoturnas);

// const numeros = [1,3,5,7,9,34,6,77,22];
// const maioresDoQue10 = numeros.filter((numero) => {
//     return numero > 10;
// });
// // console.log(maioresDoQue10);

// const numerosPares = numeros.filter((numero) => {
//     // if(numero % 2 === 0) {
//     //     return true;
//     // }
//     // return false;
//     return numero % 2 === 0;
// });
// console.log(numerosPares);

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
];

const produtosDeLimpeza = produtos.filter((produto) => {
    return produto.categoria.toLowerCase() === "limpeza";
});
const nomesDosProdutosDeLimpeza = produtosDeLimpeza.map((produto) => {
    return produto.nome;
});
console.log(nomesDosProdutosDeLimpeza);
 