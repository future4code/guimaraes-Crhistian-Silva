import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { goToHome } from "../../routes/Coordinator";
import { StyleApplicationForm  } from "./StyleApplicationForm.js";
import { UseRequestData } from "../../components/hooks/UseRequestData";


export const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const trips = UseRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/crhistian-felipe-guimaraes/trips",
    []
  );

  const retornoArray =(i) =>{
    trips.map((trip)=>{
      return(
        <select key={trip.id}>
        <option >Escolha uma Viagem...</option>
        <option >{trip.name}</option>
      </select>
      )
    })   
  }
  retornoArray()


  return(
    <StyleApplicationForm className="body">
      <h3 class="input-group-text" for="inputGroupSelect01">
        Escolha uma Viagem
      </h3>
      {trips.map((trip, i)=>{
        return(
          <select class="form-select" id="inputGroupSelect01" key={trip.id}>
          <option value disabled selected>Escolha uma Viagem...</option>
          <option value={trip.id}>{trip.name}</option>
        </select>
        )
      })}
      <div className="home-page">
        <input placeholder="Nome"></input>
        <input type="number" placeholder="idade"></input>
        <input placeholder="texto de candidatura"></input>
        <input placeholder="profissão"></input>
        <input type="lista de países" placeholder="Aqui vao os paises"></input>
      </div>
      <div className="container-buttons-application-page">
        <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
        <button> Enviar</button>
      </div>
    </StyleApplicationForm>
  );
};
