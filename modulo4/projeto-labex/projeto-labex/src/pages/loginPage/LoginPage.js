import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToAdminTripsList } from "../../routes/Coordinator";

export const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div className="body">
      <main>
        <form>
          <h2>Login</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <div class="button" onClick={() =>  goToAdminTripsList(navigate)}>
            <div class="container">
              <div class="tick">Entrar</div>
            </div>
          </div>
        </form>
      </main>
      <div className="container-buttons">
        <div class="button" onClick={() => goToHome(navigate)}>
          <div class="container">
            <div class="tick">Voltar ao Inicio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
