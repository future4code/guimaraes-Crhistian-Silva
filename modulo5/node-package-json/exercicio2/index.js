//Exercício 2//

const yellow = "\x1b[33m%s\x1b[0m"
const green = "\x1b[32m%s\x1b[0m"
const red = "\x1b[31m%s\x1b[0m"
const purple = "\x1b[35m%s\x1b[0m"
const white = "\x1b[37m%s\x1b[0m"

/* const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const sum = num1 + num2  
const subtract = num1 - num2
const divide = num1 / num2
const multiplies = num1 * num2 */
/* console.log(white, "soma", sum)
console.log(green, "subtrai", subtract)
console.log(red, "divide", divide)
console.log(purple, "multiplica", multiplies) */

const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

   switch(operation){
       case "soma" :
          console.log(red,`O resto da ${operation} é:`, num1 + num2)
           break;
       case "subtrai":
           console.log(yellow,`O resto da ${operation} é:`, num1 - num2)
           break;
       case "divide":
           console.log(purple,`O resto da ${operation} é:`, num1 / num2)
           break;
       case "multiplica":
           console.log(green,`O resto da ${operation} é:`, num1 * num2)
           break;
        case "resto":
            console.log(white,`O resto da ${operation} é:`, num1 % num2)
       default:
           console.log("nao foi possível realizar a tarefa")
   }

console.log(process.argv[2])



