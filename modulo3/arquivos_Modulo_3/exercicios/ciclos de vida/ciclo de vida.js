import "./styles.css";
import React from "react";

export default class App extends React.Component {
  state = {
    nome: "",
    email: "",
    idade: ""
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeIdade = (e) => {
    this.setState({ idade: e.target.value });
  };

  pegarDados() {
    const nomeString = localStorage.getItem("nome");
    const nome = JSON.parse(nomeString);

    if (nome) {
      this.setState({
        nome: nome
      });
    }

    const emailString = localStorage.getItem("email");
    const email = JSON.parse(emailString);

    if (email) {
      this.setState({
        email: email
      });
    }

    const idadeString = localStorage.getItem("idade");
    const idade = JSON.parse(idadeString);

    if (idade) {
      this.setState({
        idade: idade
      });
    }
  }

  componentDidMount() {
    this.pegarDados();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nome !== this.state.nome) {
      localStorage.setItem("nome", JSON.stringify(this.state.nome));
    }

    if (prevState.email !== this.state.email) {
      localStorage.setItem("email", JSON.stringify(this.state.email));
    }

    if (prevState.idade !== this.state.idade) {
      localStorage.setItem("idade", JSON.stringify(this.state.idade));
    }
  }

  render() {
    console.log(this.state.nome, this.state.email, this.state.idade);
    return (
      <div className="App">
        <h1>Exercício - Ciclo de vida</h1>

        <form>
          <label>
            Nome:
            <input
              type="text"
              onChange={this.onChangeNome}
              value={this.state.nome}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              onChange={this.onChangeEmail}
              value={this.state.email}
            />
          </label>
          <label>
            Idade:
            <input
              type="number"
              onChange={this.onChangeIdade}
              value={this.state.idade}
            />
          </label>
        </form>
      </div>
    );
  }
}
