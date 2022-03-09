import "./App.css";
import React from "react";
import Playlists from "./components/playlists";
import TelaInicial from "./components/telaInicial";

class AllPlaylists extends React.Component {
  state = {
    tela: "TelaInicial",
  };

  escolheTela = () => {
    switch (this.state.tela) {
      case "TelaInicial":
        return <TelaInicial IrParaPlaylists={this.IrParaPlaylists} />;
      case "Playlists":
        return <Playlists IrParaTelaInicial={this.IrParaTelaInicial} />;
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

  render() {
    return (
      <div className="App">
    {this.escolheTela()}
      </div>
    );
  }
}

export default AllPlaylists;
