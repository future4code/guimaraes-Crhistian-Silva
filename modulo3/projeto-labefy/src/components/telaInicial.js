import React from 'react';

class TelaInicial extends React.Component{
  render(){

    return (
      <div>
        <p>Tela Inicial</p>
        <button onClick={this.props.IrParaPlaylists}>
          Ir Para Tela Playlists
        </button>
      </div>
    );
  }
}

export default TelaInicial
