//Exercício 2//
const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const sum = num1 + num2  
const subtract = num1 - num2
const divide = num1 / num2
const multiplies = num1 * num2
console.log("soma", sum)
console.log("subtrai", subtract)
console.log("divide", divide)
console.log("multiplica", multiplies)

/* Aqui tentei implantar um Switch/
 const operacao = (a, b, op) => {
    switch(op){
        case "soma":
            num1 + num2
            break;
        case "subtrai":
            num1 - num2
            break;
        case "divide":
            num1 / num2
            break;
        case "multiplica":
            num1 * num2
            break;
        default:
            console.log('nao foi possível realizar a tarefa')
    }
    return op
}
console.log(operacao()) */

