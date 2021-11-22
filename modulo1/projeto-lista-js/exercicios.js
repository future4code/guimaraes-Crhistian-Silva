// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = prompt("Digite a altura")
let largura = prompt("digite a largura")
let area = (altura * largura)
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Qual seu ano atual? ")
let anoNascimento = prompt("Qual o ano de seu nascimento? ")
let idade = (anoAtual - anoNascimento)
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let IMC = peso / (altura * altura)
return IMC 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Qual é seu nome ?")
let idade = prompt("Qual é a sua idade ?")
let email = prompt("Qual é o seu email? ")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let coresFavoritas = []
let cor1 = prompt("Diga uma de suas 3 cores favoritas ?")
let cor2 = prompt("Diga uma de suas 3 cores favoritas ?")
let cor3 = prompt("Diga uma de suas 3 cores favoritas ?")
coresFavoritas = [cor1, cor2, cor3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let precoIngresso = (custo / valorIngresso)
return precoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let checagem = (string1.length === string2.length)
return checagem
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let ultimoElemento = array[array.length - 1]
return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let primeiraPosicao = array[0]
let ultimaPosicao = array[array.length -1]
array[0] =  ultimaPosicao
array[array.length -1] = primeiraPosicao
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let comparar = (string1.toUpperCase() === string2.toUpperCase())
return comparar
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
//function renovaCarteira(ano1, ano2, ano3){
  /* 
  const menor20 = (ano1 - ano2) <= 20 && (ano1 - ano3) >= 5
  const maior20 = (ano1 - ano2) > 20 && (ano1 - ano2) <= 50 && (ano1 - ano3) >= 10
  const maior50 = (ano1 - ano2) > 50 && (ano1 - ano3) >= 15
  return console.log(menor20, maior20, maior50)
   */
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anoModulo4 = (ano % 4) === 0 && (ano % 100) !== 0 || (ano % 400 === 0)
  return anoModulo4
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let perg1 = String(prompt("tem mais de 18: "))
  let perg2 = String(prompt("tem ensino médio completo? "))
  let perg3 = String(prompt("tem disponibilidade de horarios?" ))
  let maior18 = (perg1 === "sim" && perg2 === "sim" && perg3 === "sim")
  return console.log(maior18)
}