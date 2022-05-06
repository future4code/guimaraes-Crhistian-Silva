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

  const [form, onChange, setForm] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
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
        setForm({
          name: "",
          planet: "",
          date: "",
          description: "",
          durationInDays: "",
        });
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
            placeholder="Nome da Viagem"
            onChange={onChange}
            required
            title="Nome da Viagem Deve Conter Minímo de 5 letras"
            pattern=".{5,}"
            value={form.name}
          ></input>
          <select
            name="planet"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.planet}
            required
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
            value={form.date}
          ></input>
          <input
            name="description"
            placeholder="Descrição"
            title="Sua Descrição Deve Conter Minímo de 30 Caracteres"
            onChange={onChange}
            required
            pattern=".{30,}"
            value={form.description}
          ></input>
          <input
            name="durationInDays"
            placeholder="Duração em dias"
            type="number"
            required
            min="50"
            onChange={onChange}
            value={form.durationInDays}
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
