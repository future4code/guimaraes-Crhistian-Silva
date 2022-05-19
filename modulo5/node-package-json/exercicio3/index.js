//Exercício 3//
const taskList = [" acordar", "levantar da cama", "tomar banho"]
const newTask = process.argv[2]
const newTaskList =  taskList.push(newTask)
console.log(`A Tarefa "${newTask}" foi adicionada com sucesso! a sua TaskList`, taskList)