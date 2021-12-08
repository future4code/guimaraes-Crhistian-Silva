let arrayCartasUsuario = []
let arrayCartasComputador = []
let somaUsuario = 0
let somaComputador = 0


let criarArray = () =>{
   arrayCartasUsuario.push(comprarCarta())
   arrayCartasUsuario.push(comprarCarta())
   arrayCartasComputador.push(comprarCarta())
   arrayCartasComputador.push(comprarCarta())
   
if(arrayCartasUsuario[0].texto && arrayCartasUsuario[1]. texto === "A"){
   arrayCartasUsuario.push(comprarCarta())
   arrayCartasUsuario.push(comprarCarta())
}

if(arrayCartasComputador[0].texto && arrayCartasComputador[1]. texto === "A"){
   arrayCartasComputador.push(comprarCarta())
   arrayCartasComputador.push(comprarCarta())
}
}

criarArray()

let arrayPontosUsuario = arrayCartasUsuario.map((item =>{
   return item.valor
}))

let arrayPontosComputador = arrayCartasComputador.map((item =>{
   return item.valor
}))

let somaPontosUsuario = (array) => {
   for(i=0; i < array.length; i++){
      somaUsuario += array[i]
   }
   return somaUsuario
}

let retornoSomaUsuario = somaPontosUsuario(arrayPontosUsuario)
//console.log(retornoSomaUsuario)


let somaPontosComputador = (array) => {
   for(i=0; i < array.length; i++){
      somaComputador += array[i]
   }
   return somaComputador
}

let retornoSomaComputador = somaPontosComputador(arrayPontosComputador)
//console.log(retornoSomaComputador)

let comecarJogo = () =>{
   alert("Bemvindo ao jogo de ** BLACK-JACK **")
   if(confirm("Deseja Iniciar uma nova rodada")){
      if(confirm (`COMPUTER CARD: ${arrayCartasUsuario[0].texto} ${arrayCartasUsuario[1].texto}. A carta revelada do Computador é ${arrayCartasComputador[0].texto}\n"Deseja comprar mais uma carta?" `)){
         alert("DESISTI E NÃO CONSEGUI FAZER MAIS NADA")
      }else{
         alert("o jogo acabou")}
      }else{
         alert("o jogo acabou")
      }
   }

comecarJogo()