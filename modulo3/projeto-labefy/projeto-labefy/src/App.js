import React, { Component } from 'react';
import TelaInicial from "./component/telainicial";
import Playlists from "./component/playlists";



class App extends React.Component {
  state = {
    telaAtual: "Tela Inicial",
  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "Tela Inicial":
        return <TelaInicial valorFuncaoMudaTela={this.mudaTela}/>;
/*       case "Playlists":
        return <Playlists valorFuncaoMudaTela={this.mudaTela} />; */
      default:
        return <TelaInicial />;
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };


  render() {


    return (
      <div>
        {this.escolherTela()}
      </div>
    );
  }
}

export default App