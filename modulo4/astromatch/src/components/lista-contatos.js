import axios from "axios";
import React, { useEffect, useState } from "react";
import Astromatch from "./astromatch.png";
import TelaInicial from "./telaInicial";

const urlAstro =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/crhistian-felipe-guimaraes";

function ListaContatos(props) {
  const [novoEstadoTela, setNovoEstadotela] = useState(props.estadoTela);
  const [novoEstadoPerfil, setNovoEstadoPerfil] = useState([]);

  const mudaTela = () => {
    setNovoEstadotela(!novoEstadoTela);
  };

  useEffect(() => {
    getMatches();
  }, []);

 
  const getMatches = () => {
    axios
      .get(`${urlAstro}/matches`)
      .then((response) => setNovoEstadoPerfil(response.data.matches))
      .catch((error) => console.log(error));
  };

  const clearAll = () => {
    if(window.confirm("Deseja Resetar Sua Lista de Matches ?")){
      axios
      .put(`${urlAstro}/clear`)
      .then((response) => setNovoEstadoPerfil([]))
      .catch((error) => console.log(error));
    }
  };
  
  const RetornoPerfil = () => {
    return (
      <>
        {novoEstadoPerfil.map((user) => {
          return (
              <ul key={user.id} className="ul-contatos">
                <li className="lista-contatos">
                  <img className="div-imagem-lista" src={user.photo}></img>
                  <p className="p-lista-contatos">{user.name}</p>
                </li>
              </ul>
          );
        })}
      </>
    );
  };

  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="divbody1">
            <div className="body1-titulo">
              <svg className="svg-titulo-lista" onClick={mudaTela}>
                <path d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z"></path>
              </svg>
            </div>
            <div className="body1-titulo"></div>
            <img className="body1-img" src={Astromatch} />
          </div>
          <RetornoPerfil />
        </div>
        
      </div>
      <button className="botao-limpar" onClick={clearAll}>
        Limpar
      </button>
      {!novoEstadoTela && <TelaInicial />}
    </div>
  );
}

export default ListaContatos;
