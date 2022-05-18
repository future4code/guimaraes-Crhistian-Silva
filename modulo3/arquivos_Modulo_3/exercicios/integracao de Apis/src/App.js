// Importar as bibliotecas
import axios from "axios";
import React from "react";

// Criar constantes reutilizáveis no código, para podermos reaproveitar informações

const urlPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "fayra-miranda-aulas"
  }
};

export default class App extends React.Component {
  // Criação de um estado para informações que mudam durante o tempo ( número de playlist e valores que estão no input)

  state = {
    playlists: [],
    playlistInput: ""
  };

  // Criação de um componentDidMount, onde colocamos as informações que queremos renderizar na tela assim que aparecer

  componentDidMount() {
    this.getAllPlaylists();
  }

  // Criação da Requisição para pegar todas as playlists, usamos as constantes reutilizáveis declaradas acima

  getAllPlaylists = () => {
    axios
      .get(urlPlaylist, headers)
      .then((res) => {
        // console.log(res.data.result.list);

        // Estamos mudando o estado da nossa playlist para os valores que estão no backend

        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // Criamos uma função para criar uma nova playlist

  createPlaylist = () => {
    //Declaramos um body como variável reaproveitável, do lado de fora da função.E o nome da nossa playlist, passa a ser o nome inserido pelo nosso usuário no input

    const body = {
      name: this.state.playlistInput
    };
    axios
      .post(urlPlaylist, body, headers)
      .then((res) => {
        console.log(res.data.result.list);
        // Imprimimos o nome da nossa playlist digitada pelo usuário, caso  a requisição dê certo.
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
        // Limpamos o imput após o usuário digitar
        this.setState({ playlistInput: "" });
        // Chamamos a função para pegar todas as playlists
        this.getAllPlaylists();
      })
      // Fazemos o tratamento de erros, caso a nossa requisição dê ruim
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  // Criamos um evento para pegar o valor do imput colocado pelo nosso usuário

  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  render() {
    // Mapeamos nosso array que contenha nossa playlist para imprimir uma por uma das nossas playlists (chamos cada playlist de play)
    const playlistComponents = this.state.playlists.map((play) => {
      // Retornamos o nome de cada playlist em uma lista, e passamos a Key com o nosso id para otimizar o código
      return <li key={play.id}> {play.name} </li>;
    });

    return (
      <div>
        <h1>LabeFay Exs 1 e 2 </h1>
        <input
          // Criamos o valor do input como a alteração que foi escrita pelo usuário.

          // Utilizamos o OnChange para quando escrevermos no input, mudar o texto e podemos enviar as informações

          value={this.state.playlistInput}
          placeholder="Digite a sua Playlist"
          onChange={this.onPlaylistTextChange}
        />

        {/* Quando clicarmos no botão,precisamos chamar a função que cria uma nova playlist. Para isso usamos o this.createPlaylist */}

        <button onClick={this.createPlaylist}>Eviar</button>
        {/* Chamamos o nosso map, em que passamos playlist por playlist */}

        {playlistComponents}
      </div>
    );
  }
}
