import React from "react";
import { StyleErrorPage } from "./styleErrorPage";
import { goBack } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <StyleErrorPage>
      <h1>Erro 404</h1>
      <h5>Confira o Endereço Digitado na Barra de Navegação</h5>
      <button onClick={() => goBack(navigate)}> Voltar</button>
    </StyleErrorPage>
  );
};
