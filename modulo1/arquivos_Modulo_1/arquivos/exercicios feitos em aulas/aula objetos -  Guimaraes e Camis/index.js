

// ------ objetos -----//
// const variavelInstrutora = "camis"

// const instrutora = {
//     nome: "camis" ,
    // apelido: "ca" ,
    // idade: 27 ,
    // responsabilidades: [ "dar aula" , "corrigir exercicio" , "mandar mensagem"] ,
    // responderSlack: () => {
    //     console.log(" olá aluno, alguma dúvida?")
    // },

    // aulas: {
    //     funcoes: true ,
    //     variaveis: false 
    // } ,

// }


// const novaInstrutora = {
//     ...instrutora ,
   
//     sobrenome: "xavier"    
// }

// console.log(instrutora)
// console.log(novaInstrutora)
//  instrutora.sobrenome = "monteiro"
// console.log( instrutora )

// const instrutoraAulas = instrutora.aulas

// console.log(instrutoraAulas)

// console.log(" o nome da instrutora é:" ,  instrutora.nome )

// instrutora.nome = " amanda"
// console.log(" o nome da instrutora é:" ,  instrutora.nome )

// ------- array de objetos ---------//


// const instrutoras = [      { nome: "lais" , modulo: 1} ,      { nome: "camis" , modulo: 2} ,      { nome: "chijo" , modulo: 3}
// ]
// const nomeDaInstrutora = instrutoras[1].nome 

// console.log( nomeDaInstrutora   , instrutoras[0].nome   )


//--------- spread ----------- //

// const array = [  "camis" , "amanda" , "chijo"]

// console.log(array)


// const novoArray = [ ...array , "fernanda" ]

// console.log(novoArray)




//--------- exercicio 1 ----------//

// const filme = {
//     direcao: "Pierre Coffin" ,
//     nome: " Meu malvado favorito" ,
//     anoDeLancamento: 2010 ,
//     elenco: [ 	"Steve Carell" ,
//         "Jason Segel" , 
//         "Russell Brand" , 
//         "Julie Andrews" , 
//         "Will Arnett" ] ,
//     assistido: true 
// }
// filme.assistido = false

// console.log( filme.direcao )
// console.log( filme["nome"] )
// console.log(filme.anoDeLancamento)
// console.log( filme["elenco"] )
// console.log( ` camis assistiu ao filme? ${filme.assistido}` )



//--------- exercicio 2 ----------//
//  const pessoa = {
//      nome: "ricardo" ,
//      idade: 35 ,
//      generoMusicalFavorito: "axé"

//  }

// console.log( `O nome da pessoa é ${pessoa.nome} , ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito} .`)

//--------- exercicio 3 ----------//


// const filme = {
//     direcao: "Pierre Coffin" ,
//     nome: " Meu malvado favorito" ,
//     anoDeLancamento: 2010 ,
//     elenco: [ 	"Steve Carell" ,
//         "Jason Segel" , 
//         "Russell Brand" , 
//         "Julie Andrews" , 
//         "Will Arnett" ] ,
//     assistido: true 
// }

// filme.personagens = [ " gru" , "victor" , "Dr.Nefário"]

// console.log( `O  ${filme.elenco[0]}  é o : ${filme.personagens[0]}` )
// console.log( `O  ${filme.elenco[1]}  é o : ${filme.personagens[1]}` )
// console.log( `O  ${filme.elenco[2]}  é o : ${filme.personagens[2]}` )

// filme.elenco[0] = "Xuxa"

// console.log(  `O nome do filme é ${filme.nome}. Seus personagens são ${filme.personagens[0]} ,  ${filme.personagens[1]} e ${filme.personagens[2]}`  )

//--------- exercicio 4 ----------//

// function imprimirNoConsoleObjeto() {

//     const novaPessoa = {
//         ...pessoa ,
//         comidasPreferidas: ["arroz e feijao" , "chocolate" , "strogonoff" ] ,
//         melhorAmigo: {
//            nome: "fernando" , 
//        idade: 35
//         }
//     }

//    novaPessoa.melhorAmigo.idade  = "35"

//       const frase = ` O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]} , ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome}  e tem ${novaPessoa.melhorAmigo.idade}`
  

//     return frase

// }

// console.log(  imprimirNoConsoleObjeto()  ) 



// console.log( imprimirNoConsoleObjeto().toUpperCase() )