import React, { useEffect } from "react";
import "./StyleCreatePage.js";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinator";
import { StyleCreatePage } from "./StyleCreatePage.js";
import { useProtectedPage } from "../../components/hooks/useProtectedpage";
import { useForm } from "../../components/hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase";

export const CreateTripPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const onSubmitFormCreateTrip = (ev) => {
    ev.preventDefault();
    const token = localStorage.getItem("token");
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };
    const headers = { headers: { auth: token } };

    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((res) => {
        window.alert("Viagem Criada Com Sucesso");
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        window.alert("Digite Os Dados Corretamente");
      });
  };

  return (
    <StyleCreatePage>
      <h2>Criar Viagem</h2>
      <div className="container-buttons-create-page">
        <form onSubmit={onSubmitFormCreateTrip}>
          <input
            name="name"
            placeholder="Nome Completo"
            onChange={onChange}
            required
            title="Seu Nome Deve Conter Minímo de 5 letras"
            pattern=".{5,}"
          ></input>
          <select
            name="planet"
            class="form-select"
            aria-label="Default select example"
            onChange={onChange}
          >
            <option selected>Escolha o Planeta</option>
            <option value="Mercúrio<">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="3">Terra</option>
            <option value="Terra">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </select>
          <input
            name="date"
            type="date"
            onChange={onChange}
            required
            title="A Viagem Deve Começar em Uma Data Futura"
            min="2022-06-05"
          ></input>
          <input
            name="description"
            placeholder="Descrição"
            title="Sua Descrição Deve Conter Minímo de 30 Caracteres"
            onChange={onChange}
            required
            pattern=".{30,}"
          ></input>
          <input
            name="durationInDays"
            placeholder="Duração em dias"
            type="number"
            required
            min="50"
            onChange={onChange}
          ></input>
          <button> Criar Viagem</button>
        </form>
        <button id="button-back" onClick={() => goBack(navigate)}>
          {" "}
          Voltar ao Painel
        </button>
      </div>
    </StyleCreatePage>
  );
};
