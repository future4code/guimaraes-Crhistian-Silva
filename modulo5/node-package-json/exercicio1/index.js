//Exercício 1//
//a) process.argv[2] (3,4,5.....)
//b) 
const yellow = '\x1b[33m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const red = '\x1b[31m%s\x1b[0m'
const purple = '\x1b[35m%s\x1b[0m'


const name = process.argv[2]
const age = Number(process.argv[3])
const number = Number(process.argv[4]) 
const futureAge = (num) => age + num

 console.log(green, `Olá ${name} você tem ${age}` )

console.log(`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${futureAge(number)}`) 

//outro médoto// 

const showData = (name, age, number) => {
    if(name && age){
        console.log(green, `Olá ${name} Você tem ${age} anos`)
    }if(name && age && number){
        console.log(purple,`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${futureAge(number)}`)
    }else{
        console.log('Está faltando algum parâmetro, confirme sua digitação')
    }
}
showData(name, age, number)