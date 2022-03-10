import React from "react";
import styled from "styled-components";
import axios from "axios";

const TelaEstilizada = styled.div`
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
  .form {
    display: flex;
    height: 2rem;
  }
  .form label,
  #inputPlaylist {
    display: flex;
    background-image: radial-gradient(circle at 10% 59%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 29% 72%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 12% 19%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 37% 87%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 31% 56%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 38% 73%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 37% 56%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 2% 59%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 9% 66%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 38% 80%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.04) 4%,transparent 4%, transparent 96%),linear-gradient(90deg, rgb(148, 148, 148),rgb(223, 223, 223));
    border-radius: 10px 2px;
    color: black;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    margin-left: 0.2rem;
  }
`;

const RetornoMap = styled.div`
display: flex;
margin-top: 1rem;
align-items: center;

.botaoMap{
  margin-left: 1rem;
  height: 2rem;
}
`


const urlPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "crhistian-felipe-guimaraes",
  },
};

class CriarPlaylists extends React.Component {
  state = {
    playlists: [],
    name: "",
  };

  componentDidMount() {
    this.getPlaylistApi();
  }

  getPlaylistApi = () => {
    axios
      .get(urlPlaylist, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createPlaylistApi = () => {
    const body = {
      name: this.state.name,
    };

    axios
      .post(urlPlaylist, body, headers)
      .then((response) => {
        console.log(response.data);
        alert(`A Playlist ${this.state.name} foi criada com sucesso`);
        this.setState({ name: "" });
         this.getPlaylistApi()
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  onChangePlaylist = (event) => {
    this.setState({ name: event.target.value });
  };

  onClickDelPlaylist = async (idPlaylist) => {
    if (window.confirm("Deseja deletar")) {
      try {
        const response = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
          headers
        );
        this.getPlaylistApi();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  render() {
    const PlaylistComponente = this.state.playlists.map((playlist) => {
      return (
        <RetornoMap>
          <li key={playlist.id}>
            {playlist.name}
          </li>
          <button className="botaoMap" onClick={() => this.onClickDelPlaylist(playlist.id)}>
              <span>Deletar</span>
              <div class="liquid"></div>
            </button>
        </RetornoMap>
      );
    });

    return (
      <TelaEstilizada>
        <p>Tela Criar Playlists</p>
        <button onClick={this.props.IrParaTelaInicial}>
          <span>Tela Inicial</span>
          <div class="liquid"></div>
        </button>
        <br />
        <div className="form">
          <label>Crie Playlists AQUI ==> </label>
          <input
            id="inputPlaylist"
            placeholder="Digite o Nome da Playlist"
            value={this.state.name}
            onChange={this.onChangePlaylist}
          ></input>
          <button onClick={this.createPlaylistApi}>
            <span>criar</span>
            <div class="liquid"></div>
          </button>
        </div>
        {PlaylistComponente}
      </TelaEstilizada>
    );
  }
}

export default CriarPlaylists;
