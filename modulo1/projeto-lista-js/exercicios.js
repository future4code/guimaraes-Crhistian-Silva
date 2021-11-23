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
function renovaCarteira(ano1, ano2, ano3){
let anoAtual = Number(prompt("Qual o ano atual? "))
let anoNasc= Number(prompt("Qual o ano que você nasceu ?"))
let anoDoc = Number(prompt("Qual ano seu documento foi emitido"))
let menos20 = (anoAtual - anoNasc) <= 20 && (anoAtual - anoDoc) >= 5
let maior20 = (anoAtual - anoNasc) > 20 && (anoAtual - anoNasc) >= 50 && (anoAtual - anoDoc) >= 10
let maior50 = (anoAtual - anoNasc) > 50 && (anoAtual - anoDoc) || 10


return console.log(menos20, maior20, maior50)

}

renovaCarteira()
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 // let anoRecebido = (anoRecebido % 400 === 0) || (anoRecebido % 4 === 0) && (anoRecebido % 100 !==0)
 // return anoRecebido
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}