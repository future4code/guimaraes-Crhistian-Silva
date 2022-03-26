import React, { useEffect, useState } from "react";
import Astromatch from "./astromatch.png";
import axios from "axios";
import ListaContatos from "./lista-contatos";

const urlAstro =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/crhistian-felipe-guimaraes";

function TelaInicial() {
  const [perfil, setPerfil] = useState([]);
  const [tela, setTela] = useState(false);

  const mudarTela = () => {
    setTela(!tela);
    console.log(tela);
  };

  const getProfile = () => {
    axios
      .get(`${urlAstro}/person`)
      .then((response) => {
        if (response.data.profile === null) {
          window.alert(
            "Seus Likes Acabaram, Clique no botão Limpar Para Começar a Dar Likes Novamente"
          );
        } else {
          setPerfil(response.data.profile);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const like = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };
    axios
      .post(`${urlAstro}/choose-person`, body)
      .then((response) => getProfile())
      .catch((error) => {
        console.log(error);
      });
  };

  const unLike = () => {
    const body = {
      id: perfil.id,
      choice: false,
    };
    axios
      .post(`${urlAstro}/choose-person`, body)
      .then((response) => getProfile())
      .catch((error) => console.log(error));
  };

  const clearAll = () => {
    if (window.confirm("Deseja Limpar Sua Lista de Matches ?")) {
      axios
        .put(`${urlAstro}/clear`)
        .then((response) => {
          console.log(response);
          getProfile();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="divbody1">
            <div className="body1-titulo"></div>
            <img className="body1-img" src={Astromatch} />
            <div className="body1-titulo">
              <svg className="svg-titulo" onClick={mudarTela}>
                <path d="M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5A3,3 0 0,1 9,8A3,3 0 0,1 6,11A3,3 0 0,1 3,8A3,3 0 0,1 6,5M11,5A3,3 0 0,1 14,8A3,3 0 0,1 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="divbody2">
            <div className="div-imagem-body2">
              <img className="imgbody" src={perfil.photo} />
              <div className="infos-user">
                <div className="bloco-infos"></div>
                <div className="titulo-info">{perfil.name},</div>
                <div className="idade-info">{perfil.age}</div>
                <p className="infos-p">{perfil.bio}</p>
              </div>
            </div>
            <div className="div-footer-body2">
              <div>
                <button onClick={unLike} className="botao-footer-x">
                  X
                </button>
                <button onClick={like} className="botao-footer-l">
                  ♥️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={clearAll} className="botao-limpar">
        Limpar
      </button>
      {tela && <ListaContatos estadoTela={tela} />}
    </div>
  );
}
export default TelaInicial;
