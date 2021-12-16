// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length

}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
/* Desafio (OPCIONAL)
Faça sem utilizar a função reverse() */
/* let arrayInvertido = array.map(function(item, indice, array){
    return array[array.length - indice - 1];
})

console.log(arrayInvertido) */
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a -b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((par) => (par % 2 === 0))
}
// Desafio (OPCIONAL)
/* let par = []
function arrayPar() {

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      par.push(array[i]);
    }
}
}
console.log(par)
arrayPar(array) */


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let par = []
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        par.push(Math.pow(array[i],2));
    }
    
    }return par
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)     
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto = 0

if(num1 > num2){
    maior = num1
    objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: num1 % num2 === 0,
    diferenca: num1 -num2}
    console.log(objeto)
    return objeto
    }else{
    maior = num2
    objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: num2 % num1 === 0,
    diferenca: num2 -num1}
    console.log(objeto)
    return objeto
    }
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

let numerosPares = [];
for (let i = 0; numerosPares.length < n; i += 2) {
    numerosPares.push(i);
}
return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC){
    return ("Equilátero")

    }else if(ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return ("Escaleno")
    }else{
        return ("Isósceles")
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity;
    let maior = -Infinity;
    let segundoMenor = Infinity;
    let segundoMaior = -Infinity;
    let novoArray = [];
  
    for (let i of array) {
      if (i < menor) {
        menor = i;
      }
      if (i > maior) {
        maior = i;
      }
    }
  
    for (let i of array) {
      if (i < segundoMenor && i !== menor) {
        segundoMenor = i;
      }
      if (i > segundoMaior && i !== maior) {
        segundoMaior = i;
      }
    }
    novoArray.push(segundoMaior);
  novoArray.push(segundoMenor);

  return novoArray;
}

/* 
array.sort((a,b) => a - b) 
    return array = [array[array.length -2], array[1]]
 */
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
return {
    ...pessoa,
    nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let meuNovoArray = pessoas.filter((pessoa)=>{
    return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5})
    return meuNovoArray
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
let meuNovoArray2 = pessoas.filter((pessoa)=>{
    return pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura <= 1.5})
    return meuNovoArray2
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        let totalDeCompras = 0;
        conta.compras.forEach((valor) => {
          totalDeCompras += valor;
        });
        conta.saldoTotal -= totalDeCompras;
      });
      return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
consultas.sort(function(a,b){
    if(a.nome < b.nome){
        console.log(consultas)            
        return -1;
    }else{
        return true;
    }
}
)
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let i = 0; i < consultasData.length; i++) {
        for (let j = 0; j < consultasData.length - i - 1; j++) {
          const arrayData1 = consultasData[j].dataDaConsulta.split("/");
          const dia1 = Number(arrayData1[0]);
          const mes1 = Number(arrayData1[1]);
          const ano1 = Number(arrayData1[2]);
    
          const arrayData2 = consultasData[j + 1].dataDaConsulta.split("/");
          const dia2 = Number(arrayData2[0]);
          const mes2 = Number(arrayData2[1]);
          const ano2 = Number(arrayData2[2]);
    
          const data1 = new Date(ano1, mes1 - 1, dia1).getTime();
          const data2 = new Date(ano2, mes2 - 1, dia2).getTime();
    
          if (data1 > data2) {
            const temp = consultasData[j];
            consultasData[j] = consultasData[j + 1];
            consultasData[j + 1] = temp;
          }
        }
      }
      return consultasData;
}