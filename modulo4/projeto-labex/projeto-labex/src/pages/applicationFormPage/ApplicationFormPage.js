import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import "./style.css";
import { goToHome } from "../../routes/Coordinator";

export const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className="body">
      <h2 class="input-group-text" for="inputGroupSelect01">
        Escolha uma Viagem
      </h2>
      <select class="form-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">Viagem 1</option>
        <option value="2">Viagem 2</option>
        <option value="3">Viagem 3</option>
      </select>
      <input placeholder="Nome"></input>
      <input type="number" placeholder="idade"></input>
      <input placeholder="texto de candidatura"></input>
      <input placeholder="profissão"></input>
      <input type="lista de países" placeholder="Aqui vao os paises"></input>
      <div className="container-buttons">
        <div class="button" onClick={() => goToHome(navigate)}>
          <div class="container">
            <div class="tick">Voltar ao Início</div>
          </div>
        </div>
        <div class="button">
          <div class="container">
            <div class="tick">Enviar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
