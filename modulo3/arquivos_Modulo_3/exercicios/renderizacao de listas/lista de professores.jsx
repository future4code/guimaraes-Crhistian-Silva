import React from "react";
import styled from "styled-components";

const CardProf = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 8px 0;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
`;

const TextoLaranja = styled.p`
  color: orange;
`;

class App extends React.Component {
  state = {
    inputNome: "",
    inputIdade: "",
    instrutores: [
      { id: 1, nome: "Chijo", idade: 27 },
      { id: 2, nome: "Fezoca", idade: 28 },
      { id: 3, nome: "Indio", idade: 29 },
      { id: 4, nome: "Yuzo", idade: 30 }
    ]
  };

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  guardaIdade = (event) => {
    this.setState({ inputIdade: event.target.value });
  };

  adicionaProf = () => {
    // Criamos o novo professor baseado nos inputs do usuário
    const novoProf = {
      id: Math.random(),
      nome: this.state.inputNome,
      idade: Number(this.state.inputIdade)
    };

    // Criamos uma cópia do estado e adicionamos o novo prof
    const copia = [...this.state.instrutores, novoProf];
    // copia.push(novoProf)

    // Salvou as mudanças no estado
    this.setState({ instrutores: copia });
    this.setState({ inputNome: "", inputIdade: "" });
  };

  // Essa é a função que vai ser chamada nos botões de deletar dos cards
  deletaProf = (idDoProfParaDeletar) => {
    const copiaDaLista = [...this.state.instrutores];

    const profs = copiaDaLista.filter((prof) => {
      return prof.id !== idDoProfParaDeletar;
    });

    this.setState({ instrutores: profs });
  };

  render() {
    const listaComponentes = this.state.instrutores.map((prof) => {
      return (
        <CardProf key={prof.id}>
          <b>{prof.nome}</b>
          <TextoLaranja>{prof.idade}</TextoLaranja>
          <button onClick={() => this.deletaProf(prof.id)}>X</button>
        </CardProf>
      );
    });

    return (
      <div>
        <h1>Pessoas Instrutoras</h1>
        <input
          value={this.state.inputNome}
          onChange={this.guardaNome}
          placeholder="Nome"
        />
        <input
          value={this.state.inputIdade}
          onChange={this.guardaIdade}
          placeholder="Idade"
        />
        <button onClick={this.adicionaProf}>Adicionar</button>
        {listaComponentes}
      </div>
    );
  }
}

export default App;
