let inicioJogo = ()=>{

let cardUser1 = comprarCarta();
let cardUser2 = comprarCarta();
let sumCardUser = cardUser1.valor + cardUser2.valor
console.log(`USER CARD:  ${cardUser1.texto} ${cardUser2.texto} - Pontuação: ${sumCardUser}`)

let cardComputer1 = comprarCarta();
let cardComputer2 = comprarCarta();
let sumCardComputer = cardComputer1.valor + cardComputer2.valor
console.log(`COMPUTER CARD: ${cardComputer1.texto} ${cardComputer2.texto} - Pontuação: ${sumCardComputer}`)

if(sumCardUser > sumCardComputer){
   console.log("CONGRATULATIONS, YOU WIN")
}else if(sumCardUser < sumCardComputer){
   console.log("YOU LOST, DON´T BE SAD, TRY AGAIN")
}else if(sumCardUser === sumCardComputer){
   console.log("DRAW")
}
return inicioJogo
}

alert(" Hi, Welcome to the **BlackJack Game**")
if(confirm("Do you want to start another round? ")){
console.log("----------GOOD LUCK----------"), inicioJogo()
} else{
   console.log("GAME OVER")
}
