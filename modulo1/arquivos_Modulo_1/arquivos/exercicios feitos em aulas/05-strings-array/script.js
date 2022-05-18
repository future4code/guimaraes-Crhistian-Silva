// EXERCICIO 01
//  const nome = prompt("Seu nome")
//  const cor = prompt("Sua cor favorita")

//  console.log("A cor favorita de "+nome+" é "+cor)  // concatenação 
//  console.log(`A cor favorita de ${nome} é ${cor}`) // template string 

// STRINGS
//  const nomeString = "Tayanne Silva Novais"

// propriedade -> length
//  console.log(nomeString.length)

// metodos -> toLowerCase() && toUpperCase()
//  const stringString = "AaAaAaAaAaAaAaAAAAAAAAAAAAAAAAA"

//  console.log(stringString.toLowerCase())
//  console.log(stringString.toUpperCase())

//  const email = "        tayanne      silva @labenu.com.br          "
//  console.log(email.trim()) // retira os espaços do inicio e do final da strinf

// includes()
// const frase01 = "Eu amo cerveja, vou ali beber cerveja, cerveja, cerveja, cerveja"
// console.log(frase01.includes('leite')) -> false

// replaceAll(palavraAntiga, palavraNova) = substitui todas as ocorrencias de palavraAntiga e substitui por palavraNova
// const novaFrase = frase01.replace('cerveja', 'batata')
//    console.log(novaFrase)


// EXERCICIO 02
// const frase02 = "eu amooooooooooo Labenuuuuuu"

// const fraseMaiscula = frase02.toUpperCase()
// const frisi = fraseMaiscula.replaceAll('O', 'I')

// console.log(frisi)
// console.log(frisi.length)


// ARRAYS
//  const listaDeCompras = ['arroz', 'feijao', 'agua', 'cerveja']

// acessando o elemento atraves da posição -> array inicia na posição 0
//  console.log(listaDeCompras[3])



// EXERCICIO 03
//  const gatos = ['Preto', 'Branco', 'Tigrado', 'Amarelo']

// gatos.pop() // remove do final
// console.log(gatos)

// gatos.push("Tricolor") // adiciona no final
// console.log(gatos)


//const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// letras.splice(2,2) // retira N elementos apartir do indice I
// console.log(letras) // ["A", "B", "E", "F", "G", "H"]


// EXERCICIO 4
// const numeros = [1, 2, 3, 4, 5, 6]

// console.log(numeros.length)
// numeros.push(7)
// numeros.splice(3, 2)
// console.log(numeros)
// console.log(numeros.length)
