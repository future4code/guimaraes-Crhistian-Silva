//console.log("Hello World, primeiros exercicios em typescript");

const yellow = '\x1b[33m%s\x1b[0m'
const green = '\x1b[32m%s\x1b[0m'
const red = '\x1b[31m%s\x1b[0m'
const purple = '\x1b[35m%s\x1b[0m'

//Exercício 1

function checaTriangulo(a: Number, b: Number, c: Number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
console.log( "Resultado do Exercício 1:",  checaTriangulo(3, 5, 5));

//Exercício 2

function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string):string[]{
 
let arrayColors = [cor1, cor2, cor3]

    return arrayColors
 }
 console.log("Resultado do Exercício 2:",  imprimeTresCoresFavoritas('azul', 'verde', 'laranja'))

//Exercício 3

function checkLeap(year: number): boolean {
/*      const cond1 = year % 400 === 0
    const cond2 = (year % 4 === 0) && (year % 100 !== 0)
    return cond1 || cond2  */

 if (year % 4 == 0 && year % 100 != 0) {
    return true;
  } if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
} 
console.log("Resultado do Exercício 3:", checkLeap(1500));

//Exercício 4

function comparaDoisNumeros(num1:number, num2:number): number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

console.log("Resultado do Exercício 4:", comparaDoisNumeros(358, 458))

//Exercício 5

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ): string{
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }
   console.log("Resultado do Exercício 5:", checaRenovacaoRG(2022, 1983,2020))
   
//Exercício 6

function printNumbers (a:number, b:number):void{
    let bigger;
    let smaller;

    if (a > b) {
        bigger = a;
        smaller = b;
      } else {
        bigger = b;
        smaller = a;
      }

      const addition = bigger + smaller;
      const subtraction = bigger - smaller;
      const multiplication = bigger * smaller;
    console.log('Resultado do Exercício 6')
    console.log(' A Soma dos números é:', addition)
    console.log(' A Subtração dos números é:', subtraction)
    console.log(' A Multiplicação dos números é:', multiplication)
    console.log(' O Maior dos números é:', bigger)
}

printNumbers(10, 15)

//Exercício 7
console.log('Ainda não fiz o exercício 7')

//Exercício 8

function reverseString (str:string):string {
let newstring = str.split('').reverse().join('')
return newstring
}
console.log("Resultado do Exercício 8:", reverseString('perereca'))

//Exercício 9

function validateStudent (age:number, str:string, hours:number, course:string):boolean{

    if (age >= 18 && str === 'sim' && hours > 40){
        return true
      }
      else{
        return false
      }
}
console.log(`Resultado do Exercício 9: A inscrição pro curso da Labenu é válida: ${validateStudent( 90,'sim', 42, 'noturno')}`)


