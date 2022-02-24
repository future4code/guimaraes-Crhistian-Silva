import "./App.css";
import React from "react";
import Cadastros from "./components/cadastros";
import ListaCadastros from "./components/listaCadastros";
import styled from "styled-components";

const EstiloApp = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    return (
      <EstiloApp>
        <Cadastros />
        <ListaCadastros />
      </EstiloApp>
    );
  }
}

export default App;
