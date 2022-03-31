import React, { useState } from "react";
import Button from "../../components/Button";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToTripsList = () =>{
    navigate("/admin/trips/list")
  }
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
          <div class="button" onClick={goToTripsList}>
            <div class="container">
              <div class="tick">Entrar</div>
            </div>
          </div>
        </form>
      </main>
      <div className="container-buttons">
        <div class="button" onClick={goToHome}>
          <div class="container">
            <div class="tick">Voltar ao Inicio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
