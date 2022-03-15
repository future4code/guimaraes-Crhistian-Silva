import React from 'react'
import styled from 'styled-components'
import CriarMusicas from './criarMusicas';

const TelaEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 30vw;
  font-weight: bold;
  color: #fff;
  background-image: radial-gradient(
      circle at 20% 14%,
      rgba(27, 27, 27, 0.05) 0%,
      rgba(27, 27, 27, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 100%
    ),
    radial-gradient(
      circle at 18% 51%,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 100%
    ),
    radial-gradient(
      circle at 29% 38%,
      rgba(160, 160, 160, 0.05) 0%,
      rgba(160, 160, 160, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 100%
    ),
    linear-gradient(90deg, rgb(35, 74, 255), rgb(132, 161, 173));
    .retornoMap {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    .botaoVoltar{
      display: flex;
      button{
        height: 1.5rem; 
       margin-left: 1rem;
       align-self: center;
      }
    }
    
`;

class PlaylistsDetalhes extends React.Component {

  render() {

    const usuarioComponente = this.props.valorEstadoPlaylist.map((playlist) => {
      return (
        <div key={playlist.id}> <a> {playlist.name}</a>
          <button  onClick={() => this.props.valorFuncaoMostrarDetalhesPlaylist(playlist.id)} >{this.props.valorBotaoMostrarDetalhes}</button>
          <button onClick={() => this.props.valorFuncaoDeletarPlaylist(playlist.id)}>
            DELETAR PLAYLISTS
          </button>
        </div>
      );
    });


    return (

      <TelaEstilizada>

        <div>
          <h4> Aqui vao os detalhes das musicas</h4>
        </div>
        {usuarioComponente}
      </TelaEstilizada>
    )
  }
}

export default PlaylistsDetalhes