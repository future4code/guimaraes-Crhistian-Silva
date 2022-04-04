import React from "react";
/* import { Button } from "../../components/button/Button"; */
import "./StyleAdminHomePage.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToCreateTrip } from "../../routes/Coordinator";
import { goToTripDetails } from "../../routes/Coordinator";
import { StyleAdminHomePage } from "./StyleAdminHomePage.js";

export const AdminHomePage = () => {
  const navigate = useNavigate();


  return (
    <StyleAdminHomePage>
        <div className="container-lista">
          <h1> Painel Administrativo</h1>
          <div className="retorno-lista">
            <button onClick={() => goToHome (navigate)}> Voltar ao Inicio</button>
            <button onClick={() => goToCreateTrip (navigate)}> Criar</button>
            <button> Logout</button>
          </div>
          <div className="lista-p" >
            <p onClick={() => goToTripDetails (navigate)}>Lista de quem vai viajar</p>
            <svg className="icone"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>
          <div className="lista-p" >
            <p>Lista de quem vai viajar23</p>
            <svg className="icone"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>
        </div>


    </StyleAdminHomePage>
  );
}
