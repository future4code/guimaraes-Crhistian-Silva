// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. Respostas
// a) o código quer testar se o número informado pelo usuário é um número PAR 
// b) números pares
// c) qualquer número impar 

//2. Respostas
//a) Para verificar os preços de algumas frutas
//b) preço da fruta  Maça é R$ 2.25 
//c) preço da fruta  Pêra é R$ 5

//3. Respostas
//a) Está verificando se o número que será recebido através do prompt é MAIOR que 0
//b) Esse número passou no teste/ mensagem is not defined 
//c) sim, pois a variavel "mensagem" está definida apenas dentro do escopo do if 

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
caso contrário, imprima `"Você não pode dirigir."`
*/
const idadeUser = Number(prompt("Qual sua idade ?"))
if (idadeUser >= 18){
  console.log(" Você pode dirigir")
}
else{
  console.log("Você não pode dirigir")
}

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
 Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
  */
 const turnoaluno = prompt("Qual turno você estuda ? Responda usando as letras  M se for (matutino) ou V se for (Vespertino) ou N se for (Noturno)").toUpperCase()

 if (turnoaluno === "M"){
  console.log("Bom Dia!")
}
 else if (turnoaluno === "V"){
  console.log("Boa Tarde")
}
 else if(turnoaluno === "N"){
  console.log("Boa Noite")
}
 else{
   console.log("Você não digitou a opção certa, por favor corrija sua resposta")
}


//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
const turnoaluno = prompt("Qual turno você estuda ? Responda usando as letras  M se for (matutino) ou V se for (Vespertino) ou N se for (Noturno)").toUpperCase()
 
switch (turnoaluno){
    case "M":
         console.log("Bom dia")
         break
    case "V":
         console.log("Boa tarde")  
         break
    case "N":
         console.log("Boa Noite")
         break
    default:
         console.log("Você não inseriu a opção correta, por favor corrija seus dados")
         break
 }

 /* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
 for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme 
 que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
  Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :( "
 */
const generoFilme = prompt("Qual é o gênero do filme que você vai assitir ?").toLowerCase()
const precoIngresso = Number(prompt("Qual o valor do ingresso"))
if(generoFilme === "fantasia" && precoIngresso < 15){
  console.log("Bom filme")
}
  else{
    console.log("Escolha outro filme :( ")
}

 // DESAFIOS
 /* 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!",
 pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console
  as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
 */

const generoFilme = (nomeFilme, precoIngresso) =>{
    if(nomeFilme === "fantasia" && precoIngresso < 15){
        const lanchinho = prompt("Qual lanchinho você vai comprar? ")
        console.log(`Bom filme ! Aproveite o seu ${lanchinho}`)
    }
    else{
        console.log("Escolha outro filme :( ")
    }
}

let generoFilmeUser = prompt("Qual é o gênero do filme que você vai assitir ?").toLowerCase()
let valorIngressoUser = Number(prompt("Qual o valor do ingresso"))

generoFilme(generoFilmeUser, valorIngressoUser)


