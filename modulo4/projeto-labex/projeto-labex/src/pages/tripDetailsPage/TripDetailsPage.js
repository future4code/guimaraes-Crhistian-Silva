import React from "react";
import { Button } from "../../components/button/Button";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";


export const TripDetailsPage = () => {

  const navigate = useNavigate();
  const param = useParams()
  console.log(param)

  return (
    <div className="body">
      <header>
        <div className="container-lista">
          <ul>
            <li>
              <p>Nome:</p>
              <p>Descrição:</p>
              <p>Planeta: </p>
              <p>Duração:</p>
              <p> Data: </p>
            </li>
          </ul>
          <div class="button" onClick={() => goBack (navigate)}>
            <div class="container">
              <div class="tick">Voltar</div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <h4> Candidatos Pendentes</h4>
          <ul>
            <li> Aqui vai a Lista de Candidatos pendentes</li>
          </ul>
        </div>

        <div>
          <h4> Candidatos Aprovados</h4>
          <ul>
            <li>Aqui vai a lista de Candidatos Aprovados</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
