import "./styles.css";
import React from "react";

export default class App extends React.Component {
  guardarNome() {
    const nome = "Bruno";
    localStorage.setItem("nome", nome);
  }

  pegarNome() {
    const nome = localStorage.getItem("nome");
    console.log(nome);
  }

  guardarFrutas() {
    const frutas = ["Banana", "Manga", "Uva"]; // array
    localStorage.setItem("frutas", JSON.stringify(frutas)); // armazenar em string
    localStorage.setItem("frutas-sem-stringfy", frutas); // armazenar em string
  }

  pegarPrimeiraFruta() {
    const frutasString = localStorage.getItem("frutas"); //string -> Banana,Manga,Uva
    const frutasStringSemStringify = localStorage.getItem(
      "frutas-sem-stringfy"
    );
    console.log(frutasString);
    console.log(frutasStringSemStringify);

    const frutasArray = JSON.parse(frutasString);
    console.log(frutasArray[0]); // Banana

    const frutasArraySemStringify = JSON.parse(frutasStringSemStringify); //essa string não possui o formato JSON
    console.log(frutasArraySemStringify[0]); // Banana
  }

  render() {
    return (
      <div className="App">
        <h1>Exemplo LocalSotrage</h1>
        <button onClick={this.guardarNome}>Guardar Nome</button>
        <button onClick={this.pegarNome}>Pegar Nome</button>
        <button onClick={this.guardarFrutas}>Guardar Frutas</button>
        <button onClick={this.pegarPrimeiraFruta}>Pegar Primeira Fruta</button>
      </div>
    );
  }
}
