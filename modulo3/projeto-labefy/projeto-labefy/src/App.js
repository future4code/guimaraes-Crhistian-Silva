import "./App.css";
import React from "react";
import Playlists from "./components/playlists";
import TelaInicial from "./components/telainicial";
import CriarPlaylists from "./components/criarplaylists";

class AllPlaylists extends React.Component {
  state = {
    tela: "TelaInicial",
    name: [],
  };

  escolheTela = () => {
    switch (this.state.tela) {
      case "TelaInicial":
        return (
          <TelaInicial
            IrParaPlaylists={this.IrParaPlaylists}
            IrParaCriarPlaylists={this.IrParaCriarPlaylists}
          />
        );
      case "Playlists":
        return <Playlists IrParaTelaInicial={this.IrParaTelaInicial} />;
      case "CriarPlaylists":
        return <CriarPlaylists IrParaTelaInicial={this.IrParaTelaInicial} />;
      default:
        return <p>Tela Não Selecionada</p>;
    }
  };

  IrParaTelaInicial = () => {
    this.setState({ tela: "TelaInicial" });
  };

  IrParaPlaylists = () => {
    this.setState({ tela: "Playlists" });
  };

  IrParaCriarPlaylists = () => {
    this.setState({ tela: "CriarPlaylists" });
  };

  render() {
    return <div className="App">{this.escolheTela()}</div>;
  }
}

export default AllPlaylists;
