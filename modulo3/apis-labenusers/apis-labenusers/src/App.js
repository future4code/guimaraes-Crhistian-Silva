import React from "react";
import "./App.css";
import Cadastros from "./components/cadastros";
import ListaCadastros from "./components/listaCadastros";
import axios from "axios";
import { Redirect, Route, Routes } from "react-router-dom";

const urlUsers =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "crhistian-felipe-guimaraes",
  },
};

class App extends React.Component {
  state = {
    usuario: [],
    inputNome: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.getUserApi();
  }

  getUserApi = () => {
    axios
      .get(urlUsers, headers)
      .then((response) => {
        this.setState({ usuario: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createUserApi = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(urlUsers, body, headers)
      .then((response) => {
        console.log(response.data);
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
        alert(`O usuário ${this.state.inputNome} foi criado com sucesso`);
        this.getUserApi();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  onClickDelUser = async (idUser) => {
    if (window.confirm("Deseja deletar")) {
      try {
        const response = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`,
          headers);
        this.getUserApi();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  onClickBuscaUser = async (name) =>{
    try{
      const response = await 
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${name}`, 
      headers);
      console.log(response.data)
    } catch(error){
      console.log(error.response)
    }
  }

  render() {
    const usuarioComponente = this.state.usuario.map((user) => {
      return (
        <>
          <li key={user.id}>
            {" "}
            {user.name}
            <button onClick={() => this.onClickDelUser(user.id)}>
              {" "}
              DELETAR
            </button>
          </li>
        </>
      );
    });

    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Cadastros
                valorInputNome={this.state.inputNome}
                valorInputEmail={this.state.inputEmail}
                valorOnchageNome={this.onChangeNome}
                valorOnchageEmail={this.onChangeEmail}
                valorBotao={this.createUserApi}
              />
            }
          />
          <Route
            path="/listaCadastros"
            element={
              <ListaCadastros
              valorInputNome={this.state.inputNome}
              valorOnchageNome={this.onChangeNome}
              valorBusca={this.onClickBuscaUser}
              componenteRenderizado={usuarioComponente} />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
