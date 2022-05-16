import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToTripApplication } from "../../routes/Coordinator";
import { useRequestData } from "../../components/hooks/useRequestData";
import { StyledListTripsPage } from "./styleListTrip";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { SpinnerJs } from "../../components/spinner/spinner";

export const ListTripsPage = () => {
  const navigate = useNavigate();

  const [trips, loading, error] = useRequestData(`${BASE_URL}/trips`, []);

  useEffect(()=>{},[trips])

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <div className="container-lista-trip-page" key={trip.id}>
          <div className="card-header">{trip.name}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Descrição: </b>{trip.description}</li>
            <li className="list-group-item"><b>Planeta: </b>{trip.planet}</li>
            <li className="list-group-item"><b>Duração: </b>{trip.durationInDays}</li>
            <li className="list-group-item"><b>Data: </b>{trip.date}</li>
          </ul>
        </div>
      );
    });

  return (
    <StyledListTripsPage>
      <h1>Lista de Viagens</h1>
      <div className="container-buttons-trip-page">
        <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
        <button
          onClick={() => {
            goToTripApplication(navigate);
          }}
        >
          Inscrever-se
        </button>
      </div>
      <>
        {loading && <SpinnerJs />}
        {!loading && error && <h2>Ocorreu Um Erro na Requisição</h2>}
        {!loading && trips && trips.length > 0 && tripsList}
        {!loading && trips && trips.length === 0 && (
          <h2> Não há Nenhuma Viagem</h2>
        )}
      </>
    </StyledListTripsPage>
  );
};
