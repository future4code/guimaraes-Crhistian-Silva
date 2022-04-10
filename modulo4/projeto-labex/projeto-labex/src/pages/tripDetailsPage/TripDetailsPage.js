import React, { useState, useEffect } from "react";
import { StyleTripDetailsPage } from "./StyleTripDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import axios from "axios";
import { useProtectedPage } from "../../components/hooks/useProtectedpage";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { SpinnerJs } from "../../components/spinner/spinner";

export const TripDetailsPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();

  const [tripDetails, setTripDetails] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [approveds, setApproveds] = useState([]);
  const [tripId, setTripId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getTripDetails();
  }, []);

  const getTripDetails = async () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token } };

    setLoading(true);
    try {
      const { data } = await axios.get(
        `${BASE_URL}/trip/${params.id}`,
        headers
      );
      setTripDetails([data.trip]);
      setCandidates(data.trip.candidates);
      setApproveds(data.trip.approved);
      setTripId(data.trip.id);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  const tripsListDetails =
    tripDetails &&
    tripDetails.map((trip) => {
      return (
        <>
          <ul key={trip.id}>
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
        </>
      );
    });

  const returnListPendingCandidates =
    candidates &&
    candidates.map((candidate) => {
      return (
        <ul key={candidate.id}>
          <li>
            <b>Nome: </b>
            {candidate.name}
          </li>
          <li>
            <b>Profissão: </b>
            {candidate.profession}
          </li>
          <li>
            <b>Idade: </b>
            {candidate.age}
          </li>
          <li>
            <b>País: </b>
            {candidate.country}
          </li>
          <li>
            <b>Texto de Candidatura: </b>
            {candidate.applicationText}
          </li>
          <div className="buttons-container-pending">
            <button onClick={() => approveCandidate(candidate.id)}>
              Aprovar
            </button>
            <button onClick={() => reproveCandidate(candidate.id)}>
              Reprovar
            </button>
          </div>
        </ul>
      );
    });

  const returnListApproveds =
    approveds &&
    approveds.map((candidate) => {
      return (
        <ul key={candidate.id}>
          <li>
            <b>Nome: </b>
            {candidate.name}
          </li>
        </ul>
      );
    });

  const approveCandidate = async (id) => {
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token } };
    const body = { approve: true };

    if (window.confirm("Deseja Aprovar o Candidato ?")) {
      try {
        const response = await axios.put(
          `${BASE_URL}/trips/${tripId}/candidates/${id}/decide`,
          body,
          headers
        );
        getTripDetails()
        window.alert("Candidato Aprovado Com Sucesso");
      } catch (err) {
        window.alert("Candidato Não Aprovado");
      }
    }
  };

  const reproveCandidate = async (id) => {
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token } };
    const body = { approve: false };

    if (window.confirm("Deseja Reprovar o Candidato ? ")) {
      try {
        const response = await axios.put(
          `${BASE_URL}/trips/${tripId}/candidates/${id}/decide`,
          body,
          headers
        );
        getTripDetails()
        window.alert(" Candidato Reprovado Com Sucesso");
      } catch (err) {
        window.alert("Candidato Não Reprovado");
      }
    }
  };

  return (
    <StyleTripDetailsPage>
      <h1> Lista de Viagens</h1>
      <div className="container-trip-details">
        {loading && <SpinnerJs />}
        {!loading && error && <h4>Ocorreu Um Erro na Requisição</h4>}
        {!loading && tripDetails && tripDetails.length > 0 && tripsListDetails}
        {!loading && tripDetails && tripDetails.length === 0 && (
          <h2> Não há Nenhuma Viagem</h2>
        )}
      </div>
      <h2>Lista de Candidatos Pendentes</h2>
      <div className="container-candidate-pending">
        {loading && <SpinnerJs />}
        {!loading && error && <h4>Ocorreu Um Erro na Requisição</h4>}
        {!loading &&
          candidates &&
          candidates.length > 0 &&
          returnListPendingCandidates}
        {!loading && candidates && candidates.length === 0 && (
          <h4> Não há Nenhum Candidato</h4>
        )}
      </div>
      <h2>Lista de Candidatos Aprovados</h2>
      <div className="container-candidate-approved">
        {loading && <SpinnerJs />}
        {!loading && error && <h4>Ocorreu Um Erro na Requisição</h4>}
        {!loading && approveds && approveds.length > 0 && returnListApproveds}
        {!loading && approveds && approveds.length === 0 && (
          <h4> Não há Nenhum Candidato</h4>
        )}
      </div>
      <button onClick={() => goBack(navigate)}>Voltar ao Painel</button>
    </StyleTripDetailsPage>
  );
};
