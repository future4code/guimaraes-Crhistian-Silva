import React from "react";
import Button from "../../components/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToCreateTrip = () =>{
    navigate("/admin/trips/create")
  }

  const goToTripDetails = ()=>{
    navigate("/admin/trips/id")

  }
  

  return (
    <div>
      <div>
        <div className="container-lista">
          <h1> Painel Administrativo</h1>
          <div className="retorno-lista">
            <button onClick={goToHome}> Voltar ao Inicio</button>
            <button onClick={goToCreateTrip}> Criar</button>
            <button> Logout</button>
          </div>
          <div className="lista-p" >
            <p onClick={goToTripDetails}>Lista de quem vai viajar</p>
            <svg className="icone"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>
          <div className="lista-p" >
            <p>Lista de quem vai viajar23</p>
            <svg className="icone"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </div>

        </div>
      </div>

    </div>
  );
}
