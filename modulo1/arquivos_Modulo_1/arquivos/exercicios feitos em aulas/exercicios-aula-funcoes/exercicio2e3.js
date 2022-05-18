// Crie uma função que receba dois números e retorne a soma entre eles

//função nomeada
function soma2 (n1, n2) {
    let soma = n1 + n2 
    return soma
}
console.log(  soma2(3,4)   )
//nesse caso, não tem nenhum console.log dentro da função,
//por isso a chamada da função precisa estrar dentro de um console.log
//para imprimir o resultado

//função anônima
const soma3 = function (n1, n2) {
    let soma = n1 + n2 
    return soma
}
console.log(  soma3(3, 1)    )


//arrow function
const soma4 = (n1,n2) => {
    return n1 + n2 
}
console.log(  soma4(3, 1)    )

