import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { goToHome } from "../../routes/Coordinator";
import { StyleApplicationForm } from "./StyleApplicationForm.js";
import { useRequestData } from "../../components/hooks/useRequestData";
import axios from "axios";
import { BASE_URL } from "../../components/urls/urlBase.js";
import { SelectCountry } from "../../components/selectCountry/selectCountry";
import { useForm } from "../../components/hooks/useForm";

export const ApplicationFormPage = () => {

  const params = useParams()

  const navigate = useNavigate();

  const trips = useRequestData(`${BASE_URL}/trips`,[]);
  const [form, onChange] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })

  
const onSubmitFormTrip = (ev) =>{
    
  ev.preventDefault()
  
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    }

    axios
    .post(`${BASE_URL}/trips/${params.id}/apply`, body)
    .then((res=>{
      window.alert("envio bem sucedido")
      console.log("BODY", form)
      console.log(res.data.message)
    }))
    .catch((err)=>{
      console.log("Erro ao se candidatar", err)
    })
  } 


  return (
    <StyleApplicationForm className="body">
      <h3 class="input-group-text" for="inputGroupSelect01">
        Escolha uma Viagem
      </h3>
      <div className="home-page">
      <form onSubmit={onSubmitFormTrip}>
      <select class="form-select" id="inputGroupSelect01" name="trip"   onChange={onChange}>
        <option selected="no-selected" value="none">
          Escolha uma Viagem...
        </option >
        {trips.map((trip) => {
          return <option  value={trip.id} key={trip.id}>{trip.name}</option>;
        })}
      </select>
        <input placeholder="Nome" name="name" onChange={onChange} value={form.name}  required  title="Seu Nome Deve Conter Minímo de 3 letras" pattern=".{3,}"></input>
        <input type="number" placeholder="idade"  name="age" min={18} value={form.age} required  onChange={onChange}></input>
        <input placeholder="texto de candidatura"  name="applicationText" value={form.applicationText}  required title="Seu Texto Deve Conter Minímo de 30 Caracteres" pattern=".{30,}" onChange={onChange}></input>
        <input placeholder="profissão" name="profession" onChange={onChange} value={form.profession} ></input>
        <SelectCountry   valueName={"country"} valueForm={form.country} functionOnChangeCountry={onChange}/>
      <div className="container-buttons-application-page"> 
        <button > Enviar</button>
      </div>
      </form>
      <div className="container-buttons-application-page"> 
      <button onClick={() => goToHome(navigate)}> Voltar ao Inicio</button>
      </div>
      
      </div>
      
     
      
    </StyleApplicationForm>
  );
};
