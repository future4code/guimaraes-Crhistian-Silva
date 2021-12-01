// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. um loop a partir do indice 0, onde a cada loop o valor é incrementado com o proprio valor + 1, até que o indice seja menor que 5. resultado impresso será 10

//2. a) 19, 21, 23, 25, 27, 30
//   b) Não é suficiente.

//3. 
 // *
 // **
 // ***
 // ****

 //EXERCICIOS DE ESCRITA DE CÓDIGO


/* 1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!" 
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console 
 */
let bichoUsuario = Number(prompt("Quantas bichinhos de estimação você tem ?"))

let arrayBichos = []

if(bichoUsuario === 0){
  console.log("Que pena ! Você pode adotar um pet!")
}
else if(bichoUsuario > 0){
   for(let i=0; i < bichoUsuario; i++){
       arrayBichos.push(prompt("Qual o nome do seu pet ?"))
   }
   console.log("Os nomes dos pets são: " , arrayBichos)
}

/*  2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
 Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

 a) Escreva um programa que imprime cada um dos valores do array original.
  */
 let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 let imprimirArraY = () =>{
     for(let indice = 0; indice < arrayOriginal.length; indice++){
         let impressao = arrayOriginal[indice]
         console.log(impressao)
     }
 
     return imprimirArraY
 }
 imprimirArraY()

 //b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

let arrayOriginalDividido = [0 , 2, 5, 20, 8, 252, 14 , 30]
let imprimirArraYDividido = () =>{
    for(let indice = 0; indice < arrayOriginal.length; indice++){
        let impressao = arrayOriginal[indice] / 10
        console.log(impressao)
    }

    return imprimirArraYDividido
}
imprimirArraYDividido()

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

let arrayOriginalAinda = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
arrayPar = []
for(num of arrayOriginalAinda){
    if(num %2 === 0){
        arrayPar.push(num)
    }
}
console.log(arrayPar)

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
 
// NAO ENTENDI O QUE ERA PRA FAZER

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

const arrayNovo = [2, 3 , 4, 5 , 98, 10]

const maiorMenorNum = (array)=>{
    let maiorNum = 0
    let menorNum = Infinity // lembrar

    for(let i=0; i < arrayNovo.length; i++){
        if(arrayNovo[i] < menorNum){
            menorNum = arrayNovo[i]
        } else if(arrayNovo[i] > maiorNum){
            maiorNum = arrayNovo[i]
        }
    }
    console.log("O menor numero é:", menorNum)
    console.log("O maior numero é:", maiorNum)
}
maiorMenorNum(arrayNovo)
