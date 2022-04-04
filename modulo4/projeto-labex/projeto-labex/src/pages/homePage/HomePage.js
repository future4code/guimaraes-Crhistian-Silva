import React from "react";
import "./StyleHome.js";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import { goToTripsList } from "../../routes/Coordinator";
import { Button } from "../../components/button/Button";
import { StyleHomePage } from "./StyleHome.js";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <StyleHomePage>
      <h1>Tela Inicial</h1>
      <div className="container-buttons-trip-page">
        <button onClick={() => goToTripsList(navigate)}> Ver Viagens</button>
        <button onClick={() => goToLogin(navigate)}> Área Admin</button>
      </div>
    </StyleHomePage>
  );
};

export default HomePage;
