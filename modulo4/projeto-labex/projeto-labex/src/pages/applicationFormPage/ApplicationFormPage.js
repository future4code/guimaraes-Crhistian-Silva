import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { StyleApplicationForm } from "./StyleApplicationForm.js";
import { useRequestData } from "../../components/hooks/useRequestData";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { SelectCountry } from "../../components/selectCountry/selectCountry";
import { useForm } from "../../components/hooks/useForm";

export const ApplicationFormPage = () => {
  const navigate = useNavigate();

  const [trips] = useRequestData(`${BASE_URL}/trips`, []);

  const [form, onChange, setForm] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const onSubmitFormTrip = (ev) => {
    ev.preventDefault();
    
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
   
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        window.alert("Cadastro Efetuado com Sucesso");
        console.log('clicou na funcao', body)
        setForm({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: "",
          trip: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }; 

  const tripsSelect = trips.map((trip) => {
    return (
      <option value={trip.id} key={trip.id}>
        {trip.name}
      </option>
    );
  })

  return (
    <StyleApplicationForm classNameName="container-application-page">
      <h1>
        Escolha uma Viagem
      </h1>
      <div >
        <form onSubmit={onSubmitFormTrip} className="form-application-page" >
          <select
            className="form-select"
            id="inputGroupSelect01"
            name="trip"
            onChange={onChange}
            value={form.trip}
          >
            <option selected="no-selected" value="none">
              Escolha uma Viagem...
            </option>
           { tripsSelect}
          </select>
          <input
            placeholder="Nome"
            name="name"
            onChange={onChange}
            value={form.name}
            required
            title="Seu Nome Deve Conter Minímo de 3 letras"
            pattern=".{3,}"
          ></input>
          <input
            type="number"
            placeholder="Idade"
            name="age"
            min={18}
            value={form.age}
            required
            onChange={onChange}
          ></input>
          <input
            placeholder="Insira seu Texto de Candidatura"
            name="applicationText"
            value={form.applicationText}
            required
            title="Seu Texto Deve Conter Minímo de 30 Caracteres"
            pattern=".{30,}"
            onChange={onChange}
          ></input>
          <input
            placeholder="Profissão"
            name="profession"
            onChange={onChange}
            value={form.profession}
          ></input>
          <SelectCountry
            valueName={"country"}
            valueForm={form.country}
            functionOnChangeCountry={onChange}
          />
          <div className="container-buttons-application-page">
            <button> Enviar</button>
          </div>
        </form> 
        <div>
          <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
        </div>
      </div>
    </StyleApplicationForm>
  );
}