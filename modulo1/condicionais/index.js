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
 Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

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
const turnoaluno2 = prompt("Qual turno você estuda ? Responda usando as letras  M se for (matutino) ou V se for (Vespertino) ou N se for (Noturno)").toUpperCase()
 
switch (turnoaluno2){
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
  as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input*/

const generoFilme1 = (nomeFilme, precoIngresso) =>{
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

generoFilme1(generoFilmeUser, valorIngressoUser)

 /* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
    Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário
     tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
      Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
      Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser
       multiplicados pelo valor do dólar (considerar o dólar = R$4,10) */
let nomeComprador = prompt(" Olá, por favor digite seu nome completo")
let tipoJogoUsuario = prompt("Qual tipo de jogo você está buscando ingressos: **ATENÇÃO** use **DI** para jogo Internacional, e **DO** para jogo doméstico").toUpperCase()
let etapaJogoUsuario = prompt("Qual estapa você quer assistir: **ATENÇÃO** use **SF para semi-final, **DT** para decisão de terceiro lugar, e **FI** para a grande final").toUpperCase()
let categoriaJogo = Number(prompt("Digite qual categoria de ingresso está buscando: **ATENÇÃO** use: 1, 2, 3, 4"))
let quantIngresso = Number(prompt("Digite a quantidade de ingressos"))
   
const funcaoValorPago = (tipo, etapa, categoria) => {
  let precoUnitario;
  if(tipo === "DO" && etapa === "SF" && categoria === 1 ){
    precoUnitario = 1320.00}
    if(etapa ==="SF" && categoria === 2){
      precoUnitario = 880.00}
      if(etapa === "SF" && categoria === 3){
        precoUnitario = 550.00}
        if(etapa ==="SF" && categoria === 4){
          precoUnitario = 220.00}
          else if(tipo === "DT" && categoria === 1 ){
            precoUnitario = 660.00}
  if(etapa ==="DT" && categoria === 2){
    precoUnitario = 440.00}
    if(etapa === "DT" && categoria === 3){
      precoUnitario = 330.00}
      if(etapa ==="DT" && categoria === 4){
        precoUnitario = 170.00}
        else if(etapa === "FI" && categoria === 1 ){
          precoUnitario = 1980.00}
  if(etapa ==="FI" && categoria === 2){
    precoUnitario = 1320.00}
    if(etapa === "FI" && categoria === 3){
      precoUnitario = 880.00}
      if(etapa ==="FI" && categoria === 4){
        precoUnitario = 330.00
    }
return precoUnitario
}

let etapaJogo;
if(etapaJogoUsuario === "FI"){
  etapaJogo = "GRANDE FINAL"
}
else if(etapaJogoUsuario === "DT"){
  etapaJogo = "DECISÃO DE 3° LUGAR"
} 
else if(etapaJogoUsuario === "SF"){
  etapaJogo = "SEMI-FINAL"
}

let tipoJogo;
if(tipoJogoUsuario === "DO"){
  tipoJogo = "DOMÉSTICO"
}
else if(tipoJogoUsuario	=== "DI"){
  tipoJogo = "INTERNACIONAL"
}

let precoFinal = (funcaoValorPago(tipoJogoUsuario, etapaJogoUsuario, categoriaJogo) * quantIngresso)

console.log( ` --- Dados da compra ---
Nome do cliente: ${nomeComprador}
Tipo do Jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoriaJogo}
Quantidade de Ingressos: ${quantIngresso} ingressos
--- VALORES ---
Valor do ingresso: R$ ${funcaoValorPago(tipoJogoUsuario, etapaJogoUsuario, categoriaJogo)} 
Valor total: R$ ${precoFinal}`)