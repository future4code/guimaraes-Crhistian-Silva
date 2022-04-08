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
  const navigate = useNavigate();
  const params = useParams();

  const [tripDetails,setTripDetails] = useState([])
  const [candidates, setCandidates] = useState([]);
  const [approveds, setApproveds] = useState([])


  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { headers: { auth: token }};

    axios

      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/crhistian-felipe-guimaraes/trip/${params.id}`, headers)
      .then((res) => {
        setTripDetails(res.data.trip);
        setCandidates(res.data.trip.candidates) 
        setApproveds(res.data.trip.approved)       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 /*  console.log(tripDetails) */

 console.log(approveds)
  const returnListTrips = () =>{
    return(
      <div className="container-trip-details">
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

  const returnListApproveds = approveds.map((candidate) =>{
    return(
 
       
        <ul>
          <li>
            <b>Nome:   </b>
            {candidate.name}
          </li>
          </ul>

    )
        
  })


  return(
    < StyleTripDetailsPage>

    <h1> TESTE</h1>
    {returnListTrips()}
   <h1>Lista de Candidatos Aprovados</h1>
    
  
    <div className="container-candidate-approved">
    {returnListApproveds}
    </div>
    <button onClick={() => goBack(navigate)}> Voltar</button>
    </ StyleTripDetailsPage>
  )
  
}