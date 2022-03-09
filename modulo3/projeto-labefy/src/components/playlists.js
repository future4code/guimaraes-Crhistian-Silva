import React from "react";

class Playlists extends React.Component {
  render() {
    return (
      <div>
        <p>Tela Playlists</p>
        <button onClick={this.props.IrParaTelaInicial}>
          Ir Para Tela Inicial
        </button>
      </div>
    );
  }
}

export default Playlists;
