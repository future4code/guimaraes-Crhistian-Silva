/* Exercícios de interpretação de código 
1. Leia o código abaixo. Indique todas as
 mensagens impressas no console, SEM EXECUTAR o programa
 */
/* ```jsx
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

``` */
//Resposta a) - false
//Resposta b) - false
//Resposta c) - true
//Resposta d) - boolean

/* 2.Seu colega se aproxima de você falando que o código dele
 não funciona como devia.  Vamos ajudá-lo:
  consegue perceber algum problema? 
  O que será impresso no console?
 */
/* ```jsx
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
``` */
//Resposta - todo dados que retorna do usuário (via prompt) é recebido como string, ele não definiu o método da variável como Number
//Resposta - será impresso o valor digitado no primeiro prompt concatenado com o segundo valor digitado

/* 3.Para o exercício anterior, sugira ao seu colega uma solução para que o v
impresso no console seja, de fato, a soma dos dois números. */
//Resposta - Uma sugestão é definir as variáveis "primeiroNumero" e "segundoNumero" com o método Number.
//Ex: let primeiroNumero = Number(prompt("Digite um numero!")), ou também criar outras variáveis com os dados retornados e fazer a transformação de strings em Numbers

// Exercícios de escrita de código

/* 1.  Faça um programa que:
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: 
"Sua idade é maior do que a do seu melhor amigo?",
 seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade 
(não tem problema se sair um número negativo) */

const idade = Number(prompt("Qual é a sua idade? "))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo (a)"))
const maisVelho = idade > idadeAmigo 
console.log(" Sua idade é maior do que a do seu melhor amigo(a)?", maisVelho)
console.log("A diferença de idade entre vocês é", idade - idadeAmigo) 

/* 2. Faça um programa que:
a) Peça ao usuário que insira um número **par** */

let numeroPar = Number(prompt("Por favor, digite um número **PAR**"))

//b) Imprima na console **o resto da divisão** desse número por 2.

console.log("O resto da divisão desse número por 2 é, " , numeroPar % 2)
 
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Resposta - o padrão é que o resultado da divisão do resto da divisão de um numero PAR por 2 é sempre 0

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
 //Resposta - o programa é executado corretamente e o resultado é 1, deve-se criar uma variável para que não seja possível mas no exercício não foi pedido 

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
 a) A idade do usuário em meses

 b) A idade do usuário em dias
 
 c) A idade do usuário em horas */

 let idadeNova = Number(prompt(" Qual a sua idade? "))
 console.log("Sua idade convertida em meses é: " , idadeNova * 12 + " meses")
 console.log("sua idade convertida em dias é: ", idadeNova * 365 + " dias" )
 console.log("Sua idade convertida em horas é: ", (idadeNova * 365) * 24)

/* 4. Faça um programa que pergunte ao usuário dois números.
  Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

 O primeiro numero é maior que segundo? true
 O primeiro numero é igual ao segundo? false
 O primeiro numero é divisível pelo segundo? true
 O segundo numero é divisível pelo primeiro? true
 
 obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

 let num1 = Number(prompt(" Digite um número: "))
 let num2 = Number(prompt(" Digite um segundo número: "))
 let maior = num1 > num2
 let igual = num1 === num2
 let divisao1 = num1 % num2 === 0
 let divisao2 = num2 % num1 === 0
 console.log(maior)
 console.log(igual)
 console.log(divisao1)
 console.log(divisao2)
