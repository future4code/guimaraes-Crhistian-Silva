import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { Button } from "../../components/button/Button"; */
import "./StyleAdminHomePage.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToCreateTrip } from "../../routes/Coordinator";
import { StyleAdminHomePage } from "./StyleAdminHomePage.js";
import { useRequestData } from "../../components/hooks/useRequestData";
import { useProtectedPage } from "../../components/hooks/useProtectedpage";
import { BASE_URL } from "../../components/urls/urlBase.js";
import axios from "axios";

export const AdminHomePage = () => {

  useProtectedPage();

  const params = useParams();

  const navigate = useNavigate();

  
  const [trips, setTrips] = useState([])

  useEffect(()=>{
    getTripList()

  },[])

  const getTripList = () =>{
    axios
    .get(`${BASE_URL}/trips`)
    .then((res)=>{
        setTrips(res.data.trips)
    })
    .catch((err)=>{
        console.log(err)
    })  
  }
     

  const returnMapTrip = trips.map((trip) => {
    return (
      <div className="lista-p">
        <p key={trip.id} onClick={() => goToTripDetails(trip.id)}>
          {trip.name}
        </p>
        <svg className="icone" onClick={() => delTrip(trip.id)}>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </div>
    );
  });


  const delTrip =  async (id) =>{
    const token = localStorage.getItem("token")
    const headers = {headers: {auth: token}}

    if (window.confirm("Deseja deletar")) {
      try {
        const response = await 
        axios.delete(`${BASE_URL}/trips/${id}`, headers);
        getTripList()
        window.alert(" Viagem deletada com sucesso" 
        );
      }
      catch (error) {
        console.log(error.response);
      }
  }
}

  
  const delToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToTripDetails = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  

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
