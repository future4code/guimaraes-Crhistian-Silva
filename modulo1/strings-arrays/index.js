// Exercícios de interpretação de código

/*   1. Indique todas as mensagens impressas no console,
 SEM EXECUTAR o programa.
 
 let array
 console.log('a. ', array)
 // Resposta = undefined

 array = null
 console.log('b. ', array)
// Resposta = null
 
 array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 console.log('c. ', array.length)
// Resposta = 11

 let i = 0
 console.log('d. ', array[i])
 // Resposta = array is not defined 

 array[i+1] = 19
 console.log('e. ', array)
 // Resposta = array is not defined
 
 const valor = array[i+6]
 console.log( valor)
 // Resposta = array is not defined 
    

2. Leia o código abaixo com atenção 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for:
 `"Subi num ônibus em Marrocos"`?  
 // Resposta = SUBI NUM ÔNIBUS EM MIRROCOS 27

 */

// Exercícios de escrita de código
/*  1.Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, Imprima no console a seguinte mensagem:
    
O e-mail `emailDoUsuario` foi cadastrado com sucesso.
 Seja bem-vinda(o), `nomeDoUsuario`! 
 */
 const nome = prompt("Digite seu nome: ")
 const email = prompt("Digite seu e-mail: ")
 console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)
 

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
Imprima no console a nova lista
/* */  

let arrayComidas = ["Hamburguer", "Brigadeiro", "Strogonoff","Peixe", "Batata Frita"]
console.log(arrayComidas)

console.log("Essas são minhas comidas preferidas: ")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

let comidaUsuario = prompt("Qual a sua comida preferida ? ")
arrayComidas[1] = comidaUsuario
console.log(arrayComidas)
 

/* 3. Fça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no consoleImprima no console */

let listaDeTarefas = []
let tarefa1 = prompt("Digite uma tarefa a ser realizada no seu dia: ")
let tarefa2 = prompt("Digite outra tarefa a ser realizada no seu dia: ")
let tarefa3 = prompt("Digite mais uma tarefa a ser realizada no seu dia: ")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

let perguntaUsuario = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2 ")

listaDeTarefas.splice(perguntaUsuario, 1)

console.log(listaDeTarefas)


