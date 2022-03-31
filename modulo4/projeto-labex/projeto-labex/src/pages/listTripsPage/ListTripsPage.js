import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./style.css";


export default function ListTripsPage() {
  
  const navigate = useNavigate();

  const goToTripApplication = () => {
    navigate("/trips/application");
  };

  const goToHomePage = () => {
    navigate("/")
  }
  
  return (

    <div className="body">
      <header>
      <div className="container-buttons">
        <div class="button" onClick={goToHomePage} >
          <div class="container">
            <div class="tick">
              Voltar
            </div>
          </div>
        </div>
        <div class="button" onClick={goToTripApplication}>
          <div class="container">
            <div class="tick">
             Inscrever-se
            </div>
          </div>
        </div>
      </div>
      </header>
      <main>
      <h2>Tela Lista de Viagens</h2>
      <ul>
        <li>
          <p>Nome:</p>
          <p>Descrição:</p>
          <p>Planeta: </p>
          <p>Duração:</p>
          <p> Data: </p>
        </li>
      </ul>

      </main>
    </div>
  )
}
