//Exercício 1//
//a) process.argv[2] (3,4,5.....)
//b) 
const yellow = '\x1b[33m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const red = '\x1b[31m%s\x1b[0m'
const purple = '\x1b[35m%s\x1b[0m'

const name = process.argv[2]
const age = Number(process.argv[3])
console.log(green, `Olá ${name} Você tem ${age}`  )
/* console.log("\033[31m Aqui esta o texto em vermelho.") */
//c)
const number = Number(process.argv[4]) 
const futureAge = (num) => age + num
console.log(purple,`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${futureAge(number)}`)