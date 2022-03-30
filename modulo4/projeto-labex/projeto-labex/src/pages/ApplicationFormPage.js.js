import React from "react";

export default function ApplicationFormPage() {
  return (
    <div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">
          Escolha uma Viagem
        </label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Viagem 1</option>
          <option value="2">Viagem 2</option>
          <option value="3">Viagem 3</option>
        </select>
        <input placeholder="Nome"></input>
        <input type="number" placeholder="idade"></input>
        <input placeholder="texto de candidatura"></input>
        <input placeholder="profissão"></input>
        <input type="lista de países" placeholder="Aqui vao os paises"></input>
        <button> voltar</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}
