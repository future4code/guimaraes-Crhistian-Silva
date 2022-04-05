import React, { useEffect, useState } from "react";
/* import { Button } from "../../components/button/Button"; */
import "./StyleAdminHomePage.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToCreateTrip } from "../../routes/Coordinator";
/* import { goToTripDetails } from "../../routes/Coordinator"; */
import { StyleAdminHomePage } from "./StyleAdminHomePage.js";
import { UseRequestData } from "../../components/hooks/useRequestData";
import axios from "axios";
import { UseProtectedPage } from "../../components/hooks/useProtectedpage";


export const AdminHomePage = () => {
  
  UseProtectedPage()

  const navigate = useNavigate();

  const trips = UseRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/crhistian-felipe-guimaraes/trips",
    []
  );
  
  const delToken = () =>{
    localStorage.setItem("token", "login")
    navigate("/login")
  }


  const returnMapTrip = trips.map((trip) => {
    return (
      <div className="lista-p" >
        <p key={trip.id} onClick={() => goToTripDetails(trip.id)}>{trip.name}</p>
        <svg className="icone">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </div>
    );
  })

  const goToTripDetails =(id) =>{
    navigate(`/admin/trips/${id}`)
  }

  return (
    <StyleAdminHomePage>
      <div className="container-lista">
        <h1> Painel Administrativo</h1>
        <div className="retorno-lista">
          <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
          <button onClick={() => goToCreateTrip(navigate)}> Criar</button>
          <button onClick={delToken}> Logout</button>
        </div>
    {returnMapTrip}
      </div>
    </StyleAdminHomePage>
  );
};
