import React from "react";
import "./StyleLogin.js";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { StyleLogin } from "./StyleLogin.js";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { useForm } from "../../components/hooks/useForm";

export const LoginPage = () => {
  const [form, onChange] = useForm({ email: "", password: "" });

  const onSubmitFormLogin = (ev) => {
    ev.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.alert("Login Efetuado Com Sucesso");
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        window.alert(
          "Dados Incorretos, Digite Seus Dados Corretamente Para Efetuar O Login"
        );
      });
  };

  const navigate = useNavigate();

  return (
    <StyleLogin>
      <main>
        <h2>Login</h2>
        <form onSubmit={onSubmitFormLogin}>
          <div className="mb-3">
            <label  className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="E-mail"
              value={form.email}
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
              value={form.password}
              onChange={onChange}
              name="password"
            />
          </div>
          <button> Entrar</button>
        </form>
        <div className="container-buttons-application-page"></div>
      </main>
      <div className="container-buttons">
        <div className="button" onClick={() => goToHome(navigate)}>
          <div className="container">
            <div className="tick">Voltar ao Inicio</div>
          </div>
        </div>
      </div>
    </StyleLogin>
  );
};
