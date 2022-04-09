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
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token } };

    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${BASE_URL}/trip/${params.id}`,
          headers
        );
        setTripDetails(data.trip);
        setCandidates(data.trip.candidates);
        setApproveds(data.trip.approved);
        setTripId(data.trip.id);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [candidates]);

  const tripsListDetails = () => {
    return (
      <>
        <ul>
          <li>
            <b>Nome: </b>
            {tripDetails.name}
          </li>
          <li>
            <b>Descrição: </b> {tripDetails.description}
          </li>
          <li>
            <b>Planeta: </b> {tripDetails.planet}
          </li>
          <li>
            <b>Duração: </b>
            {tripDetails.durationInDays}
          </li>
          <li>
            <b>Data: </b>
            {tripDetails.date}
          </li>
        </ul>
      </>
    );
  };

  const returnListPendingCandidates = candidates.map((candidate) => {
    return (
      <ul>
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

  const returnListApproveds = approveds.map((candidate) => {
    return (
      <ul>
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
        {!loading && error && <h2>Ocorreu Um Erro na Requisição</h2>}
        {!loading && tripDetails && tripsListDetails()}
        {!loading && tripDetails && tripDetails === 0 && (
          <h2> Não há Nenhuma Viagem</h2>
        )}
      </div>

      <h2>Lista de Candidatos Pendentes</h2>
      <div className="container-candidate-pending">
        {loading && <SpinnerJs />}
        {!loading && error && <h2>Ocorreu Um Erro na Requisição</h2>}
        {returnListPendingCandidates}
      </div>
      <h2>Lista de Candidatos Aprovados</h2>
      <div className="container-candidate-approved">{returnListApproveds}</div>
      <button onClick={() => goBack(navigate)}>Voltar ao Painel</button>
    </StyleTripDetailsPage>
  );
};
