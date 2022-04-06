import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToTripApplication } from "../../routes/Coordinator";
import { useRequestData } from "../../components/hooks/useRequestData";
import { StyledListTripsPage } from "./styleListTrip";
import { BASE_URL } from "../../components/urls/urlBase.js";

export const ListTripsPage = () => {
  const navigate = useNavigate();

  const trips = useRequestData(`${BASE_URL}/trips`,[]);

  return (
    <StyledListTripsPage>
     <div className="container-buttons-trip-page">
     <button onClick={() => goToHome (navigate)}> Voltar ao Inicio</button>
       <button onClick={()=>{goToTripApplication(navigate)}}> Inscrever-se </button>
          </div>
      <h1>Lista de Viagens</h1>
      {trips.map((trip) => {
        return (
          <div class="container-lista-trip-page" key={trip.id}>
            <ul>
              <li>
                <b>Nome: </b>
                {trip.name}
              </li>
              <li>
                <b>Descrição: </b> {trip.description}
              </li>
              <li>
                <b>Planeta: </b> {trip.planet}
              </li>
              <li>
                <b>Duração: </b>
                {trip.durationInDays}
              </li>
              <li>
                <b>Data: </b>
                {trip.date}
              </li>
            </ul>
          </div>
        );
      })}
    </StyledListTripsPage>
  );
};
