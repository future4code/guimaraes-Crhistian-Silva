//Exercícios de interpretação de código
//1. RESPOSTAS
/* a) Matheus Nachtergale
Virginia Cavendish
Canal: Globo, horario: 14h  */
 
/* //2. RESPOSTAS
 a) nome: Juca, idade: 3 , raca: SRD 
    nome: Juba, idade: 3 , raca: SRD 
    nome: Jubo, idade: 3 , raca: SRD 
b) copia todo o conteudo do objeto referenciado a seguir 
 */

//3. RESPOSTAS
/* a) false 
undefined 

b) porque a chave altura nao foi atribuida no objeto  */

 /* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
     Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**  */
    
 const pessoaExercicio = {
        nome: "Carlos",
        apelidos: ["Carlao", " perna de pau", " pinduca"]
       }
       function imprimirPessoa () {
         let impressao = `Eu sou ${pessoaExercicio.nome}, mas pode me chamar de: ${pessoaExercicio.apelidos}`
return impressao   
       }

console.log(imprimirPessoa())  

     /* b)Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
     Depois, chame a função feita no item anterior passando como argumento o novo objeto */

const novaPessoaExercicio = {
    ...pessoaExercicio.nome ,
    novosApelidos: ["carlinhos", "jogador", "cabeca"]
   
}     

console.log(imprimirPessoa(novaPessoaExercicio))

//2. Resolva os passos a seguir: 
    
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const objeto1 = {
    nome: "Paulo",
    idade: 30,
    profissao: "padeiro",
}
console.log(objeto1)

const objeto2 = {
    nome: "Joao",
    idade: 35,
    profissao: "astronauta"
}
console.log(objeto2)


//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
/* 
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */

const funcaoArray = (array) => {
    let arrayLista = [array.nome, array.nome.length, array.idade, array.profissao, array.profissao.length]
    return arrayLista
}

console.log(funcaoArray(objeto1))
console.log(funcaoArray(objeto2))

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

let carrinho = []

/* b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`) */

let fruta1 = {
    nome: "melao",
    disponibilidade: true 
}
let fruta2 = {
    nome: "banana",
    disponibilidade: true
}
let fruta3 = {
    nome: "maca",
    disponibilidade: true
}

/* c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
 Invoque essa função passando os três objetos criados.  */
function frutasCarrinho(fruta) {
    carrinho.push(fruta)
    return carrinho

}

console.log(frutasCarrinho(fruta1))
console.log(frutasCarrinho(fruta2))
console.log(frutasCarrinho(fruta2))


/* 


d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
 */
console.log(carrinho)

/* // DESAFIOS
1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades.
 Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
    - Exemplo
        
        ```
        // Exemplo de entrada: "Lais", 26, "Instrutora"
        // O que deve ser impresso no console: 
        { nome: 'Lais', profissao: "Instrutora", idade: 26}


          /*  Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. 
           A função deve retornar uma mensagem no seguinte modelo:
           O primeiro filme foi lançado antes do segundo? false
           O primeiro filme foi lançado no mesmo ano do segundo? true

           matrix = 21 de maio de 1999
           300 = 9 de marco de 2007
 */
           let nomeFilmes = () => {
            let filme1 = {
                nome: "Matrix",
                anoDeLancamento: 1999
            }
            let filme2 = {
                nome: "300",
                anoDeLancamento: 2007
            }
            let comparacao1 = (filme1.anoDeLancamento) < (filme2.anoDeLancamento) 
            let comparacao2 = (filme1.anoDeLancamento) === (filme2.anoDeLancamento)
            return console.log(`O primeiro filme foi lançado antes do segundo? ${comparacao1},
O primeiro filme foi lançado no mesmo ano do segundo? ${comparacao2}`)
            }
          nomeFilmes()
//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: 
//ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.
          
const funcaoControleEstoque = (fruta) => {
        const frutaNova =  {...fruta3, disponibilidade: false}
        return frutaNova
                }
console.log(funcaoControleEstoque())
