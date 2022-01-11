let inicioJogo = ()=>{

let cardUser1 = comprarCarta();
let cardUser2 = comprarCarta();
let sumCardUser = cardUser1.valor + cardUser2.valor
alert(`USER CARD:  ${cardUser1.texto} ${cardUser2.texto} - Pontuação: ${sumCardUser}`)

let cardComputer1 = comprarCarta();
let cardComputer2 = comprarCarta();
let sumCardComputer = cardComputer1.valor + cardComputer2.valor
alert(`COMPUTER CARD: ${cardComputer1.texto} ${cardComputer2.texto} - Pontuação: ${sumCardComputer}`)

if(sumCardUser > sumCardComputer){
   alert("CONGRATULATIONS, YOU WIN")
}else if(sumCardUser < sumCardComputer){
   alert("YOU LOST, DON´T BE SAD, TRY AGAIN")
}else if(sumCardUser === sumCardComputer){
   alert("DRAW")
}
return inicioJogo
}

alert(" Hi, Welcome to the **BlackJack Game**")
if(confirm("Do you want to start another round? ")){
alert("----------GOOD LUCK----------"), inicioJogo()
} else{
   alert("GAME OVER")
}
