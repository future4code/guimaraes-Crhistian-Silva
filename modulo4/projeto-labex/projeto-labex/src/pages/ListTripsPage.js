import React, { useState } from 'react'


export default function ListTripsPage(props) {
  const [tela, setTela] = useState(props.estadoTela)

  const mudatela = () =>{
    setTela(undefined)
    console.log(tela)
  }

  return (

    <div>
      <header>
      <button onClick={() => {props.valorFuncaoMudaTela("Tela Inicial")}}> Voltar ao Inicio</button>
    <button>Inscrever-se</button>
      </header>
      <main>
      <h2>Tela Lista de Viagens</h2>
      <ul>
        <li>
          <p>Nome:</p>
          <p>Descrição:</p>
          <p>Planeta: </p>
          <p>Duração:</p>
          <p> Data: </p>
        </li>
      </ul>

      </main>
   
        
  
    </div>
  )
}
