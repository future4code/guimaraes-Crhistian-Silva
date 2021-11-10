/* /* /* 1. Analise o programa abaixo e diga o que será impresso no console,
 **SEM EXECUTAR o programa.**
    
 let a = 10
 let b = 10
 
 console.log(b)
 
 b = 5
 console.log(a, b)

//Resposta - imprime (10, 5)

2. Analise o programa abaixo e diga o que será impresso no console, 
SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
//Resposta - imprime (10, 10, 10)

3. Analise o programa abaixo, entenda o que ele faz e
 **sugira melhores nomes para as variáveis**. 
 Lembre-se que devemos escolher nomes significativos, usar o padrão
  **camelCase**. Alem disso, os nomes não podem começar com
   números ou caracteres especiais.
    
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//Resposta p = horaTrabDia
//Resposta t = valorDia


 */
/* 1. Construa um programa, seguindo os seguintes passos:
a) Declare uma variável para armazenar um nome, sem atribuir um valor.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores 
às variáveis que acabou de criar.
 */

let nome = undefined
let idade = undefined
console.log(typeof nome, typeof idade)
// porque defini as variáveis como undefined, ou seja, ainda não receberam nenhum valor
nome = prompt("Qual é o seu nome? ")
idade = prompt("Qual é a sua idade? ")
console.log(typeof nome, typeof idade)
// todos os dados que retornam do usuário através do prompt são STRINGS 
console.log("Olá", nome, "você tem", idade, "anos.")
/* 
2. Escreva um programa que faça 3 perguntas de Sim ou Não,
 armazenado em uma variável.
  Por exemplo: "Você está usando uma roupa azul hoje?".
Depois, siga os passos:
    
a) Crie três novas variáveis, contendo as respostas

b) Imprima na tela todas as perguntas seguidas por suas
 respectivas respostas. Por exemplo: */



 const saudacao = prompt("Olá, " + nome + " ,tudo bem ? Irei te fazer 3 perguntas e preciso que você responda apenas com SIM ou Não !!! Ok ?")
 
 const pergunta1 = prompt("Você gosta de filmes de heróis?")
 const pergunta2 = prompt("Você faz uso de bebidas alcóolicas?")
 const pergunta3 = prompt("Você gosta de chuchu? ")
 console.log("As respostas do seu questionário foram:")
 console.log("Você gosta de filmes de heróis ? " + pergunta1)
 console.log("Você faz uso de bebidas alcóolicas? " + pergunta2)
 console.log("Você gosta de chuchu? " + pergunta3)

/*  3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
 let a = 10
 let b = 25
 Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
independente de qual valor essas variáveis assumam inicialmente
 (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem,
   a lógica do seu programa teria que mudar também). 
 */

let a = 10
let b = 25
let c = a
b = a
c = b
console.log(a, b, c)
