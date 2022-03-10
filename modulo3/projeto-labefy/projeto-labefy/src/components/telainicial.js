import React from "react";
import styled from "styled-components";

const TelaInicialEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #fff;
  width: 100vw;
  height: 100vh;
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
`;

class TelaInicial extends React.Component {
  state = {
    playlists: [],
  };

  irParaCriarPlaylists = () => {};

  render() {
    return (
      <TelaInicialEstilizada>
        <p>Essa é a Tela Inicial</p>
        <ul class="nav flex-column">
          <li class="nav-item">
            <button onClick={this.props.IrParaPlaylists}>
              <span>Playlists</span>
              <div class="liquid"></div>
            </button>
            <br/>
          </li>
          <li class="nav-item">
            <button onClick={this.props.IrParaCriarPlaylists}>
              <span>Criar Playlists</span>
              <div class="liquid"></div>
            </button>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Aqui
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Aqui outro
            </a>
          </li>
        </ul>
      </TelaInicialEstilizada>
    );
  }
}

export default TelaInicial;
