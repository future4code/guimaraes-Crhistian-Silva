// Exercícios de interpretação de código

// EXERCICIO 1

//a)  10
      50

//b) nao aparece nada, pois não está definido um console.log dentro da função

//EXERCICIO 2

//a) a função irá transformar todo o texto digitado pelo usuario com letras minusculas e procurar a palavra "cenoura", retornando um booleano

// b)    
// i.   true
// ii.  true
// iii. true

// EXERCICIOS DE ESCRITA DE CÓDIGO
/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ``` 
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
 */

    function dadosSobreMim() {
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
     }
    
    let nome = "crhistian"
    let idade = 38
    let endereco = "foz do iguacu"
    let profissao = "atendente comercial"
    
dadosSobreMim(nome, idade, endereco, profissao)
 
/*     
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
 o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
 Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]  
 */
function dadosUsuario(nome, idade, endereco, profissao) {
    let mensagem = console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco}, e sou ${profissao}`)
return mensagem
   }

let nome1 = prompt("Qual é o seu nome ?")
let idade1 = Number(prompt("Qual é sua idade? "))
let endereco1 = prompt("Qual a cidade onde vc mora? ")
let profissao1 = prompt("Qual a sua profissão ?")

dadosUsuario(nome1, idade1, endereco1, profissao1)

/* 2. Escreva as funções explicadas abaixo:
    
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
Invoque a função e imprima no console o resultado.  */
    
function numeros(n1, n2) {
    
    let somaNum = (n1 + n2)
    return somaNum
}

let num1 = Number(prompt("digite um numero: "))
let num2 = Number(prompt("digite outro numero: "))

console.log(numeros(num1, num2))


//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function doisNumeros(num1, num2) {
    let maiorNumero = num1 >= num2
    return maiorNumero
}

let numUsuario1 = Number(prompt("Digite um numero: "))
let numUsuario2 = Number(prompt("Digite outro numero: "))

console.log(doisNumeros())


//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

const numPar = function() {
    const conferindo = ((numDigitado % 2) === 0)
    return console.log(conferindo)
}
const numDigitado = Number(prompt("Digite um numero: "))
numPar() 

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. 

function mensagemNova(string) {
    return console.log(" O tamanho da mensagem é de:", string.length, "e a mensagem é: ", string.toUpperCase())
}
let novaMensagem= prompt(" Digite aqui sua mensagem")
mensagemNova(novaMensagem)

/* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
 Por fim, mostre no console o resultado das operações:
    
```
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 

 */
function operacoesBasicas(soma, subtracao, multiplicação, divisao) {
    let somaNum = console.log("A soma entre os dois numeros digitados é:", (numNov1 + numNov2))
    let difNum = console.log("A diferença entre os dois numeros digitados é:", (numNov1 - numNov2))
    let multiNum = console.log("A multiplicação entre os dois numeros digitados é:", (numNov1 * numNov2))
    let divisaoNum = console.log("A divisão entre os dois numeros digitados é:", (numNov1 / numNov2))
    return(somaNum, difNum, multiNum, divisaoNum)
        
    }
let numNov1 = Number(prompt("Digite um numero para usarmos: "))
let numNov2 = Number(prompt("Digite outro numero para usarmos:"))
operacoesBasicas()

// EU NÃO CONSEGUI ENTENDER DIREITO O ENUNCIADO E FAZER AS FUNÇÕES SEPARADAS, entao fiz assim mesmo...E ASSIM

let numNovo1 = Number(prompt("Digite um numero"))
let numNovo2 = Number(prompt("Digite outro numero"))

function soma() {
return numNovo1 + numNovo2

}

function diferenca() {
    return numNovo1 - numNovo2

}

function multiplicacao () {
    return numNovo1 * numNovo2

}

function divisao() {
    return numNovo1 / numNovo2

}

console.log(soma(numNovo1, numNovo2), diferenca(numNovo1, numNovo2), multiplicacao(numNovo1, numNovo2), divisao(numNovo1, numNovo2))

// DESAFIOS
1. /* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções */
    
//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
let arrowFuncao = (param) =>{
      console.log(param)
    }
    //arrowFuncao("Olá, Mundo!)

//2.b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
function somaNumeros = (n5,n6) => {
          let somar = n5 + n6
          arroWFuncao(somar)
    }
somaNumeros(20, 40)
