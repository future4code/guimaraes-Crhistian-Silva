//Exercício 1
//a)

let minhaString:string = "minha string";

minhaString = '25'

//minhaString = 25  
// Resposta: O Tipo number não pode ser atribuido a uma variável que já foi estabelecida como tipo string

//b)

let meuNumero:number = 25 

//Resposta: 

/* let meuNumero:number | string = 25

meuNumero = '25' */

//c)

const person:{nome:string, idade:number, corFavorita:string} = {
    nome: 'crhistian',
    idade:39,
    corFavorita: 'amarelo'
}
    
type personType = {
    nome: string,
    idade: number,
    corFavorita:string
}

enum CorFavorita{
    AZUL = 'azul',
    ROSA = 'rosa',
    PRETO = 'preto',
    VERDE = 'verde',
    AMARELO = 'amarelo'
}

const person2: personType = {
    nome: 'paulo',
    idade:24,
    corFavorita: CorFavorita.AZUL

}

const person3:personType = {
    nome: 'maria',
    idade:35,
    corFavorita: CorFavorita.VERDE
}

const person4:personType ={
    nome: 'paula',
    idade: 12,
    corFavorita: CorFavorita.ROSA
}

console.log('person', person)
console.log('person2', person2)
console.log('person3', person3)
console.log('person4', person4)