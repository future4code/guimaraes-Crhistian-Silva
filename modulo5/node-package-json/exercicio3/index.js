//Exercício 3//
const yellow = '\x1b[33m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const red = '\x1b[31m%s\x1b[0m'
const purple = '\x1b[35m%s\x1b[0m'
const white = '\x1b[37m%s\x1b[0m'
const colors = require('colors') // colors é um pacote npm, instale-o com npm i colors


const taskList = [" acordar", "levantar da cama", "tomar banho"]
const newTask = process.argv[2]
const newTaskList =  taskList.push(newTask)
console.log(red, `A Tarefa "${newTask}" foi adicionada com sucesso! a sua TaskList,`, taskList)
 // ou
const tasks = [" acordar", "levantar da cama", "tomar banho"]
const newTask2 = process.argv[2]
const newTaskList2 =  tasks.push(newTask2)
console.log( `A Tarefa "${newTask2}" foi adicionada com sucesso! a sua TaskList,`.green , tasks.toString().magenta)