 //Exercício 1//
//a) process.argv[2] (3,4,5.....)
//b) 
/* const yellow = '\x1b[33m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const red = '\x1b[31m%s\x1b[0m'
const purple = '\x1b[35m%s\x1b[0m' */

const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors

const name = process.argv[2]
const age = Number(process.argv[3])

 console.log(`Olá ${name} você tem ${age}`.green )

console.log(`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${age + 7}`) 

//outro médoto// 

const showData = (name, age) => {
    if(name && age){
        console.log( `Olá ${name} Você tem ${age} anos`.red)
        console.log(`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${age + 7}`.yellow)
  
    }else{
        console.log('Está faltando algum parâmetro, confirme sua digitação')
    }
}
showData(name, age) 

//outro médoto// 

/* 
const showData = (name, idade,) => {

    const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors

    const username = process.argv[2] // "name" é uma palavra reservada do sistema
    const age = Number(process.argv[3])

    const params = process.argv.length - 2
    if (params < 2) {
        return console.log(`Was expecting 2 parameters, got ${params}`.red)
    }
    console.log(`Olá, ${username}! Você tem ${age} anos.`.blue)

    console.log(`Olá, ${username}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`.green)
}


showData('crhistian', 38) */

