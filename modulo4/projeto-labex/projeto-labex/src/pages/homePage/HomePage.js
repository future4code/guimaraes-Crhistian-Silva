import React from "react";
import Button from "../../components/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const goToTripsList = () => {
    navigate("/trips/list");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="body">
      <h2>Tela Inicial</h2>
      <div className="container-buttons">
        <div class="button" onClick={goToTripsList}>
          <div class="container">
            <div class="tick">Ver Viagens</div>
          </div>
        </div>
        <div class="button" onClick={goToLogin}>
          <div class="container">
            <div class="tick">Área Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}
