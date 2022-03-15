import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CriaMusicasEstilizado = styled.div`
background-color: yellow;
.inputMusica{
  display: flex;
  flex-direction: column;
  width: 30%;
}
`

function CriarMusicas(props) {



  return (
    <CriaMusicasEstilizado class="criarMusicas">
        <p>Criar Musicas da Playlist Aqui</p>
        <div class="inputMusica">
          <form>  
            <label>Nome do Artista</label>
            <input placeholder='Digite o nome do Artista' value={props.valorInputCriarArtista} onChange={props.valorOnChangeInputArtista}></input>
          </form>
          <form>  
            <label>Nome da Música</label>
            <input placeholder='Digite o nome da musica' value={props.valorInputCriarMusica} onChange={props.valorOnChangeInputMusica}></input>
          </form>
          <form>  
            <label>Endereço URL da música</label>
            <input placeholder='Digite o URL da Música'value={props.valorInputCriarUrl} onChange={props.valorOnChangeInputUrl}></input>
          </form>
          <button onClick={props.funcaoAdicionarMusica}>CRIAR MÚSICAS</button>
        </div>
       </CriaMusicasEstilizado>
  )
}

export default CriarMusicas


