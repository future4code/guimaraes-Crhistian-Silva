import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToTripApplication } from "../../routes/Coordinator";
import { useRequestData } from "../../components/hooks/Hooks";
import { StyledListTripsPage } from "./styleListTrip";

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const trips = useRequestData("");

  return (
    <StyledListTripsPage>
      <div>
        <button onClick={() => goToHome(navigate)}>Voltar</button>
        <button onClick={() => goToTripApplication(navigate)}>Inscrever-se</button>
      </div>
      <h1>Lista de Viagens</h1>
      <div class="container-lista">
        <ul>
          <li>Nome:</li>
          <li>Descrição:</li>
          <li>Planeta:</li>
          <li>Duração:</li>
          <li>Data:</li>
        </ul>
      </div>
      
         
      
    </StyledListTripsPage>
  );
};
