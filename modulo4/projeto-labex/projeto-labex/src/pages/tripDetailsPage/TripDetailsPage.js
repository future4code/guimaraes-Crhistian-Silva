import React from "react";
import { Button } from "../../components/button/Button";
import { StyleTripDetailsPage } from "./StyleTripDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";

export const TripDetailsPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  return (
  
    <StyleTripDetailsPage className="body" >
      <div className="container-lista-tripdetails-page">
        <ul>
          <li>
            <p>Nome:</p>
            <p>Descrição:</p>
            <p>Planeta: </p>
            <p>Duração:</p>
            <p>Data: </p>
          </li>
        </ul>
      </div>
      <div className="container-buttons-tripDetails-page">
        <button onClick={() => goBack(navigate)}> Voltar</button>
      </div>
      <h1> Candidatos Pendentes</h1>
      <div class="container-trip-details">
        <ul>
          <li> Aqui vai a Lista de Candidatos pendentes</li>
        </ul>
      </div>
      <h1> Candidatos Aprovados</h1>
      <div class="container-trip-details">
        <ul>
          <li>Aqui vai a lista de Candidatos Aprovados</li>
        </ul>
      </div>
    </StyleTripDetailsPage>

  );
};
