import React from "react";
import styled from "styled-components";
import axios from 'axios'
import MusicasPlaylist from "./musicasPlaylist";
import PlaylistsDetalhes from "./playlists";
import CriarMusicas from "./criarMusicas";


const TelaInicialEstilizada = styled.div`
  display: grid;
 grid-template-columns: 1fr 3fr;
  height: 100vh;
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


const urlGetPlaylists =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "crhistian-felipe-guimaraes",
  },
};


class TelaInicial extends React.Component {

  state = {
    playlists: [],
    inputNomePlaylist: "",
    idPlaylist: "",
    tracksPlaylist: [],
    detalhesPlaylist: false,
    nomeBotaoDetalhesPlaylists: "MOSTRAR MÚSICAS",
    listaPlaylists: false,
    nomeBotaoPlaylists: "MOSTRAR PLAYLISTS",
    inputCriarArtista: "",
    inputCriarMusica: "",
    inputCriarUrl: ""
  };

  componentDidMount() {
    this.getPlaylistApi();

  }


  getPlaylistApi = (id) => {
    axios
      .get(urlGetPlaylists, headers)
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        this.setState({ idPlaylist: response.id })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChangeNomePlaylist = (event) => {
    this.setState({ inputNomePlaylist: event.target.value });
  };

  onChangeinputCriarArtista = (event) => {
    this.setState({ inputCriarArtista: event.target.value });
  };

  onChangeinputCriarMusica = (event) => {
    this.setState({ inputCriarMusica: event.target.value });
  };

  onChangeinputCriarUrl = (event) => {
    this.setState({ inputCriarUrl: event.target.value });
  };


  createPlaylistApi = async () => {
    const body = {
      name: this.state.inputNomePlaylist,
    };
    if (window.confirm("Deseja Criar Uma Nova Playlist ?")) {
      try {
        const response = await axios.post(
          urlGetPlaylists, body, headers);
        alert(`A Playlist ${this.state.inputNomePlaylist} foi criada com sucesso`);
        this.setState({inputCriarArtista: "" });
        this.setState({inputCriarMusica: "" });
        this.setState({inputCriarUrl: "" });
        this.getPlaylistApi();
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };


  onClickDelPlaylist = async (id) => {
    if (window.confirm("Deseja deletar")) {
      try {
        const response = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          headers);
        this.getPlaylistApi();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  getTrackslistApi = (id) => {
    this.setState({ idPlaylist: id })
    this.setState({ detalhesPlaylist: !this.state.detalhesPlaylist })
    if (this.state.detalhesPlaylist === true) {
      this.setState({ nomeBotaoDetalhesPlaylists: 'MOSTRAR MÚSICAS' })
    } else {
      this.setState({ nomeBotaoDetalhesPlaylists: 'OCULTAR MÚSICAS' })
    }
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, headers)
      .then((response) => {
        this.setState({ tracksPlaylist: response.data.result.tracks });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  mudaEstadoListaPlaylists = (id) => {
    this.setState({ listaPlaylists: !this.state.listaPlaylists })

    if (this.state.listaPlaylists === true) {
      this.setState({ nomeBotaoPlaylists: 'MOSTRAR PLAYLISTS' })
    } else {
      this.setState({ nomeBotaoPlaylists: 'OCULTAR PLAYLISTS' })
    }
  }

  createTrackApi = (id) => {
    const body = {
      name: this.state.inputCriarMusica,
      artist: this.state.inputCriarArtista,
      url: this.state.inputCriarUrl,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
        body, headers)
      .then((response) => {
        alert(`A ${this.state.inputCriarMusica} foi adicionada com sucesso`);
        console.log("Sucesso", response);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao adicionar a música");
        console.log("Erro", error);
      });
  };


  render() {
 

    return (
      <TelaInicialEstilizada>

        <div className="botaoVoltar">
          <p>Tela Inicial</p>
          <button onClick={() => this.props.valorFuncaoMudaTela("Playlists")}>
            <span>Tela Playlists</span>
            <div className="liquid"></div>
          </button>
        </div>
        <div>

          <label>Cria Playlist Aqui</label>
          <input placeholder="Digite AQUI"
            value={this.state.inputNomePlaylist}
            onChange={this.onChangeNomePlaylist}
          ></input>
          <button onClick={this.createPlaylistApi}> CRIAR PLAYLIST</button>
          <button onClick={this.mudaEstadoListaPlaylists}>{this.state.nomeBotaoPlaylists}</button>

        </div>
        {this.state.detalhesPlaylist && <CriarMusicas
        valorInputCriarArtista={this.state.inputCriarArtista}
        valorInputCriarMusica={this.state.inputCriarMusica}
        valorInputCriarUrl={this.state.inputCriarUrl}
        valorOnChangeInputArtista={this.onChangeinputCriarArtista}
        valorOnChangeInputMusica={this.onChangeinputCriarMusica}
        valorOnChangeInputUrl={this.onChangeinputCriarUrl}
        funcaoAdicionarMusica={this.createTrackApi}
     
         />}
        {this.state.listaPlaylists && <PlaylistsDetalhes
          valorEstadoPlaylist={this.state.playlists}
          valorFuncaoMostrarDetalhesPlaylist={this.getTrackslistApi}
          valorFuncaoDeletarPlaylist={this.onClickDelPlaylist}
          valorBotaoMostrarDetalhes={this.state.nomeBotaoDetalhesPlaylists}
        />
        }
         {this.state.detalhesPlaylist && <MusicasPlaylist valorTracksPlaylist={this.state.tracksPlaylist} />}
   

      </TelaInicialEstilizada>
    );
  }
}

export default TelaInicial

