//EXERCICIO 01

let input
let soma = 0
while (input !== 0) {
    input = Number(prompt("insira um número"))
    soma += input
}
console.log(soma)



// EXERCICIO 02

const array = [11, 15, 18, 14, 12, 13]
let maior = 0

function maiorNumero(array) {
   for (let i = 0; i < array.length; i++) {
      if (maior < array[i]) maior = array[i] 
      
   }
   return maior
}

const resultado = maiorNumero(array)

console.log(`O Maior número é: ${resultado}`)


// EXERCICIO 03

const arrayPalavras = ["Hi", "I", "Am", "Groot"]

function concatenarPalavras(array) {
   let frase = ""
   for(let palavra of array) {
      frase += palavra + " "
   }
   return frase
}

const string = concatenarPalavras(arrayPalavras)
console.log(string)


 // REFORÇO FUNÇÃO

let nome = "Tayanne"
let profissao = "backender"
let idade = 26

function soma(nome, profissao, idade) {
  console.log(`${nome}, ${profissao}, ${idade}`)
}

soma(nome, profissao, idade)
soma(idade, nome, profissao)