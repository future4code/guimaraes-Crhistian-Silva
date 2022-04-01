import React from "react";
import { Button } from "../../components/button/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";

export const CreateTripPage = () => {
  const navigate = useNavigate();


  return (
    <div className="body">
      <h2>Criar Viagem</h2>
      <form>
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

      </form>
      <div className="container-buttons">
        <div class="button" onClick={() => goToHome(navigate)}>
          <div class="container">
            <div class="tick">
            Voltar ao Inicio
            </div>
          </div>
        </div>
        <div class="button" >
          <div class="container">
            <div class="tick">
             Criar Viagem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}