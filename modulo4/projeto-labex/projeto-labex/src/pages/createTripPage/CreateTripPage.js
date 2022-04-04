import React from "react";
import { Button } from "../../components/button/Button";
import "./StyleCreatePage.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { StyleCreatePage } from "./StyleCreatePage.js";

export const CreateTripPage = () => {
  const navigate = useNavigate();

  return (
    <StyleCreatePage>
      <h2>Criar Viagem</h2>
      <div className="container-form-create"></div>

        <input placeholder="Nome"></input>
        <select class="form-select" aria-label="Default select example">
          <option selected>Escolha o Planeta</option>
          <option value="1">Mercúrio</option>
          <option value="2">Vênus</option>
          <option value="3">Terra</option>
          <option value="4">Marte</option>
          <option value="5">Júpiter</option>
          <option value="6">Saturno</option>
          <option value="7">Urano</option>
          <option value="8">Netuno</option>
          <option value="9">Plutão</option>
        </select>
        <input type="date"></input>
        <input placeholder="descricao"></input>
        <input placeholder="duracao em dias"></input>
      <div className="container-buttons-create-page">
        <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
        <button> Criar Viagem</button>
      </div>
    </StyleCreatePage>
  );
};
