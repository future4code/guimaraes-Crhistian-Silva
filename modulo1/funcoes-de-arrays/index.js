// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. a) um novo array onde cada elemento do novo array recebe o array original

//2. b) um novo array de 3 posições apenas com os nomes  ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3. a) 0: [{nome: 'Amanda Rangel', apelido: 'Mandi'}
 //         {nome: 'Laís Petra', apelido: 'Laura'}]

 //EXERCICIOS DE ESCRITA DE CÓDIGO

 1.// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
 const pets = [
     { nome: "Lupin", raca: "Salsicha"},
     { nome: "Polly", raca: "Lhasa Apso"},
     { nome: "Madame", raca: "Poodle"},
     { nome: "Quentinho", raca: "Salsicha"},
     { nome: "Fluffy", raca: "Poodle"},
     { nome: "Caramelo", raca: "Vira-lata"},
    ]
    
// a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomesDogs = pets.map((dogs) =>{
    return(dogs.nome)
  }) 

// b) Crie um novo array apenas com os [cachorros salsicha]

const arrayDogSalsicha = pets.filter((raca) =>{
    return (raca.raca ===  "Salsicha")
  
  })
  console.log(arrayDogSalsicha)
    
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */ 
  
const arrayCupomDogSalsicha = pets.filter((raca) =>{
    return raca.raca === "Poodle"
  })

  for(i = 0; i < arrayCupomDogSalsicha.length;  i++){
      console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayCupomDogSalsicha[i].nome}`)
} 

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
 
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
] 

//a) Crie um novo array que contenha apenas o nome de cada item
 let arrayNomes= produtos.map((item) =>{
    return item.nome     
})
impressao = arrayNomes;
console.log(impressao)

//--------------------- ou -----------------

let arrayNomes2 = produtos.map(item => item.nome)
console.log(arrayNomes2)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
let arrayComDesconto = (array) => {
  let novoProduto = produtos.map((item) =>{
    let novoObjeto = {};
    let desconto = item.preco * 0.05;
    let novoPreco = item.preco - desconto;
    novoObjeto ={
      nome: item.nome,
      preco: novoPreco.toFixed(2)
    }
    return novoObjeto
  })
  return console.log(novoProduto)
}
 
arrayComDesconto(produtos);


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter(item => item.categoria === "Bebidas")

console.log(arrayBebidas)


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"  

const novoArray = produtos.filter((valorAtual) =>{
  return valorAtual.nome.includes("Ypê")
})

console.log(novoArray)