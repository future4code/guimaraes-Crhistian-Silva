import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import { goToTripsList } from "../../routes/Coordinator";
import { Button } from "../../components/button/Button";
export const HomePage =()=> {

  const navigate = useNavigate();

  return (
    <div className="body">
      <h2>Tela Inicial</h2>
      <div className="container-buttons">
        <div class="button" onClick={() => goToTripsList(navigate)}>
          <div class="container">
            <div class="tick">Ver Viagens</div>
          </div>
        </div>
        <div class="button" onClick={() => goToLogin(navigate)}>
          <div class="container">
            <div class="tick">Área Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage