import React from 'react'

export default function HomePage(props) {
    console.log(props.valorTela)
  return (
    <div> <h2>Tela Inicial</h2>
    <button onClick={() => {props.valorFuncaoMudaTela("Tela Viagens")}} > Tela Viagens</button>
    <button onClick={() => {props.valorFuncaoMudaTela("Tela Adm")}} > Area Adm</button>
    </div>
  )
}
