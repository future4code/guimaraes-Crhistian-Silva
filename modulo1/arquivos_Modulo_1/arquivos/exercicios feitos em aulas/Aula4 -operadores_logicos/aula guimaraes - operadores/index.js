// ----------------------> Exemplos <---------------------------

// const normalize = require("normalize-package-data")

// let a = 10;
// let b = 20;
// let c = -10
// let d = 15


//operadores 

// let soma = a + b; // 10 + 20   30
// let subtracao = a - b
// let multiplicacao = a * b 
// let divisao = a / b
// let resto = a % b

// console.log(soma)
// console.log(subtracao)
// console.log(multiplicacao)
// console.log(divisao)
// console.log(resto)

//abreviações de operadores

//a = a + 5 
// a += 5
// console.log("novo a" , a )

// a -= 5 
// console.log("novo a" , a )

// a *= 5
// console.log("novo a" , a )


// a /= 5
// console.log("novo a ", a)

// a %= 5 
// console.log("novo a" , a)


// comparadores

// console.log( 1 === 1 )
//console.log( "1" === 1)
// console.log(1 !== 1)
// console.log(1 !== 2)
// console.log(5 >= 5 )
// console.log( 5 < 10)


// ----------------------> Exercicio 1 <---------------------------
// const resultado1 = 3 + 4 
// const resultado2 =(3 * 5) / 2 
// const resultado3 = (5 - 4 ) * -1
// //const resultado3a = resultado3 * -1
// const resultado4 = 234 % 5

// console.log(resultado1 )
// console.log(resultado2)
// console.log(resultado3)
// console.log(resultado4)


// ----------------------> Exercicio 2 <---------------------------

// const a = 10
// const b = 25

// const verificacao1 = a === b
// console.log(verificacao1)


// const verificacao2 = a !== b
// console.log(verificacao2)

// const verificacao3 = a > b
// console.log(verificacao3)

// console.log( a < b)


// ----------------------> Exercicio 3 <---------------------------

// const a = true 
// const b = false 
// const c = true

// console.log(a && b)
// console.log(b && c)
// console.log(a && c )
// console.log(a && b && c)


// ----------------------> Exercicio 4 <---------------------------

 
// const novoA = true 
// const novoB = false 
// const novoC = true

// // console.log(a || b)
// console.log( !novoA )


// ----------------------> Exercicio 5 <---------------------------

// -variavel nome 
// -variavel ano de nascimento
// - variavel ano atual
// -mostrar :
//   - nome da pessoa com ola 
//   - mostrar a idade da pessoa
//   - verificar se é maior de idade
//   -quantos anos tera em 2050 ?

// let nome = "Laís "
// // let nome = " diego"

// const anoDeNascimento = Number(prompt(" qual seu ano de nascimento?"))
// const anoAtual = Number(prompt("qual o ano atual?"))

// const idade = anoAtual -             anoDeNascimento

// Number(  prompt("qual o ano atual?")     )

//  console.log("Olá " , nome)
// console.log(`Idade: ${idade}`)
// console.log("é maior de idade:" , idade >= 18)
// console.log(" idade em 2050:", (2050 - anoDeNascimento) )


let nome = prompt("Qual o seu nome")
let anoDeNascimento = prompt ("Qual seu ano de nascimento?")
let ano2050 = 2050
let maiorDeIdade = 18
let anoAtual = prompt(" ano atual?" )
let idade = (anoAtual-anoDeNascimento)

console.log ("Olá", nome,)
console.log ("Idade", idade)
console.log (idade >= 18)
// console.log ("em 2050 você terá:", ano2050-anoDeNascimento)


