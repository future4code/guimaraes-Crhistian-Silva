import React, {useState, useEffect}from "react";
import { Button } from "../../components/button/Button";
import { StyleTripDetailsPage } from "./StyleTripDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import axios from 'axios';
import { UseProtectedPage } from "../../components/hooks/useProtectedpage";

export const TripDetailsPage = () => {

  UseProtectedPage()


  const[tripDetails, setTripDetails] = useState([])


  const navigate = useNavigate();

  const params = useParams();
  
  useEffect(()=>{

    const token = localStorage.getItem('token')

    axios

    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/crhistian-felipe-guimaraes/trip/${params.id}`,
    {
      headers: {
        auth: token
      }
    })
    .then((res)=>{
    setTripDetails(res.data.trip) 
    })
    .catch((err)=>{
      console.log(err)
    })
  },{})

  return (
  
    <StyleTripDetailsPage className="body" >
      <div class="container-lista-tripdetails-page">
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
