import React from "react";

const App = () => {
  const listaDeStrings = ["Banana", "Laranja", "Maçã"];

  // const frutas = [
  //   <li>Banana</li>,
  //   <li>Laranja</li>,
  //   <li>Maçã</li>
  // ]

  const frutas = listaDeStrings.map((fruta, index) => {
    return <li key={index}>{fruta}</li>;
  });

  const listaDeNumeros = [1, 2, 3];

  const listaDeObjetos = [
    { id: 1, nome: "Bulbasauro", tipo: "Planta e Veneno" },
    { id: 2, nome: "Squirtle", tipo: "Água" },
    { id: 3, nome: "Charmander", tipo: "Fogo" }
  ];

  const pokemons = listaDeObjetos.map((poke) => {
    return (
      <div key={poke.nome}>
        <p>Nome: {poke.nome}</p>
        <p>Tipo: {poke.tipo}</p>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h1>Bom dia, Carver!</h1>
      {frutas}
      <hr />
      {pokemons}
    </div>
  );
};

export default App;
