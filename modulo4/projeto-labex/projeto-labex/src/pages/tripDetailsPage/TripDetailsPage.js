import React, { useState, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { StyleTripDetailsPage } from "./StyleTripDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import axios from "axios";
import { useProtectedPage } from "../../components/hooks/useProtectedpage";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { useRequestData } from "../../components/hooks/useRequestData";

export const TripDetailsPage = () => {
  useProtectedPage();

  const [tripDetails, setTripDetails] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [tripId, setTripId] = useState([]);
  const [candidateId, setCandidateId] = useState([]);

  const navigate = useNavigate();

  const params = useParams();

  const trips = useRequestData(`${BASE_URL}`);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios

      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/crhistian-felipe-guimaraes/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTripDetails(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios

      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setCandidates(res.data.trip.candidates);
        setTripId(res.data.trip.id);
        setCandidateId(res.data.trip.candidates.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});

  const approveCandidate = () => {
    const token = localStorage.getItem("token");
    const body = { approve: true };
    axios
      .put(`${BASE_URL}/trips/${tripId}/candidates/${params.id}/decide`, {
        headers: { auth: token } 
      }, body)
      .then((res) => {
        console.log("deu certo");
      })
      .catch((err) => {
        console.log("deu errado");
      });
  };

  const reproveCandidate = () => {
    const token = localStorage.getItem("token");
    const body = { approve: false };
    axios
      .put(`${BASE_URL}/trips/${tripId}/candidates/${params.id}/decide`, {
        headers: { auth: token },
      }, body)
      .then((res) => {
        console.log("deu certo");
      })
      .catch((err) => {
        console.log("deu errado");
      });
  };

  console.log(tripId);
  console.log(candidateId)

  const tripCandidates = candidates.map((candidate) => {
    return (
      <div class="container-trip-details">
        <ul>
          <li>
            <b>Nome: </b>
            {candidate.name}
          </li>
          <li>
            <b>Descrição: </b> {candidate.profession}
          </li>
          <li>
            <b>Planeta: </b> {candidate.age}
          </li>
          <li>
            <b>Duração: </b>
            {candidate.country}
          </li>
          <li>
            <b>Data: </b>
            {candidate.applicationText}
          </li>

          <button id="btn-candidates" onClick={approveCandidate}>
            Aprovar
          </button>
          <button id="btn-candidates" onClick={reproveCandidate}>
            Reprovar
          </button>
        </ul>
      </div>
    );
  });

  const returnListTrip = () =>{
    return (
      <div class="container-trip-details">
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
    </div>
    )
  }


  return (
    <StyleTripDetailsPage>
      {returnListTrip()}
     
      <button onClick={() => goBack(navigate)}> Voltar</button>
      <h1> Candidatos Pendentes</h1>
      {tripCandidates}
      <h1> Candidatos Aprovados</h1>
      <div>
        <ul>
          <li>Aqui vai a lista de Candidatos Aprovados</li>
        </ul>
        {returnListTrip()}
      </div>

         
    </StyleTripDetailsPage>
  );
};
