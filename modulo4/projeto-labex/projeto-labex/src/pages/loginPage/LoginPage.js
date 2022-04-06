import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import "./StyleLogin.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToAdminTripsList } from "../../routes/Coordinator";
import { StyleLogin } from "./StyleLogin.js";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase.js";


export const LoginPage = () => {

  const navigate = useNavigate();
  
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const onChangeEmail = (ev) =>{
    setEmail(ev.target.value)
  }

  const onChangePassword = (ev) =>{
    setPassword(ev.target.value)
  }

  const login = () =>{
    const body = {
    email: email,
    password: password,
  }
  axios
  .post(`${BASE_URL}/login`, body)
  .then((res)=>{
    localStorage.setItem("token", res.data.token)
    window.alert("Login Efetuado Com Sucesso")
    navigate("/admin/trips/list")
  })
  .catch((err)=>{
    window.alert("Dados Incorretos, Digite Seus Dados Corretamente Para Efetuar O Login")
  })
}

  return (
    <StyleLogin>
      <main>
      <h2>Login</h2>
        <form>
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
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
                          class="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </form>
        <div className="container-buttons-application-page">
        <button onClick={login}> Entrar</button>
            </div>
      </main>
      <div className="container-buttons">
        <div class="button" onClick={() => goToHome(navigate)}>
          <div class="container">
            <div class="tick">Voltar ao Inicio</div>
          </div>
        </div>
      </div>
    </StyleLogin>
  );
}
