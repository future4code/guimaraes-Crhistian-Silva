//Exercício 1//
//a) process.argv[2] (3,4,5.....)
//b) 

const name = process.argv[2]
const age = Number(process.argv[3])
console.log(`Olá, ${name}, Você tem ${age} anos.`)
/* console.log("\033[31m Aqui esta o texto em vermelho.") */
//c)
const number = Number(process.argv[4]) 
const futureAge = (num) => age + num
console.log(`Olá, ${name}, Você tem  anos ${age}. Em sete anos você terá ${futureAge(number)}`)